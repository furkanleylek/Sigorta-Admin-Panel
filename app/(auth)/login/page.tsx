import React from 'react'
import { Paragraph } from '@/components/ui/paragraph'
import TitleH1 from "@/components/ui/h1"
import TitleH3 from "@/components/ui/h3"
import LoginForm from '@/components/login/loginForm'
export default function LoginPage() {
    return (
        <main className="flex items-start pt-40 justify-center w-full h-screen bg-gradient-to-r from-[#121F34] to-[#1F2836] ">
            <div
                className='
            w-full sm:w-[475px] gap-6
            flex flex-col items-center justify-evenly p-10 
            '
            >
                <h1 className="text-white items-start font-semibold  text-xl lg:text-3xl" >
                    Kahramanmaraş Sigorta
                </h1>
                <LoginForm />
            </div>
        </main>
    )
}
