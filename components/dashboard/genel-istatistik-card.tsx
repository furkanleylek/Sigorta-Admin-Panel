import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'

import { HiDocumentText } from 'react-icons/hi'

interface GenelIstatistikCardProps {
    label: string
    value: number
}

const GenelIstatistikCard: React.FC<GenelIstatistikCardProps> = ({ label, value }) => {
    return (
        <div className={`border border-border p-8  rounded-xl flex flex-col gap-4 items-center`}>
            <Label className='text-base'>{label}</Label>
            <Separator />
            <div className='flex itesm-center gap-2'>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-xl'>{value}</p>
                    {
                        label === 'Toplam Müşteri' && (
                            <BsFillPersonFill size={24} className="text-orange-500 dark:text-orange-300" />
                        )
                    }
                    {
                        label === 'Toplam Yapılan Sigortalar' && (
                            <HiDocumentText size={24} className="text-orange-500 dark:text-orange-300" />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default GenelIstatistikCard