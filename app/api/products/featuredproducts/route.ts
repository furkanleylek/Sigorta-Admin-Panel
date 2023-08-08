import { NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'

export async function GET(
    req: Request,
) {
    try {

        const featuredProducts = await prismadb.item.findMany(
            {
                include: {
                    category: true
                },
                where: {
                    featured: true
                }
                ,
                orderBy: {
                    createdAt: "desc"
                }
            }
        )

        return NextResponse.json(featuredProducts)

    } catch (error) {
        console.log('[CATEGORİIES_GET]', error)
        return new NextResponse('Interal Error', { status: 500 })
    }
}

