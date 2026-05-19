import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PATHS = ["/wcbfm-admin", "/api/wcbfm-export"];
const COOKIE_NAME = "wcbfm_admin_auth";
const COOKIE_VALUE = "granted";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  if (!isProtected) return NextResponse.next();

  const auth = request.cookies.get(COOKIE_NAME);
  if (auth?.value === COOKIE_VALUE) return NextResponse.next();

  const loginUrl = new URL("/wcbfm-login", request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/wcbfm-admin", "/wcbfm-admin/(.*)", "/api/wcbfm-export", "/api/wcbfm-export/(.*)"],
};
