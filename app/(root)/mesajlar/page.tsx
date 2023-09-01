import React from 'react'
import { Separator } from '@/components/ui/separator';
import TitleH1 from '@/components/ui/h1';
import { AllMessages } from '@/components/mesajlar/all-messages';
import prismadb from '@/lib/prismadb'

export const metadata = {
    title: 'Mesajlar',
    description: 'Mesajlar description',
}

export const dynamic = 'force-dynamic'

const MesajlarPage = async () => {

    const mesajlarData = await prismadb.mesaj.findMany(
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
                    Mesajlar
                </TitleH1>
            </div>
            <Separator />
            <AllMessages mesajlarData={mesajlarData} />
        </div>
    );
}
export default MesajlarPage