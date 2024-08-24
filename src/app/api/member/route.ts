import { userSelect } from '@/constants/select'
import { HttpConflictError } from '@/errors'
import prisma from '@/lib/prisma'
import memberValidator, {
  CreateMemberSchema
} from '@/server/validators/member.validator'
import handleError from '@/utils/handle-error'
import validate from '@/utils/validate'
import { Prisma, Roles } from '@prisma/client'
import { HttpStatusCode } from 'axios'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'
import generator from 'generate-password';
import sendAccountCreationEmail from '@/server/services/email.service';
import authorizer from '@/server/middleware/authorizer'

export async function POST(request: Request) {
  try {
    await authorizer(Roles.member, Roles.admin);
    const json = await request.json()
    const body = await validate<CreateMemberSchema>(
      memberValidator.create,
      json,
    )

    const password = generator.generate({
      length: 8,
      numbers: true,
      lowercase: true,
      uppercase: true,
      symbols: true,
      excludeSimilarCharacters: true,
    });

    const hashedPassword = await hash(password, 10);

    const foundUser = await prisma.user.findFirst({ where: { email: body.email } });
    if (foundUser) {
      throw new HttpConflictError('Email already taken')
    }

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
        username: body.name,
        role: "member"
      },
      select: userSelect
    });


    await sendAccountCreationEmail(user.email, {
      email: user.email,
      name: user.username,
      password,
    })

    return NextResponse.json(
      { data: user, error: null, success: true },
      { status: HttpStatusCode.Created },
    )
  } catch (error) {
    return handleError(error)
  }
}
