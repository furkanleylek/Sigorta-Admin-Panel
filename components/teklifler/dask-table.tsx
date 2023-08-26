import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import TableDropdownMenu from '../ui/table/table-dropdown-menu'
import OnaylaTeklif from './onayla-teklif'
import DeleteTeklif from '../actions/delete-teklif'
import DownloadTeklif from '../actions/download-teklif'
import { string } from 'zod'

interface DaskTableProps {
    daskData: {
        id: string
        basvuran: string
        kullaniciAdi: string | null
        tcKimlik: string | null
        sirketUnvani: string | null
        vergiNo: string | null
        pasaportNo: string | null
        dogumTarihi: string

        binaInsaYili: string
        yapitarzi: string
        kullanimSekli: string
        brutalan: string
        katSayisi: string
        rizikoAdresi: string
        hasar: string

        police: string
        sigortaSirketi: string | null
        policeNumarasi: string | null
        policeBitisTarihi: string | null

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
    'Bina Bilgileri',
    'Poliçe',
    'İletişim',
    'Actions',
]


export const DaskTable: React.FC<DaskTableProps> = async ({ daskData }) => {


    return (
        <>
            {
                daskData
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
                                daskData?.map((product) => {

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
                                            label: 'Şirket Ünvanı',
                                            value: product.sirketUnvani

                                        },
                                        {
                                            label: 'Vergi Numarası',
                                            value: product.vergiNo,
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


                                    const binaBilgileri = [
                                        {
                                            label: 'Title',
                                            value: 'Bina Bilgileri'
                                        },
                                        {
                                            label: 'Bina İnşa Yılı',
                                            value: product.binaInsaYili
                                        },
                                        {
                                            label: 'Yapı Tarzı',
                                            value: product.yapitarzi
                                        },
                                        {
                                            label: 'Kullanım Şekli',
                                            value: product.kullanimSekli
                                        },
                                        {
                                            label: 'Brüt Alan',
                                            value: product.brutalan
                                        },
                                        {
                                            label: 'Kat Sayısı',
                                            value: product.katSayisi,
                                        },
                                        {
                                            label: 'Riziko Adresi',
                                            value: product.rizikoAdresi
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
                                            label: 'Sigorta Şirketi',
                                            value: product.sigortaSirketi
                                        },
                                        {
                                            label: 'Poliçe Numarası',
                                            value: product.policeNumarasi
                                        },
                                        {
                                            label: 'Poliçe Bitiş Tarihi',
                                            value: product.policeBitisTarihi
                                        },
                                    ]

                                    return (
                                        <TableRow key={product.id} className={`text-sm leading-3 tracking-wide`}>
                                            <TableCell>
                                                <OnaylaTeklif teklifId={product.id} productOnaylama={product.onaylama} />
                                            </TableCell>
                                            <TableCell>{product.kullaniciAdi}</TableCell>
                                            <TableCell ><TableDropdownMenu bilgiler={kisiselBilgiler} label={product.basvuran} /></TableCell>
                                            <TableCell ><TableDropdownMenu bilgiler={binaBilgileri} label={product.yapitarzi} /></TableCell>
                                            {product.police === 'var' ?
                                                <TableCell > <TableDropdownMenu bilgiler={policeBilgileri} label='Var' /></TableCell>
                                                :
                                                <TableCell className='capitalize'> {product.police}</TableCell>
                                            }
                                            <TableCell > <TableDropdownMenu bilgiler={iletisimBilgileri} label={product.telefonNumarasi} /></TableCell>
                                            <TableCell>
                                                <DeleteTeklif category='dask' teklifId={product.id} />
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

