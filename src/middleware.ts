import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import {
  publicRoutes,
  protectedRoutes,
} from "./constants/routes";
import auth from "./api/auth";

interface CustomNextRequest extends NextRequest {
  user?: {
    id: number;
    email: string;
    username: string;
    role: string;
  };
}

const middleware = async (req: CustomNextRequest) => {
  const { pathname } = req.nextUrl;
  const accessToken = cookies().get("token");

  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

  if (isPublic) {
    return NextResponse.next();
  }

  const isAuth = pathname.startsWith('/auth')
  if (isAuth) {
    // if (!accessToken) {
    // }
    
    return NextResponse.next();
    // const url = req.nextUrl.clone();
    // url.pathname = "/dashboard";
    // return NextResponse.redirect(url);
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
    const { user } = await auth.me(accessToken?.value);

    if (user.role === 'user') {
      return NextResponse.error()
    }

    return NextResponse.next();
  } catch (error) {
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
