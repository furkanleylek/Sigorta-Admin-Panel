import React from 'react'
import SingleCard from './single-card'
import prismadb from '@/lib/prismadb'

const AllCards = async () => {

    const trafikData = await prismadb.trafik.findMany({
        where: {
            onaylama: false
        }
    });
    const trafikOnaylama = await prismadb.trafik.findMany({
        where: {
            onaylama: true
        }
    });

    const kaskoData = await prismadb.kasko.findMany({
        where: {
            onaylama: false
        }
    });
    const kaskoOnaylama = await prismadb.kasko.findMany({
        where: {
            onaylama: true
        }
    });

    const konutData = await prismadb.konut.findMany({
        where: {
            onaylama: false
        }
    });
    const konutOnaylama = await prismadb.konut.findMany({
        where: {
            onaylama: true
        }
    });

    const isyeriData = await prismadb.isyeri.findMany({
        where: {
            onaylama: false
        }
    });
    const isyeriOnaylama = await prismadb.isyeri.findMany({
        where: {
            onaylama: true
        }
    });

    const daskData = await prismadb.dask.findMany({
        where: {
            onaylama: false
        }
    });
    const daskOnaylama = await prismadb.dask.findMany({
        where: {
            onaylama: true
        }
    });

    const ferdikazaData = await prismadb.ferdiKaza.findMany({
        where: {
            onaylama: false
        }
    });
    const ferdikazaOnaylama = await prismadb.ferdiKaza.findMany({
        where: {
            onaylama: true
        }
    });

    const digerData = await prismadb.diger.findMany({
        where: {
            onaylama: false
        }
    });
    const digerOnaylama = await prismadb.diger.findMany({
        where: {
            onaylama: true
        }
    });

    const mesajlarData = await prismadb.mesajlar.findMany({
        where: {
            onaylama: false
        }
    });
    const mesajlarOnaylama = await prismadb.mesajlar.findMany({
        where: {
            onaylama: true
        }
    });
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 items-center justify-center'>
            <SingleCard label='Trafik Sigortası' value={trafikData.length} onaylananTeklif={trafikOnaylama.length} />
            <SingleCard label='Kasko Sigortası' value={kaskoData.length} onaylananTeklif={kaskoOnaylama.length} />
            <SingleCard label='Konut Sigortası' value={konutData.length} onaylananTeklif={konutOnaylama.length} />
            <SingleCard label='İş Yeri Sigortası' value={isyeriData.length} onaylananTeklif={isyeriOnaylama.length} />
            <SingleCard label='Dask Sigortası' value={daskData.length} onaylananTeklif={daskOnaylama.length} />
            <SingleCard label='Ferdi Kaza Sigortası' value={ferdikazaData.length} onaylananTeklif={ferdikazaOnaylama.length} />
            <SingleCard label='Diğer Kategoriler' value={digerData.length} onaylananTeklif={digerOnaylama.length} />
            <SingleCard label='Mesajlar' value={mesajlarData.length} onaylananTeklif={mesajlarOnaylama.length} />
        </div>
    )
}

export default AllCards