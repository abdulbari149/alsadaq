import { HttpConflictError } from '@/errors'
import prisma from '@/lib/prisma'
import authValidator, { SignupSchema } from '@/server/validators/auth.validator'
import handleError from '@/utils/handle-error'
import validate from '@/utils/validate'
import { HttpStatusCode } from 'axios'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const body = await validate<SignupSchema>(authValidator.signup, json)
    const hashedPassword = await hash(body.password, 10)
    body.password = hashedPassword
    const foundUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: body.email }, { username: body.username }],
      },
    })

    if (foundUser) {
      throw new HttpConflictError('User already exists')
    }

    const user = await prisma.user.create({
      data: {
        ...body,
        role: 'user',
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      }
    })

    return NextResponse.json(
      { data: user, error: null, success: true },
      { status: HttpStatusCode.Created },
    )
  } catch (error) {
    return handleError(error)
  }
}
