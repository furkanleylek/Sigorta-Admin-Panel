import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover'
import prismadb from '@/lib/prismadb'
import { Paragraph } from '../../ui/paragraph'
import { ImNotification } from 'react-icons/im'
import { Separator } from '../../ui/separator'
import { Button } from '../../ui/button'
import { BsShop } from 'react-icons/bs'
import { LuHeartHandshake } from 'react-icons/lu'
import { FaGripfire } from 'react-icons/fa'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { BiBuildingHouse } from 'react-icons/bi'
import { PiCarDuotone } from 'react-icons/pi'
import Link from 'next/link'
import UpdateNotification from './update-notifiticaton'

export const dynamic = 'force-dynamic'

const NotificationSystem = async () => {

    const trafikData = await prismadb.trafik.findMany({
        where: {
            guncel: false
        }
    });

    const kaskoData = await prismadb.kasko.findMany({
        where: {
            guncel: false
        }
    });

    const konutData = await prismadb.konut.findMany({
        where: {
            guncel: false
        }
    });

    const isyeriData = await prismadb.isyeri.findMany({
        where: {
            guncel: false
        }
    });

    const daskData = await prismadb.dask.findMany({
        where: {
            guncel: false
        }
    });

    const ferdikazaData = await prismadb.ferdiKaza.findMany({
        where: {
            guncel: false
        }
    });
    const digerData = await prismadb.diger.findMany({
        where: {
            guncel: false
        }
    });

    const toplamBildiri = trafikData.length + kaskoData.length + konutData.length + isyeriData.length + daskData.length + ferdikazaData.length + digerData.length


    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <div className='relative'>
                        <IoIosNotifications
                            size={24}
                            className="cursor-pointer text-zinc-800 dark:text-zinc-200 hover:scale-[1.02]"
                        />
                        <span className='absolute top-[-10px] right-[-1px] flex items-center justify-center text-[10px] text-white pl-[5px] pr-[6px] pt-[1px] font-semibold bg-red-500 rounded-full'>{toplamBildiri}</span>
                    </div>
                </PopoverTrigger>
                <PopoverContent className='max-h-60 w-[240px] p-4 overflow-y-auto flex flex-col'>
                    {
                        toplamBildiri > 0 && (
                            <>
                                <h4 className="font-semibold leading-none pb-1">Bildirimler</h4>
                                <Separator className='my-2' />
                            </>
                        )
                    }
                    {
                        trafikData.length > 0 && (
                            trafikData.map((e, index) => {
                                return (
                                    <React.Fragment key={e.id}>
                                        <div className='flex space-x-2 text-xs p-1'>
                                            <span className='font-semibold'><PiCarDuotone size={20} /></span>
                                            <span className='border border-border h-4'></span>
                                            <div className='space-y-2'>
                                                <p className='mb-1'>{e.kullaniciAdi}</p>
                                                <UpdateNotification linkHref='/trafik' />
                                            </div>
                                        </div>
                                        <Separator className='my-2' />
                                    </React.Fragment>

                                )
                            })
                        )
                    }
                    {
                        kaskoData.length > 0 && (
                            kaskoData.map((e, index) => {
                                return (
                                    <React.Fragment key={e.id}>
                                        <div className='flex space-x-2 text-xs p-1'>
                                            <span className='font-semibold'><MdOutlineHealthAndSafety size={20} /></span>
                                            <span className='border border-border h-4'></span>
                                            <div className='space-y-2'>
                                                <p className='mb-1'>{e.kullaniciAdi}</p>
                                                <UpdateNotification linkHref='/kasko' />
                                            </div>
                                        </div>
                                        <Separator className='my-2' />
                                    </React.Fragment>

                                )
                            })
                        )
                    }
                    {
                        konutData.length > 0 && (
                            konutData.map((e, index) => {
                                return (
                                    <React.Fragment key={e.id}>
                                        <div className='flex space-x-2 text-xs p-1'>
                                            <span className='font-semibold'><BiBuildingHouse size={20} /></span>
                                            <span className='border border-border h-4'></span>
                                            <div className='space-y-2'>
                                                <p className='mb-1'>{e.kullaniciAdi}</p>
                                                <UpdateNotification linkHref='/konut' />
                                            </div>
                                        </div>
                                        <Separator className='my-2' />
                                    </React.Fragment>

                                )
                            })
                        )
                    }
                    {
                        isyeriData.length > 0 && (
                            isyeriData.map((e, index) => {
                                return (
                                    <React.Fragment key={e.id}>
                                        <div className='flex space-x-2 text-xs p-1'>
                                            <span className='font-semibold'><BsShop size={20} /></span>
                                            <span className='border border-border h-4'></span>
                                            <div className='space-y-2'>
                                                <p className='mb-1'>{e.kullaniciAdi}</p>
                                                <UpdateNotification linkHref='/isyeri' />
                                            </div>
                                        </div>
                                        <Separator className='my-2' />
                                    </React.Fragment>

                                )
                            })
                        )
                    }
                    {
                        daskData.length > 0 && (
                            daskData.map((e, index) => {
                                return (
                                    <React.Fragment key={e.id}>
                                        <div className='flex space-x-2 text-xs p-1'>
                                            <span className='font-semibold'><FaGripfire size={20} /></span>
                                            <span className='border border-border h-4'></span>
                                            <div className='space-y-2'>
                                                <p className='mb-1'>{e.kullaniciAdi}</p>
                                                <UpdateNotification linkHref='/dask' />
                                            </div>
                                        </div>
                                        <Separator className='my-2' />
                                    </React.Fragment>

                                )
                            })
                        )
                    }
                    {
                        ferdikazaData.length > 0 && (
                            ferdikazaData.map((e, index) => {
                                return (
                                    <React.Fragment key={e.id}>
                                        <div className='flex space-x-2 text-xs p-1'>
                                            <span className='font-semibold'><LuHeartHandshake size={20} /></span>
                                            <span className='border border-border h-4'></span>
                                            <div className='space-y-2'>
                                                <p className='mb-1'>{e.kullaniciAdi}</p>
                                                <UpdateNotification linkHref='/ferdikaza' />
                                            </div>
                                        </div>
                                        <Separator className='my-2' />
                                    </React.Fragment>

                                )
                            })
                        )
                    }



                    {
                        toplamBildiri === 0 && (
                            <div className='flex flex-col items-center gap-4 flex-1'>
                                <Separator />
                                <Paragraph className='text-center'>Gösterilecek bildiri bulunamadı .</Paragraph>
                                <ImNotification size={28} className="text-red-600 dark:text-red-400" />
                                <Separator />
                            </div>
                        )
                    }
                </PopoverContent>
            </Popover>
        </>

    )
}

export default NotificationSystem