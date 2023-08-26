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

interface IsyerıTableProps {
    isyeriData: {
        id: string
        sahipturu: string
        kullaniciAdi: string | null
        dogumTarihi: string
        tcKimlik: string | null
        sirketUnvani: string | null
        vergiNo: string | null
        pasaportNo: string | null

        isyeri: string
        faaliyetKonusu: string
        calisanSayisi: string
        katsayisi: string
        binabedeli: string
        demisbasbedeli: string
        emtiabedeli: string
        makinetesbedeli: string
        cambedeli: string
        elektronikcihazbedeli: string
        kasamuhteviyatibedeli: string
        brutalan: string
        rizikoAdresi: string
        korumaOnlemleri: string[]
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
    'İş Yeri Bilgileri',
    'Poliçe',
    'İletişim',
    'Actions',
]


export const IsyeriTable: React.FC<IsyerıTableProps> = async ({ isyeriData }) => {


    return (
        <>
            {
                isyeriData
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
                                isyeriData?.map((product) => {

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
                                    const isyeriBilgileri = [
                                        {
                                            label: 'Title',
                                            value: 'İş Yeri Bilgileri'
                                        },
                                        {
                                            label: 'İş Yeri Durumu',
                                            value: product.isyeri
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
                                            label: 'Brüt Alan',
                                            value: product.brutalan
                                        },
                                        {
                                            label: 'Kat Sayısı',
                                            value: product.katsayisi
                                        },
                                        {
                                            label: 'Bina Bedeli',
                                            value: product.binabedeli
                                        },
                                        {
                                            label: 'Demirbaş Bedeli',
                                            value: product.demisbasbedeli
                                        },
                                        {
                                            label: 'Emtia Bedeli',
                                            value: product.emtiabedeli
                                        },
                                        {
                                            label: 'Makine Tes. Bedeli',
                                            value: product.makinetesbedeli
                                        },
                                        {
                                            label: 'Cam Bedeli',
                                            value: product.cambedeli
                                        },
                                        {
                                            label: 'Elektronik Cihaz Bedeli',
                                            value: product.elektronikcihazbedeli
                                        },
                                        {
                                            label: 'Kasa Muhteviyatı Bedeli',
                                            value: product.kasamuhteviyatibedeli
                                        },
                                        {
                                            label: 'Riziko Adresi UAVT Kodu',
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
                                            <TableCell ><TableDropdownMenu bilgiler={kisiselBilgiler} label={product.sahipturu} /></TableCell>
                                            <TableCell ><TableDropdownMenu bilgiler={isyeriBilgileri} label={product.isyeri} /></TableCell>
                                            {product.police === 'var' ?
                                                <TableCell > <TableDropdownMenu bilgiler={policeBilgileri} label='Var' /></TableCell>
                                                :
                                                <TableCell className='capitalize'> {product.police}</TableCell>
                                            }
                                            <TableCell > <TableDropdownMenu bilgiler={iletisimBilgileri} label={product.telefonNumarasi} /></TableCell>
                                            <TableCell>
                                                <div className='flex items-center space-x-2'>
                                                    <DeleteTeklif category='isyeri' teklifId={product.id} />
                                                    <DownloadTeklif />
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

