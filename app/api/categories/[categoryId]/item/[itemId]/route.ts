import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function GET(
    req: Request,
    { params }: { params: { itemId: string } }
) {
    try {
        if (!params.itemId) {
            return new NextResponse("Billboard id is required", { status: 400 });
        }

        const item = await prismadb.item.findUnique({
            where: {
                id: params.itemId
            }
        });

        return NextResponse.json(item);
    } catch (error) {
        console.log('[İTEM_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function DELETE(
    req: Request,
    { params }: { params: { categoryId: string, itemId: string } }
) {
    try {

        const deletedCategory = await prismadb.item.delete({
            where: {
                id: params.itemId
            }
        })

        return NextResponse.json(deletedCategory)

    } catch (error) {
        console.log('[CATEGORİES_POST]', error)
        return new NextResponse('Interal Error', { status: 500 })
    }
}



export async function PATCH(
    req: Request,
    { params }: { params: { itemId: string } }
) {
    try {
        const body = await req.json();

        const { name, imageUrl } = body;

        if (!name) {
            return new NextResponse("name is required", { status: 400 });
        }

        if (!imageUrl) {
            return new NextResponse("Image URL is required", { status: 400 });
        }

        if (!params.itemId) {
            return new NextResponse("item id is required", { status: 400 });
        }

        const item = await prismadb.item.update({
            where: {
                id: params.itemId,
            },
            data: {
                name,
                imageUrl
            }
        });

        return NextResponse.json(item);
    } catch (error) {
        console.log('[İTEM_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};