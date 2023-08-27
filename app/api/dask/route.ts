import { NextRequest, NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'

export const dynamic = 'force-dynamic'
export async function POST(
    req: Request,
) {
    try {
        const origin = req.headers.get('origin')
        const body = await req.json()
        const category = await prismadb.dask.create({
            data: {
                basvuran: body.basvuran,
                kullaniciAdi: body.kullaniciAdi,
                tcKimlik: body.tcKimlik,
                sirketUnvani: body.sirketUnvani,
                vergiNo: body.vergiNo,
                pasaportNo: body.pasaportNo,
                dogumTarihi: body.dogumTarihi,

                binaInsaYili: body.binaInsaYili,
                yapitarzi: body.yapitarzi,
                kullanimSekli: body.kullanimSekli,
                brutalan: body.brutalan,
                katSayisi: body.katSayisi,
                rizikoAdresi: body.rizikoAdresi,
                hasar: body.hasar,

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
    const operationType = req.headers.get('x-operation');
    console.log("operationType:", operationType)
    try {
        if (operationType === 'teklifOnaylama') {
            const onay = await prismadb.dask.update({
                where: { id: body.teklifId },
                data: { onaylama: body.onaylamaState ? false : true }
            })
            return new NextResponse('Success', { status: 200 })
        }
        if (operationType === 'updateGuncel') {
            await prismadb.dask.updateMany({
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