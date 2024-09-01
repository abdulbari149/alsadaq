import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import {
  publicRoutes,
  protectedRoutes,
} from "./constants/routes";
import auth from "./api/auth";
import env from "./config/env.config.mjs";

interface CustomNextRequest extends NextRequest {
  user?: {
    id: number;
    email: string;
    username: string;
    role: string;
  };
}

const allowedOrigins = env.NODE_ENV === 'production' ? ['https://alsadaq.com'] : [env.BASE_URL]

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

const middleware = async (req: CustomNextRequest) => {
  const { pathname } = req.nextUrl;
  const accessToken = cookies().get("token");


  if (pathname.startsWith('/api')) {
    const origin = req.headers.get('origin') ?? ''
    const isAllowedOrigin = allowedOrigins.includes(origin)

    const isPreflight = req.method === 'OPTIONS'

    if (isPreflight) {
      const preflightHeaders = {
        ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
        ...corsOptions,
      }
      return NextResponse.json({}, { headers: preflightHeaders })
    }

    // Handle simple requests
    const response = NextResponse.next()

    if (isAllowedOrigin) {
      response.headers.set('Access-Control-Allow-Origin', origin)
    }

    Object.entries(corsOptions).forEach(([key, value]) => {
      response.headers.set(key, value)
    })

    return response

  }

  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

  if (isPublic) {
    return NextResponse.next();
  }

  const isAuth = pathname.startsWith('/auth')
  if (isAuth) {
    if (!accessToken) {
      return NextResponse.next();
    }

    const url = req.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  const isProtected = protectedRoutes.some((route) =>
    route.exact ? route.route === pathname : pathname.startsWith(route.route)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  if (!accessToken) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  try {
    const accessToken = cookies().get("token");
    if (!accessToken) throw new Error("token not found");
    const { user } = await auth.me(accessToken?.value);

    if (user.role === 'user') {
      return NextResponse.error()
    }

    return NextResponse.next();
  } catch (error) {
    console.log({ error })
    if (error instanceof Error && error.message === "not-allowed") {
      return NextResponse.error();
    }

    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }
};

export default middleware;

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/", "/auth/:path*"],
};
