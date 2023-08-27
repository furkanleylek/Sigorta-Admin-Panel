'use client'
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import TableDropdownMenu from '../ui/table/table-dropdown-menu'
import { TiTick } from 'react-icons/ti'
import OnaylaTeklif from './onayla-teklif'
import DeleteTeklif from '../actions/delete-teklif'
import DownloadTeklif from '../actions/download-teklif'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import IconButton from '../ui/icon-button'

interface KonutTableProps {
    konutData: {
        id: string
        basvuran: string
        kullaniciAdi: string | null
        dogumTarihi: string
        tcKimlik: string | null
        pasaportNo: string | null

        yapitarzi: string
        ikametgah: string
        binabedeli: string
        cambedeli: string
        esyabedeli: string
        kiymetliesyabedeli: string
        brutalan: string
        rizikoAdresi: string
        korumaOnlemleri: string[]
        hasar: string

        police: string
        daskPoliceNo: string | null

        adres: string | null
        telefonNumarasi: string
        eposta: string | null
        mesaj: string | null

        onaylama: boolean
    }[]
}

const tableRowData = [
    'Onaylama',
    'İsimlendirme',
    'Kişisel Bilgiler',
    'Konut Bilgileri',
    'Poliçe',
    'İletişim',
    'Actions',
]


export const KonutTable: React.FC<KonutTableProps> = async ({ konutData }) => {


    return (
        <>
            {
                konutData
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
                                konutData?.map((product) => {

                                    const kisiselBilgiler = [
                                        {
                                            label: 'Title',
                                            value: 'Kişisel Bilgiler'
                                        },
                                        {
                                            label: 'Ad / Soyad',
                                            value: product.kullaniciAdi
                                        },
                                        {
                                            label: 'T.C Kimlik',
                                            value: product.tcKimlik

                                        },
                                        {

                                            label: 'Pasaport Numarası',
                                            value: product.pasaportNo,
                                        },
                                        {

                                            label: 'Doğum Tarihi',
                                            value: product.dogumTarihi,
                                        }
                                    ]
                                    const konutBilgileri = [
                                        {
                                            label: 'Title',
                                            value: 'Konut Bilgileri'
                                        },
                                        {
                                            label: 'Yapı Tarzı',
                                            value: product.yapitarzi
                                        },
                                        {
                                            label: 'İkametgah',
                                            value: product.ikametgah
                                        },
                                        {
                                            label: 'Bina Bedeli',
                                            value: product.binabedeli
                                        },
                                        {
                                            label: 'Cam Bedeli',
                                            value: product.cambedeli
                                        },
                                        {
                                            label: 'Eşya Bedeli',
                                            value: product.esyabedeli
                                        },
                                        {
                                            label: 'Kıymetli Eşya Bedeli',
                                            value: product.kiymetliesyabedeli
                                        },
                                        {
                                            label: 'Brüt Alan',
                                            value: product.brutalan
                                        },
                                        {
                                            label: 'Riziko Adresi',
                                            value: product.rizikoAdresi
                                        },
                                        {
                                            label: 'Koruma Önlemleri',
                                            value: product.korumaOnlemleri ? product.korumaOnlemleri.join(', ') : ''
                                        }
                                    ]
                                    const iletisimBilgileri = [
                                        {
                                            label: 'Title',
                                            value: 'İletişim Bilgileri'
                                        },
                                        {
                                            label: 'Adres',
                                            value: product.adres
                                        },
                                        {
                                            label: 'Telefon Numarası',
                                            value: product.telefonNumarasi
                                        },
                                        {
                                            label: 'Eposta',
                                            value: product.eposta
                                        },
                                        {
                                            label: 'Mesaj',
                                            value: product.mesaj
                                        },
                                    ]
                                    const policeBilgileri = [
                                        {
                                            label: 'Title',
                                            value: 'Poliçe Bilgileri'
                                        },
                                        {
                                            label: 'Dask Police Numarası',
                                            value: product.daskPoliceNo
                                        },
                                    ]

                                    return (
                                        <TableRow key={product.id} className={`text-sm leading-3 tracking-wide`}>
                                            <TableCell>
                                                <OnaylaTeklif teklifId={product.id} productOnaylama={product.onaylama} />
                                            </TableCell>
                                            <TableCell>{product.kullaniciAdi}</TableCell>
                                            <TableCell ><TableDropdownMenu bilgiler={kisiselBilgiler} label={product.basvuran} /></TableCell>
                                            <TableCell ><TableDropdownMenu bilgiler={konutBilgileri} label={product.yapitarzi} /></TableCell>
                                            {product.police === 'var' ?
                                                <TableCell > <TableDropdownMenu bilgiler={policeBilgileri} label='Var' /></TableCell>
                                                :
                                                <TableCell className='capitalize'> {product.police}</TableCell>
                                            }
                                            <TableCell > <TableDropdownMenu bilgiler={iletisimBilgileri} label={product.telefonNumarasi} /></TableCell>
                                            <TableCell>
                                                <div className='flex items-center space-x-2'>
                                                    <DeleteTeklif category='konut' teklifId={product.id} />
                                                </div>
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

