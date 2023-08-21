import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import TableDropdownMenu from '../ui/table/table-dropdown-menu'
import OnaylaTeklif from './onayla-teklif'
import DeleteTeklif from '../actions/delete-teklif'
import DownloadTeklif from '../actions/download-teklif'

interface FerdikazaTableProps {
    ferdikazaData: {
        id: string
        basvuran: string
        kullaniciAdi: string | null
        tcKimlik: string | null
        meslek: string | null
        sirketUnvani: string | null
        vergiNo: string | null
        faaliyetKonusu: string | null
        calisanSayisi: string | null
        pasaportNo: string | null
        dogumTarihi: string


        teminatMiktari: string
        ekTeminatlar: string[]

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
    'Teminat Bilgileri',
    'Poliçe',
    'İletişim',
    'Actions',
]


export const FerdikazaTable: React.FC<FerdikazaTableProps> = async ({ ferdikazaData }) => {


    return (
        <>
            {
                ferdikazaData
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
                                ferdikazaData?.map((product) => {

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
                                            label: 'Meslek',
                                            value: product.meslek

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
                                            label: 'Faaliyet Konusu',
                                            value: product.faaliyetKonusu

                                        },
                                        {
                                            label: 'Çalışan Sayısı',
                                            value: product.calisanSayisi
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


                                    const teminatBilgileri = [
                                        {
                                            label: 'Title',
                                            value: 'Teminat Bilgileri'
                                        },
                                        {
                                            label: 'Teminat Miktarı',
                                            value: product.teminatMiktari + ' ₺'
                                        },
                                        {
                                            label: 'Ek Teminatlar',
                                            value: product.ekTeminatlar ? product.ekTeminatlar.join(', ') : ''
                                        },
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
                                            <TableCell>{product.id}</TableCell>
                                            <TableCell ><TableDropdownMenu bilgiler={kisiselBilgiler} label={product.basvuran} /></TableCell>
                                            <TableCell ><TableDropdownMenu bilgiler={teminatBilgileri} label={product.teminatMiktari + ' ₺'} /></TableCell>
                                            {product.police === 'var' ?
                                                <TableCell > <TableDropdownMenu bilgiler={policeBilgileri} label='Var' /></TableCell>
                                                :
                                                <TableCell className='capitalize'> {product.police}</TableCell>
                                            }
                                            <TableCell > <TableDropdownMenu bilgiler={iletisimBilgileri} label={product.telefonNumarasi} /></TableCell>
                                            <TableCell>
                                                <DeleteTeklif category={'ferdikaza'} teklifId={product.id} />
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

