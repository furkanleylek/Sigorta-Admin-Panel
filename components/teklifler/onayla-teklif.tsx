'use client'
import React, { useEffect, useState } from 'react'
import { TiTick } from 'react-icons/ti'

interface OnaylaTeklifProps {
    teklifId: string
    productOnaylama: boolean
}

const OnaylaTeklif: React.FC<OnaylaTeklifProps> = ({ teklifId, productOnaylama }) => {

    const [onaylamaState, setOnaylamaState] = useState(false)

    useEffect(() => {
        setOnaylamaState(productOnaylama)
    }, [])

    const handleOnayla = async () => {
        try {
            const response = await fetch('/api/trafik', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
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