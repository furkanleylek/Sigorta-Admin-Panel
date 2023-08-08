import React from 'react'
import { Separator } from '@/components/ui/separator';
import TitleH1 from '@/components/ui/h1';
import AllMessages from '@/components/mesajlar/all-messages';
export const metadata = {
    title: 'Mesajlar',
    description: 'Mesajlar description',
}

const MesajlarPage = async () => {

    return (
        <div className="flex space-y-8 mt-8 flex-col">
            <div className='flex items-center justify-between w-full'>
                <TitleH1>
                    Mesajlar
                </TitleH1>
            </div>
            <Separator />
            <AllMessages />
        </div>
    );
}
export default MesajlarPage