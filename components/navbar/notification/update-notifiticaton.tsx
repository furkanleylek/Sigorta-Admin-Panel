'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
interface UpdateNotificationProps {
    linkHref: string
}



const UpdateNotification: React.FC<UpdateNotificationProps> = ({ linkHref }) => {

    const router = useRouter()

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

            router.refresh()

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