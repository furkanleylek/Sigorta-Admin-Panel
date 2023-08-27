'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

interface UpdateNotificationProps {
    linkHref: string
}



const UpdateNotification: React.FC<UpdateNotificationProps> = ({ linkHref }) => {


    const handleOnayla = async () => {
        console.log("sa")
        try {
            const response = await fetch(`/api${linkHref}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Operation': 'updateGuncel'
                },
                body: JSON.stringify({})

            });

        } catch (error) {
            console.error('Bir hata oluştu:', error);
        }
    };

    return (
        <Link href={linkHref} onClick={() => { handleOnayla() }}>
            <Button variant='outline' size='xs'>
                Teklifi Görüntüle
            </Button>
        </Link>
    )
}

export default UpdateNotification