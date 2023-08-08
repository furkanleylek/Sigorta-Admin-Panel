'use client'
import React from 'react'
import { deleteCookie } from 'cookies-next'
import { FiLogOut } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { IoPersonOutline } from 'react-icons/io5'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import IconButton from "../ui/icon-button";

const Logout = () => {

    const router = useRouter()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger >
                <IoPersonOutline size={22} className='dark:text-white' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem >
                    Profil
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { deleteCookie('token'), deleteCookie('username'), router.push('/login') }}>
                    Çıkış Yap
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Logout