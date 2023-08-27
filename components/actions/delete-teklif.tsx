'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MdOutlineDeleteOutline } from 'react-icons/md'

import IconButton from '../ui/icon-button'
import { useDashboardContext } from '../context'
import { useToast } from "@/components/ui/use-toast"
import { Button } from '../ui/button'

interface DeleteTeklifProps {
    teklifId: string
    category: string
}

const DeleteTeklif: React.FC<DeleteTeklifProps> = ({ category, teklifId }) => {

    const { loading, setLoading } = useDashboardContext()
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const router = useRouter()
    const { toast } = useToast()
    async function deleteProduct() {
        console.log("teklifId:", teklifId)
        console.log("category:", category)

        try {
            setLoading(true);
            const response = await fetch(`/api/${category}/${teklifId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                // Eğer cevap başarılı değilse (örneğin 404 veya 500 hatası), hata oluştuğunu belirtebiliriz
                throw new Error('Something went wrong');
            }
            // Başarı durumunda işlemlerinizi yapabilirsiniz
            toast({
                title: "Teklif başarıyla silindi .",
                variant: 'destructive'
            })
            router.refresh()
        }
        catch (error) {
            toast({
                title: "There was an error deleting the product .",
            })
        } finally {
            setOpenDeleteModal(false)
            setLoading(false);
        }
    }

    return (
        <>
            <IconButton onClick={() => setOpenDeleteModal(true)}>
                <MdOutlineDeleteOutline size={20} className="text-red-500 dark:text-red-400" />
            </IconButton>
            {openDeleteModal && (

                <div className="fixed inset-0 z-50 bg-background/50  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                >
                    <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full">
                        <h3 className="text-primary text-lg font-semibold">
                            Bu teklifi silmek istediğinize emin misiniz ?
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                            Silinen teklif geri alınamaz. Kalıcı olarak silinir .
                        </p>
                        <div className='flex flex-col-reverse gap-2 sm:flex-row sm:justify-end '>
                            <Button variant='outline' size="sm" onClick={() => setOpenDeleteModal(false)} disabled={loading}>
                                İptal
                            </Button>
                            <Button size="sm" onClick={() => { deleteProduct() }} disabled={loading}>
                                Devam
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default DeleteTeklif
