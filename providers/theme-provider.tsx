'use client'
import React, { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
    children: ReactNode;
    attribute : string 
    enableSystem : boolean
    // Ek prop özelliklerini buraya ekleyebilirsiniz
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider {...props}>
            {children}
        </NextThemesProvider>
    );
}
