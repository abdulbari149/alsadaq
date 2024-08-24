import prisma from '@/lib/prisma'
import authorizer from '@/server/middleware/authorizer'
import boycottProductValidator, {
  CreateBoycottProductSchema
} from '@/server/validators/product.validator'
import handleError from '@/utils/handle-error'
import validate from '@/utils/validate'
import { Prisma, Roles } from '@prisma/client'
import { HttpStatusCode } from 'axios'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    await authorizer(Roles.admin, Roles.member);
    const json = await request.json()
    const body = await validate<CreateBoycottProductSchema>(
      boycottProductValidator.create,
      json,
    )
    const boycottProduct = await prisma.product.create({
      data: body,
      select: {
        id: true,
        alternateImage: true,
        category: true,
        alternateName: true,
        boycottImage: true,
        boycottName: true,
        createdAt: true,
        updatedAt: true,
      }
    })
    return NextResponse.json(
      { data: boycottProduct, error: null, success: true },
      { status: HttpStatusCode.Created },
    )
  } catch (error) {
    return handleError(error)
  }
}

export async function GET(request: Request) {
  try {
    const products = await prisma.product.findMany({
      where: {},
      select: {
        id: true,
        alternateImage: true,
        category: true,
        alternateName: true,
        boycottImage: true,
        boycottName: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    return NextResponse.json(
      { data: products, error: null, success: true },
      { status: HttpStatusCode.Ok },
    )
  } catch (error) {
    return handleError(error)
  }
}
