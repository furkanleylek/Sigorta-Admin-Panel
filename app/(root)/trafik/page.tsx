import React from 'react'
import AllTeklifler from '@/components/teklifler/all-teklifler';
import { Separator } from '@/components/ui/separator';
import TitleH1 from '@/components/ui/h1';
import prismadb from '@/lib/prismadb'
import { TrafikTable } from '@/components/teklifler/trafik-table';
export const metadata = {
    title: 'Trafik',
    description: 'Trafik description',
}
export const dynamic = 'force-dynamic'

const TrafikPage = async () => {

    const trafikData = await prismadb.trafik.findMany(
        {
            orderBy: {
                createdAt: "desc"
            }
        }
    )
    return (
        <div className="flex space-y-8 mt-8 flex-col">
            <div className='flex items-center justify-between w-full'>
                <TitleH1>
                    Trafik
                </TitleH1>
            </div>
            <Separator />
            <TrafikTable trafikData={trafikData} />
        </div>
    );
}
export default TrafikPage