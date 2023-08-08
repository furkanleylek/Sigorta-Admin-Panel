'use client'
import React from 'react'
import { deleteCookie } from 'cookies-next'
import { FiLogOut } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
const Logout = () => {

    const router = useRouter()

    return (
        <button
            className='flex items-center gap-10 p-2'
            onClick={() => { deleteCookie('token'), deleteCookie('username'), router.push('/login') }} // route to login page , when cookies deleted
        >
            <FiLogOut size={26} className='dark:text-white' />
            <h5 className='text-base text-primary'>
                Logout
            </h5>
        </button>
    )
}

export default Logout