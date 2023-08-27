import React from 'react'
import { GiSandsOfTime } from 'react-icons/gi'
import { TiTick } from 'react-icons/ti'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'
interface SingleCardProps {
    label: string
    value: number
    onaylananTeklif: number
}

const SingleCard: React.FC<SingleCardProps> = ({ label, value, onaylananTeklif }) => {
    return (
        <div className={`border border-border p-8  rounded-xl flex flex-col gap-4 items-center shadow-md`}>
            <Label className='text-base text-center'>{label}</Label>
            <Separator />
            <div className='flex itesm-center gap-2'>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-xl '>{value}</p>
                    <GiSandsOfTime size={24} className="text-orange-500 dark:text-orange-300" />
                </div>
                <span className='border-2 border-border h-6 mx-2'></span>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-xl'>{onaylananTeklif}</p>
                    <TiTick size={28} className="text-green-600 dark:text-green-400" />
                </div>
            </div>
        </div>
    )
}

export default SingleCard