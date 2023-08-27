import React from 'react'
import { Separator } from '@/components/ui/separator';
import TitleH1 from '@/components/ui/h1';
import prismadb from '@/lib/prismadb'
import { KonutTable } from '@/components/teklifler/konut-table';
export const metadata = {
    title: 'Konut',
    description: 'Konut description',
}

export const dynamic = 'force-dynamic'

const KonutPage = async () => {

    const konutData = await prismadb.konut.findMany(
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
                    Konut
                </TitleH1>
            </div>
            <Separator />
            <KonutTable konutData={konutData} />
        </div>
    );
}
export default KonutPage