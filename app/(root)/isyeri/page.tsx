import React from 'react'
import AllTeklifler from '@/components/teklifler/all-teklifler';
import { Separator } from '@/components/ui/separator';
import TitleH1 from '@/components/ui/h1';
import prismadb from '@/lib/prismadb'
import { TrafikTable } from '@/components/teklifler/trafik-table';
import { IsyeriTable } from '@/components/teklifler/isyeri-table';
export const metadata = {
    title: 'İş Yeri',
    description: 'İş Yeri description',
}

export const dynamic = 'force-dynamic'

const IsyeriPage = async () => {

    const isyeriData = await prismadb.isyeri.findMany(
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
                    İş Yeri
                </TitleH1>
            </div>
            <Separator />
            <IsyeriTable isyeriData={isyeriData} />
        </div>
    );
}
export default IsyeriPage