import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  "management",
  "requests",
  "requestDetail",
  "addRequest",
];

const protectedRoutePaths = protectedRoutes.map((route) => `/${route}/:path*`);

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  console.log("token", token);

  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.includes(`/${route}`)
  );

  if (req.nextUrl.pathname.includes("/login")) {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    } else if (!token && isProtectedRoute) {
      return NextResponse.redirect(new URL("/login", req.url));
    } else {
      return NextResponse.next();
    }
  }

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
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
  ],
};
