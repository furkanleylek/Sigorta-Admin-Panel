import React from 'react'
import { Separator } from '@/components/ui/separator';
import TitleH1 from '@/components/ui/h1';
import prismadb from '@/lib/prismadb'
import { KaskoTable } from '@/components/teklifler/kasko-table';
import { FerdikazaTable } from '@/components/teklifler/ferdikaza-table';
import { DigerCategoriesTable } from '@/components/teklifler/diger-table';
export const metadata = {
    title: 'Ferdi Kaza',
    description: 'Ferdi Kaza description',
}
export const dynamic = 'force-dynamic'

const DigerCategoriesPage = async () => {

    const digerCategoriesData = await prismadb.diger.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return (
        <div className="flex space-y-8 mt-8 flex-col">
            <div className='flex items-center justify-between w-full'>
                <TitleH1>
                    Diğer Kategoriler
                </TitleH1>
            </div>
            <Separator />
            <DigerCategoriesTable digerCategoriesData={digerCategoriesData} />
        </div>
    );
}
export default DigerCategoriesPage