import { ApiError } from '@/errors'
import { HttpStatusCode } from 'axios';
import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

const handleError = (error: unknown) => {

  if (error instanceof ZodError) {
    const message = error.errors[0].message;
    return NextResponse.json(
      { error: message, data: null, success: false },
      { status: HttpStatusCode.BadRequest },
    )
  }

  if (error instanceof ApiError) {
    return NextResponse.json(
      { error: error.message, data: null, success: false },
      { status: error.statusCode },
    )
  }

  if (error instanceof Error) {
    return NextResponse.json(
      { error: error.message, data: null, success: false },
      { status: 500 },
    )
  }

  return NextResponse.json(
    { error: 'Something Went Wrong', data: null, success: false },
    { status: 500 },
  )
}

export default handleError
