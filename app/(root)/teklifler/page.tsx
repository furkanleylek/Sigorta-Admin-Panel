import React from 'react'
import AllTeklifler from '@/components/teklifler/all-teklifler';
import { Separator } from '@/components/ui/separator';
import TitleH1 from '@/components/ui/h1';
export const metadata = {
    title: 'Teklifler',
    description: 'Teklifler description',
}

const TekliflerPage = async () => {

    return (
        <div className="flex space-y-8 mt-8 flex-col">
            <div className='flex items-center justify-between w-full'>
                <TitleH1>
                    Teklifler
                </TitleH1>
            </div>
            <Separator />
            <AllTeklifler />
        </div>
    );
}
export default TekliflerPage