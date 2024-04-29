import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  "management",
  "requests",
  "requestDetail",
  "addRequest",
  // Add more protected routes here if needed
];
export default function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  console.log('token',token);
  
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
    ...protectedRoutes.map((route) => `/${route}/:path*`), // Dynamic generation of protected route paths
  ],
};
