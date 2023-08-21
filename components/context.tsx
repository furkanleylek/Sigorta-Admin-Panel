'use client'
import React, { createContext, useState, useContext } from 'react'

interface ContextType {
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    closeModal: boolean
    setCloseModal: React.Dispatch<React.SetStateAction<boolean>>
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    password: string
    setPassword: React.Dispatch<React.SetStateAction<string>>
    openDeleteModal: boolean
    setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
}
const Context = createContext<ContextType | undefined>(undefined)

function ContextProvider({ children }: { children: React.ReactNode }) {

    const [loading, setLoading] = useState(false)
    const [closeModal, setCloseModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const data = {
        loading, setLoading,
        closeModal, setCloseModal,
        email, setEmail,
        password, setPassword,
        openDeleteModal, setOpenDeleteModal
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider

export const useDashboardContext = (): ContextType => {
    const context = useContext(Context)
    if (context === undefined) {
        throw new Error('useDashboardContext must be used within a Provider');
    }
    return context;
}