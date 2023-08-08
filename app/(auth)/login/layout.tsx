import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ContextProvider from '@/components/context'
import NextTopLoader from 'nextjs-toploader'
import { ToasterProvider } from '@/providers/toast-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <NextTopLoader />
          <ToasterProvider />
          <div>
            {children}
          </div>
        </ContextProvider>
      </body>
    </html>
  )
}
