import React from 'react'
import prismadb from '@/lib/prismadb'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import CategoryActions from './category-actions'
import { Button } from '../ui/button'
import Link from 'next/link'
const AllMessages = async () => {

    const categories = await prismadb.category.findMany(
        {
            include: {   // fetch products data with categories
                items: true
            },
            orderBy: {
                createdAt: "desc"
            }
        }
    )
    console.log("categories:", categories)
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>İsim</TableHead>
                        <TableHead>İsim</TableHead>
                        <TableHead>İsim</TableHead>
                        <TableHead>İsim</TableHead>
                        <TableHead>İsim</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Sa</TableCell>
                        <TableCell>Sa</TableCell>
                        <TableCell>Sa</TableCell>
                        <TableCell>Sa</TableCell>
                        <TableCell>Sa</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default AllMessages