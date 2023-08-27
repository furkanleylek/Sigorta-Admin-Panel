import React from 'react'
import { Separator } from '@/components/ui/separator';
import TitleH1 from '@/components/ui/h1';
import prismadb from '@/lib/prismadb'
import { KaskoTable } from '@/components/teklifler/kasko-table';
import { FerdikazaTable } from '@/components/teklifler/ferdikaza-table';
export const metadata = {
    title: 'Ferdi Kaza',
    description: 'Ferdi Kaza description',
}
export const dynamic = 'force-dynamic'

const FerdikazaPage = async () => {

    const ferdikazaData = await prismadb.ferdiKaza.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return (
        <div className="flex space-y-8 mt-8 flex-col">
            <div className='flex items-center justify-between w-full'>
                <TitleH1>
                    Ferdi Kaza
                </TitleH1>
            </div>
            <Separator />
            <FerdikazaTable ferdikazaData={ferdikazaData} />
        </div>
    );
}
export default FerdikazaPage