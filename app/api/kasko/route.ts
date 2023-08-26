import { NextRequest, NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'

export const dynamic = 'force-dynamic'
export async function POST(
    req: Request,
) {
    try {
        const origin = req.headers.get('origin')
        const body = await req.json()
        const category = await prismadb.kasko.create({
            data: {
                sahipturu: body.sahipturu,
                kullaniciAdi: body.kullaniciAdi,
                tcKimlik: body.tcKimlik,
                sirketUnvani: body.sirketUnvani,
                vergiNo: body.vergiNo,
                pasaportNo: body.pasaportNo,
                meslek: body.meslek,
                dogumTarihi: body.dogumTarihi,

                plakaNo: body.plakaNo,
                kullanimTarzi: body.kullanimTarzi,
                marka: body.marka,
                modelYili: body.modelYili,
                ekAksesuarBilgileri: body.ekAksesuarBilgileri,
                ASBISno: body.ASBISno,

                police: body.police,
                sigortaSirketi: body.sigortaSirketi,
                policeNumarasi: body.policeNumarasi,
                policeBitisTarihi: body.policeBitisTarihi,

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

    try {
        const onay = await prismadb.kasko.update({
            where: { id: body.teklifId },
            data: { onaylama: body.onaylamaState ? false : true }
        })
        return new NextResponse('Success', { status: 200 })

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