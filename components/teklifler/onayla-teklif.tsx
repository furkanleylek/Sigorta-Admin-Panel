'use client'
import React, { useEffect, useState } from 'react'
import { TiTick } from 'react-icons/ti'
import { usePathname } from 'next/navigation'
interface OnaylaTeklifProps {
    teklifId: string
    productOnaylama: boolean
}

const OnaylaTeklif: React.FC<OnaylaTeklifProps> = ({ teklifId, productOnaylama }) => {

    const [onaylamaState, setOnaylamaState] = useState(false)
    const pathname = usePathname()
    console.log("pathname:", pathname)
    useEffect(() => {
        setOnaylamaState(productOnaylama)
    }, [])

    const handleOnayla = async () => {
        try {
            console.log("onaylam teklifıd :", teklifId)

            const response = await fetch(`/api${pathname}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Operation': 'teklifOnaylama'
                },
                body: JSON.stringify({ teklifId, onaylamaState })
            });

            if (response.ok) {
                console.log('Teklif onaylandı');
            } else {
                console.error('Teklif onaylanırken hata oluştu');
            }
        } catch (error) {
            console.error('Bir hata oluştu:', error);
        }
    };

    return (
        <>
            {!onaylamaState && (
                <button className='border border-border w-4 h-4 ' onClick={() => { handleOnayla(), setOnaylamaState(true) }}>

                </button>
            )}

            {onaylamaState && (
                <TiTick size={20} className="text-green-500 cursor-pointer" onClick={() => { handleOnayla(), setOnaylamaState(false) }} />
            )}
        </>

    )
}

export default OnaylaTeklif