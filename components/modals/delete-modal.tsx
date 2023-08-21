'use client'
import React from 'react'
import { Button } from '../ui/button'

interface DeleteModalProps {
    setOpenModal: (isOpen: boolean) => void
    deleteFunction: () => Promise<void>
    loading: boolean
}




const DeleteModal: React.FC<DeleteModalProps> = ({ loading, setOpenModal, deleteFunction }) => {
    return (
        <div className="fixed inset-0 z-50 bg-background/20  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        >
            <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full">
                <h3 className="text-primary text-lg font-semibold">
                    Bu teklifi silmek istediğinize emin misiniz ?
                </h3>
                <p className='text-sm text-muted-foreground'>
                    Silinen teklif geri alınamaz. Kalıcı olarak silinir .
                </p>
                <div className='flex flex-col-reverse gap-2 sm:flex-row sm:justify-end '>
                    <Button variant='outline' size="sm" onClick={() => setOpenModal(false)} disabled={loading}>
                        İptal
                    </Button>
                    <Button size="sm" onClick={() => { deleteFunction() }} disabled={loading}>
                        Devam
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal