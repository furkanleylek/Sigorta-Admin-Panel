import { NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'

export async function GET(
    req: Request,
) {
    try {
        const categories = await prismadb.category.findMany()

        return NextResponse.json(categories)

    } catch (error) {
        console.log('[CATEGORİIES_GET]', error)
        return new NextResponse('Interal Error', { status: 500 })
    }
}


export async function POST(
    req: Request,
) {
    try {
        const body = await req.json()
        const { categoryName } = body
        if (!categoryName) {
            return new NextResponse('Name is required', { status: 400 })
        }

        const category = await prismadb.category.create({
            data: {
                name: categoryName,
            }
        })

        return NextResponse.json(category)

    } catch (error) {
        console.log('[CATEGORİES_POST]', error)
        return new NextResponse('Interal Error', { status: 500 })
    }
}
