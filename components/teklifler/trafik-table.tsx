import React from 'react'
import prismadb from '@/lib/prismadb'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from 'next/image'

interface TrafikTableProps {
    trafikData: {
        id: string
        kullaniciAdi: string | null
        dogumTarihi: string
        sahipturu: string
        tcKimlik: string | null
        sirketUnvani: string | null
        vergiNo: string | null
        pasaportNo: string | null

        plakaNo: string
        kullanimTarzi: string
        marka: string
        modelYili: string
        ASBISno: string

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

export const TrafikTable: React.FC<TrafikTableProps> = async ({ trafikData }) => {

    return (
        <>
            {
                trafikData
                    ?
                    <Table className='text-[10px]'>
                        <TableHeader>
                            <TableRow >
                                <TableHead>Sahip Türü</TableHead>
                                <TableHead>Ad Soyad</TableHead>
                                <TableHead>T.C. Kimlik</TableHead>
                                <TableHead>Plaka No</TableHead>
                                <TableHead>Kullanım Tarzı</TableHead>
                                <TableHead>Marka / Model Yılı</TableHead>
                                <TableHead>ASBISno</TableHead>
                                <TableHead>Poliçe</TableHead>
                                <TableHead>Adres</TableHead>
                                <TableHead>Telefon No</TableHead>
                                <TableHead>E-Posta</TableHead>
                                <TableHead>Mesaj</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                trafikData?.map((product) => {
                                    return (
                                        <TableRow key={product.id}>
                                            <TableCell>{product.sahipturu}  $</TableCell>
                                            <TableCell>{product.kullaniciAdi}</TableCell>
                                            <TableCell> {product.tcKimlik}</TableCell>
                                            <TableCell>{product.plakaNo}</TableCell>
                                            <TableCell>{product.kullanimTarzi}</TableCell>
                                            <TableCell>{product.marka} / {product.modelYili}</TableCell>
                                            <TableCell>{product.ASBISno}</TableCell>
                                            <TableCell>{product.police}</TableCell>
                                            <TableCell>{product.adres}</TableCell>
                                            <TableCell>{product.telefonNumarasi}</TableCell>
                                            <TableCell>{product.eposta}</TableCell>
                                            <TableCell>{product.mesaj}</TableCell>
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

