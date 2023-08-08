'use client'
import React, { useState } from 'react'
import { setCookie } from 'cookies-next' // with this library we can use cookies in client side 
import { useRouter, useSearchParams } from 'next/navigation' // to route after submit forms
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'

const LoginForm = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()
    const searchParams = useSearchParams()

    // to route with submit
    async function handleSubmit() {

        const users = await fetch(`/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, password: password })
        })
        console.log("status:", users.status)
        if (users.status === 200) {
            setCookie('token', 'TestToken')  // with a token we can route to Login page , if not login
            const nextUrl = searchParams.get('next') // if user want to access from /student page but is not login , with this way we can hold the /student path
            toast.success('Giriş Başarılı ! ')
            router.push(nextUrl ? nextUrl : '/')
        } else if (users.status === 401) {
            toast.error('Giriş başarısız ! ')
            console.log('Giriş başarısız:',);
        } else {
            toast.success('Giriş başarısız ! ')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col w-full gap-6'>
                <label htmlFor="name" className="sr-only">
                    Kullancı Adı
                </label>
                <input
                    className=" border border-border rounded w-full py-2 px-3 text-gray-700 mb-3 text-[15px] font-semibold appearance-none leading-tight focus:ring-2 focus:outline-none focus:shadow-outline p-4 outline-none "
                    type="text"
                    value={name}
                    placeholder='Kullanıcı Adı'
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="password" className="sr-only">
                    Şifre
                </label>
                <input
                    className=" border border-border rounded w-full py-2 px-3 text-gray-700 mb-3 text-[15px] font-semibold appearance-none leading-tight focus:ring-2 focus:outline-none focus:shadow-outline p-4 outline-none "
                    type="password"
                    placeholder='Şifre'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <Button onClick={handleSubmit} variant='outline'>
                Giriş Yap
            </Button>
        </>
    )
}

export default LoginForm