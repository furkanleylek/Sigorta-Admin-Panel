import React from 'react'
import { Separator } from '@/components/ui/separator';
import TitleH1 from '@/components/ui/h1';
import prismadb from '@/lib/prismadb'
import { DaskTable } from '@/components/teklifler/dask-table';
export const metadata = {
    title: 'Dask',
    description: 'Dask description',
}

export const dynamic = 'force-dynamic'

const DaskPage = async () => {

    const daskData = await prismadb.dask.findMany(
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
                    Dask
                </TitleH1>
            </div>
            <Separator />
            <DaskTable daskData={daskData} />
        </div>
    );
}
export default DaskPage