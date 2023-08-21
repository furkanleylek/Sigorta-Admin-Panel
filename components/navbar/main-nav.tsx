"use client"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"


export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    const pathname = usePathname()
    const routes = [
        {
            href: `/`,
            label: 'Dashboard',
            active: pathname === `/`,
        },
        {
            href: `/teklifler`,
            label: 'Teklifler',
            active: pathname === `/teklifler`,
        },
        {
            href: `/trafik`,
            label: 'Trafik',
            active: pathname === `/trafik`,
        },
        {
            href: `/kasko`,
            label: 'Kasko',
            active: pathname === `/kasko`,
        },
        {
            href: `/konut`,
            label: 'Konut',
            active: pathname === `/konut`,
        },
        {
            href: `/isyeri`,
            label: 'İş Yeri',
            active: pathname === `/isyeri`,
        },
        {
            href: `/dask`,
            label: 'Dask',
            active: pathname === `/dask`,
        },
        {
            href: `/ferdikaza`,
            label: 'Ferdi Kaza',
            active: pathname === `/ferdikaza`,
        },
        {
            href: `/mesajlar`,
            label: 'Mesajlar',
            active: pathname === `/mesajlar`,
        },
    ]

    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        >
            {
                routes.map((route) => {
                    return (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                route.active ? "text-black dark:text-white" : "text-muted-foreground"
                            )}
                        >
                            {route.label}
                        </Link>
                    )
                })
            }
        </nav>
    )
}