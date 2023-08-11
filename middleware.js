import { NextResponse } from 'next/server'
import isAuthPages from './utils/isAuthPages'
export async function middleware(request) {

    const { url, nextUrl, cookies } = request
    const { value: token } = cookies.get('token') ?? { value: null } // to name of value with token
    const isAuthPageRequested = isAuthPages(nextUrl.pathname)

    if (isAuthPageRequested) {
        if (!token) {
            const response = NextResponse.next() // if user want to go auth pages(login is now) but not have token
            return response
        }
        const response = NextResponse.redirect(new URL(`/`, url)); // if user want to go to the login page but user have token
        return response
    }

    // if user dont have token , route the login page
    if (!token) {

        // kind of keeping the destination in memory, redirecting there after login
        const searchParams = new URLSearchParams(nextUrl.searchParams)
        searchParams.set("next", nextUrl.pathname)

        const response = NextResponse.redirect(
            new URL(`/login?${searchParams}`, url)
        );
        response.cookies.delete("token");
        return response;
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/',
        '/teklifler',
        '/mesajlar',
        '/login'
    ]
}