import { NextRequest, NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'

export const dynamic = 'force-dynamic'
export async function POST(
    req: Request,
) {
    try {
        const origin = req.headers.get('origin')
        const body = await req.json()
        const category = await prismadb.diger.create({
            data: {
                sigortaCategory: body.sigortaCategory,
                kullaniciAdi: body.kullaniciAdi,
                adres: body.adres,
                telefonNumarasi: body.telefonNumarasi,
                eposta: body.eposta,
                mesaj: body.mesaj
            }
        })

        return new NextResponse(JSON.stringify(category), {
            headers: {
                'Access-Control-Allow-Origin': origin || '*',
                'Content-Type': 'application/json',
            }
        })

    } catch (error) {
        console.log('[CATEGORİES_POST]', error)
        return new NextResponse('Interal Error', { status: 500 })
    }
}


export async function PUT(
    req: Request,
    res: Response
) {
    const body = await req.json()
    const operationType = req.headers.get('x-operation');
    console.log("operationType:", operationType)
    try {
        if (operationType === 'teklifOnaylama') {
            const onay = await prismadb.diger.update({
                where: { id: body.teklifId },
                data: { onaylama: body.onaylamaState ? false : true }
            })
            return new NextResponse('Success', { status: 200 })
        }
        if (operationType === 'updateGuncel') {
            await prismadb.diger.updateMany({
                where: {
                    guncel: false
                },
                data: {
                    guncel: true
                }
            });
            return new NextResponse('Success', { status: 200 })
        }

    } catch (error) {
        console.log("ERROROROROR:", error)
    }
}




export async function OPTIONS(request: NextRequest) {
    const origin = request.headers.get('origin')

    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': origin || '*',
            'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    })
}