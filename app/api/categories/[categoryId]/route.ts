import { NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'

export async function GET(
    req: Request,
    { params }: { params: { categoryId: string } }
) {
    try {
        const categories = await prismadb.item.findMany({
            where: {
                categoryId: params.categoryId
            }
        })

        return NextResponse.json(categories)

    } catch (error) {
        console.log('[CATEGORİIES_GET]', error)
        return new NextResponse('Interal Error', { status: 500 })
    }
}


export async function DELETE(
    req: Request,
    { params }: { params: { categoryId: string } }
) {
    try {

        const deletedCategory = await prismadb.category.delete({
            where: {
                id: params.categoryId
            }
        })

        return NextResponse.json(deletedCategory)

    } catch (error) {
        return new NextResponse('Interal Error', { status: 500 })
    }
}
