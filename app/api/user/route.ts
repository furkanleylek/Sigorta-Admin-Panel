import { NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'

export async function POST(
    req: Request,
) {
    try {

        const { name, password } = await req.json()
        console.log(name, password)
        const user = await prismadb.user.findFirst({
            where: {
                name: name,
                password: password
            }
        })
        if (!user) {
            return new NextResponse('Invalid credentials', { status: 401 });
        }

        return new NextResponse('Login successful', { status: 200 });

    } catch (error) {
        console.log('[CATEGORİIES_GET]', error)
        return new NextResponse('Interal Error', { status: 500 })
    }
}
