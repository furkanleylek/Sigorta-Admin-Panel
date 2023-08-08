'use client'
import React, { createContext, useState, useContext } from 'react'

interface ContextType {
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    closeModal: boolean
    setCloseModal: React.Dispatch<React.SetStateAction<boolean>>

}
const Context = createContext<ContextType | undefined>(undefined)

function ContextProvider({ children }: { children: React.ReactNode }) {

    const [loading, setLoading] = useState(false)
    const [closeModal, setCloseModal] = useState(false)
    const data = {
        loading, setLoading,
        closeModal, setCloseModal
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