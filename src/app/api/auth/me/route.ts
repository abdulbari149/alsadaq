import authorizer from '@/server/middleware/authorizer'
import handleError from '@/utils/handle-error'
import { Roles } from '@prisma/client'
import { HttpStatusCode } from 'axios'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { user, payload } = await authorizer(Roles.user, Roles.admin, Roles.member)
    return NextResponse.json(
      { data: { credentails: payload, user }, error: null, success: true },
      { status: HttpStatusCode.Ok },
    )
  } catch (error) {
    return handleError(error)
  }
}
