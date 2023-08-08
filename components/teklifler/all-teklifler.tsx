import React from 'react'
import prismadb from '@/lib/prismadb'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import CategoryActions from './category-actions'
import { Button } from '../ui/button'
import Link from 'next/link'
const AllTeklifler = async () => {

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
    // return (
    //     <Table>
    //         <TableHeader>
    //             <TableRow>
    //                 <TableHead>Name</TableHead>
    //                 <TableHead>Total Product Amount</TableHead>
    //                 <TableHead>Total Product Price</TableHead>
    //                 <TableHead>Last Product Added Date</TableHead>
    //                 <TableHead>Actions</TableHead>
    //             </TableRow>
    //         </TableHeader>
    //         <TableBody>
    //             {
    //                 categories.map((categorie) => {
    //                     const products = categorie.items

    //                     let totalProductPrice = 0
    //                     products.map((product) => (
    //                         totalProductPrice = totalProductPrice + product.price
    //                     ))
    //                     let lastProductAddedDate
    //                     if (products.length > 0) {
    //                         lastProductAddedDate = new Date(products[products.length - 1].createdAt);
    //                     }
    //                     const formattedDate = lastProductAddedDate?.toLocaleDateString("tr-TR"); // "dd-MM-yyyy" formatında çıktı verecektir.
    //                     return (
    //                         <TableRow key={categorie.name}>
    //                             <TableCell>{categorie.name}</TableCell>
    //                             <TableCell>{products.length}</TableCell>
    //                             <TableCell>{totalProductPrice} $</TableCell>
    //                             <TableCell>{formattedDate ? formattedDate : 'Product not found'}</TableCell>
    //                             <TableCell>
    //                                 <CategoryActions categoryId={categorie.id} />
    //                             </TableCell>
    //                             <TableCell>
    //                                 <Link
    //                                     href={`categories/${categorie.id}`}
    //                                 >
    //                                     <Button variant='outline'>
    //                                         See Products
    //                                     </Button>
    //                                 </Link>
    //                             </TableCell>
    //                         </TableRow>
    //                     )
    //                 })
    //             }
    //         </TableBody>
    //     </Table>
    // )

}

export default AllTeklifler