import { NextRequest, NextResponse } from "next/server";
import { store } from "./redux/Store";

const protectedRoutes = ["/addRequest", "/allRequest"];

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  console.log("token", token);

  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (req.nextUrl.pathname.startsWith("/login")) {
    if (token) {
      const redirectTo = req.nextUrl.searchParams.get("redirectTo") || "/";
      return NextResponse.redirect(new URL(redirectTo, req.url));
    }
    return NextResponse.next();
  }

  if (!token && isProtectedRoute) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirectTo", req.nextUrl.pathname + req.nextUrl.search);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login/:path*",
    "/management/:path*", // Example of a protected route path
    "/requests/:path*", // Example of a protected route path
    "/requestDetail/:path*", // Example of a protected route path
    "/addRequest/:path*", // Example of a protected route path
    "/allRequest/:path*"  // Example of a protected route path
  ],
};
