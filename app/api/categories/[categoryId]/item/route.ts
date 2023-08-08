import { NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'
export async function POST(
    req: Request,
    { params }: { params: { categoryId: string } }
) {
    try {
        const body = await req.json()
        const { productImage, productName, productPrice, productColor, productSize, productStock, productFeatured, productArchived, imageUrl } = body

        // check !userId

        if (!productName) {
            return new NextResponse('Name is required', { status: 400 })
        }
        // if (!imageUrl) {
        //     return new NextResponse('imageUrl is required', { status: 400 })
        // }

        if (!params.categoryId) {
            return new NextResponse("Category id is required", { status: 400 })
        }
        const item = await prismadb.item.create({
            data: {
                imageUrl: productImage[0].url,
                name: productName,
                price: productPrice,
                color: productColor,
                size: productSize,
                stock: productStock,
                featured: productFeatured,
                archived: productArchived,
                categoryId: params.categoryId
            }
        })

        return NextResponse.json(item)

    } catch (error) {
        console.log('[ITEM_POST]', error)
        return new NextResponse('Interal Error', { status: 500 })
    }
}

