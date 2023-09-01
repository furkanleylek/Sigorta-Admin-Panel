'use client'
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import TableDropdownMenu from '../ui/table/table-dropdown-menu'
import OnaylaTeklif from '../teklifler/onayla-teklif'
import DeleteTeklif from '../actions/delete-teklif'

interface MesajlarProps {
    mesajlarData: {
        id: string
        kullaniciAdi: string | null
        adres: string | null
        telefonNumarasi: string
        eposta: string | null
        mesaj: string | null
        onaylama: boolean
    }[]
}

const tableRowData = [
    'Onaylama',
    'Ad / Soyad',
    'Telefon Numarası',
    'Adres',
    'Mesaj',
    'Aksiyonlar',
]


export const AllMessages: React.FC<MesajlarProps> = async ({ mesajlarData }) => {


    return (
        <>
            {
                mesajlarData
                    ?
                    <Table className='text-[14px]'>
                        <TableHeader>
                            <TableRow >
                                {
                                    tableRowData.map((element) => {
                                        return <TableHead key={element}>{element}</TableHead>
                                    })
                                }
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                mesajlarData?.map((product) => {

                                    return (
                                        <TableRow key={product.id} className={`text-sm leading-3 tracking-wide`}>
                                            <TableCell>
                                                <OnaylaTeklif teklifId={product.id} productOnaylama={product.onaylama} />
                                            </TableCell>
                                            <TableCell>{product.kullaniciAdi}</TableCell>
                                            <TableCell>{product.telefonNumarasi}</TableCell>
                                            <TableCell>{product.adres}</TableCell>
                                            <TableCell>{product.mesaj}</TableCell>
                                            <TableCell>
                                                <DeleteTeklif category='mesaj' teklifId={product.id} />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                    :
                    (
                        <div className='w-full md:w-1/2 mx-auto pt-32'>
                            <Alert>
                                <AlertTitle>Product Not Found !</AlertTitle>
                                <AlertDescription>
                                    You have to add products to your category.
                                </AlertDescription>
                            </Alert>
                        </div>
                    )
            }
        </>

    )
}

