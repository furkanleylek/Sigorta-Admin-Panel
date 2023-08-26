import { NextRequest, NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'

export const dynamic = 'force-dynamic'

export async function DELETE(
    req: Request,
    { params }: { params: { teklifId: string } }
) {
    try {
        const deletedCategory = await prismadb.dask.delete({
            where: {
                id: params.teklifId
            }
        })

        return NextResponse.json(deletedCategory)

    } catch (error) {
        console.log('[CATEGORİES_POST]', error)
        return new NextResponse('Interal Error', { status: 500 })
    }
}