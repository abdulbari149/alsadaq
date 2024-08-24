import { HttpUnAuthorizedError } from '@/errors'
import prisma from '@/lib/prisma'
import token from '@/utils/token'
import { Roles } from '@prisma/client'
import { cookies, headers } from 'next/headers'

export default async function authorizer(...roles: Roles[]) {
  const authorization = headers().get('Authorization')

  if (!authorization) {
    throw new HttpUnAuthorizedError('token not found!')
  }

  const [_, accessToken] = authorization.split(' ')

  const payload = token.access.verify<{
    id: string
    email: string
    username: string
    role: string
  }>(accessToken)

  const user = await prisma.user.findFirst({
    where: { id: payload.id },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
    },
  })

  if (!user) {
    throw new HttpUnAuthorizedError('User not found!')
  }

  if (!roles.includes(user.role)) {
    throw new HttpUnAuthorizedError('Not allowed');
  }

  return { user, payload }
}
