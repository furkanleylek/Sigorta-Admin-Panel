import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import TableDropdownMenu from '../ui/table/table-dropdown-menu'
import { TiTick } from 'react-icons/ti'
import OnaylaTeklif from './onayla-teklif'
interface KaskoTableProps {
    trafikData: {
        id: string
        kullaniciAdi: string
        dogumTarihi: string
        sahipturu: string
        tcKimlik: string
        sirketUnvani: string
        vergiNo: string
        pasaportNo: string

        plakaNo: string
        kullanimTarzi: string
        marka: string
        modelYili: string
        ASBISno: string

        police: string
        sigortaSirketi: string
        policeNumarasi: string
        policeBitisTarihi: string

        adres: string
        telefonNumarasi: string
        eposta: string
        mesaj: string

        onaylama: boolean
    }[]
}

const tableRowData = [
    'Onaylama',
    'İsimlendirme',
    'Kişisel Bilgiler',
    'Araç Bilgileri',
    'Poliçe',
    'İletişim',
    'Actions',
]


export const KaskoTable: React.FC<KaskoTableProps> = async ({ trafikData }) => {


    return (
        <>
            {
                trafikData
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
                                trafikData?.map((product) => {

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
                                    const aracBilgileri = [
                                        {
                                            label: 'Title',
                                            value: 'Araç Bilgileri'
                                        },
                                        {
                                            label: 'Plaka Numarası',
                                            value: product.plakaNo
                                        },
                                        {
                                            label: 'Kullanım Tarzı',
                                            value: product.kullanimTarzi
                                        },
                                        {
                                            label: 'Marka',
                                            value: product.marka
                                        },
                                        {
                                            label: 'Model Yılı',
                                            value: product.modelYili
                                        },
                                        {
                                            label: 'Ruhsat Belge Seri No',
                                            value: product.ASBISno
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
                                            <TableCell ><TableDropdownMenu bilgiler={kisiselBilgiler} label={product.sahipturu} /></TableCell>
                                            <TableCell ><TableDropdownMenu bilgiler={aracBilgileri} label={product.plakaNo} /></TableCell>
                                            {product.police === 'var' ?
                                                <TableCell > <TableDropdownMenu bilgiler={policeBilgileri} label='Var' /></TableCell>
                                                :
                                                <TableCell className='capitalize'> {product.police}</TableCell>
                                            }
                                            <TableCell > <TableDropdownMenu bilgiler={iletisimBilgileri} label={product.telefonNumarasi} /></TableCell>
                                            <TableCell><TableDropdownMenu bilgiler={kisiselBilgiler} /></TableCell>
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

