import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectRoutes = ["/home"]
const authRoutes = ["/sign-in", "/sign-up"]

export const middleware = async (req: NextRequest) => {
    const token = await getToken({ req })
    const { pathname } = req.nextUrl

    if (pathname === "/") {
        return NextResponse.redirect(new URL(token ? "/home" : "/sign-in", req.url))
    }

    if (token && authRoutes.some((r)=>pathname.startsWith(r))) {
        return NextResponse.redirect(new URL("/home", req.url))
    }

    if (!token && protectRoutes.some((r)=>pathname.startsWith(r))) {
        const signInUrl = new URL("/sign-in", req.url)
        signInUrl.searchParams.set("callbackUrl", pathname)
        return NextResponse.redirect(signInUrl)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/","/home/:path*", "/sign-in", "/sign-up"],
}