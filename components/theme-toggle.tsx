"use client"
import React, { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { FaSun, FaMoon } from 'react-icons/fa';
import IconButton from "./ui/icon-button";
const ThemeToggle = () => {

    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const currentTheme = theme === "system" ? systemTheme : theme

    return (
        <IconButton>
            {currentTheme === "dark" ? (
                <FaSun
                    size={18}
                    className="cursor-pointer text-yellow-400 hover:scale-[1.02]"
                    onClick={() => {
                        setTheme("light")
                    }}
                />
            ) : (
                <FaMoon
                    size={18}
                    className="cursor-pointer text-gray-700 hover:scale-[1.02]"
                    onClick={() => {
                        setTheme("dark")
                    }}
                />
            )}
        </IconButton>
    )
}

export default ThemeToggle