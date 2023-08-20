import React from 'react'
import AllTeklifler from '@/components/teklifler/all-teklifler';
import { Separator } from '@/components/ui/separator';
import TitleH1 from '@/components/ui/h1';
import prismadb from '@/lib/prismadb'
import { KaskoTable } from '@/components/teklifler/kasko-table';
export const metadata = {
    title: 'Kasko',
    description: 'Trafik description',
}

const KaskoPage = async () => {

    const trafikData = await prismadb.trafik.findMany()
    return (
        <div className="flex space-y-8 mt-8 flex-col">
            <div className='flex items-center justify-between w-full'>
                <TitleH1>
                    Kasko
                </TitleH1>
            </div>
            <Separator />
            <KaskoTable trafikData={trafikData} />
        </div>
    );
}
export default KaskoPage