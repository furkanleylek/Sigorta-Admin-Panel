import { NextRequest, NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'

export async function POST(
    req: Request,
) {
    try {
        const origin = req.headers.get('origin')
        const body = await req.json()
        console.log(body)
        const category = await prismadb.trafik.create({
            data: {
                kullaniciAdi: body.kullaniciAdi,
                sahipturu: body.sahipturu,
                tcKimlik: body.tcKimlik,
                plakaNo: body.plakaNo,
                kullanimTarzi: body.kullanimTarzi,
                marka: body.marka,
                modelYili: body.modelYili,
                ASBISno: body.ASBISno,
                police: body.police,
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