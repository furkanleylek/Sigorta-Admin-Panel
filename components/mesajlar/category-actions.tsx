'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { MoreVertical, Trash, Edit, Plus } from 'lucide-react'

import DeleteModal from '../modals/delete-modal'
import { useToast } from "@/components/ui/use-toast"
import Link from 'next/link'

interface CategoryActionsProps {
    categoryId: string
}

const CategoryActions: React.FC<CategoryActionsProps> = ({ categoryId }) => {

    const router = useRouter()
    const [openModal, setOpenModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const { toast } = useToast()

    async function deleteCategory() {
        try {
            setLoading(true);
            const response = await fetch(`/api/categories/${categoryId}`, {
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
                title: "Category successfully deleted .",
                variant: 'destructive'
            })
            router.refresh()
        }
        catch (error) {
            // toast error
            toast({
                title: "First , you need to delete the products in the category .",
            })
        } finally {
            setOpenModal(false)
            setLoading(false);
        }
    }

    return (
        <>

            <DropdownMenu>
                <DropdownMenuTrigger asChild className=' mt-2'>
                    <Button variant='ghost' size='sm'><MoreVertical size={14} /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Edit className="mr-2" size={14} />  Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => { setOpenModal(true) }}
                        className='space-x-2'
                    >
                        <Trash className="mr-2" size={14} /> Delete
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        asChild
                    >
                        <Link href={`/categories/${categoryId}/addproduct`}>
                            <Plus className="mr-2" size={14} />  Add Product
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {
                openModal && (
                    <DeleteModal setOpenModal={setOpenModal} deleteFunction={deleteCategory} loading={loading} />
                )
            }
        </>
    )
}

export default CategoryActions