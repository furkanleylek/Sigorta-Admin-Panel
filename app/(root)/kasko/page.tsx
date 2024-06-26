import React from 'react'
import { Separator } from '@/components/ui/separator';
import TitleH1 from '@/components/ui/h1';
import prismadb from '@/lib/prismadb'
import { KaskoTable } from '@/components/teklifler/kasko-table';
export const metadata = {
    title: 'Kasko',
    description: 'Trafik description',
}
export const dynamic = 'force-dynamic'

const KaskoPage = async () => {

    const kaskoData = await prismadb.kasko.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return (
        <div className="flex space-y-8 mt-8 flex-col">
            <div className='flex items-center justify-between w-full'>
                <TitleH1>
                    Kasko
                </TitleH1>
            </div>
            <Separator />
            <KaskoTable trafikData={kaskoData} />
        </div>
    );
}
export default KaskoPage