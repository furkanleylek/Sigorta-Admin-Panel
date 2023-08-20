import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Label } from "@/components/ui/label"
import { Separator } from '../separator'
import { AiOutlineCopy } from 'react-icons/ai'
import { TableMenuContainerItem, TableMenuInsideItem, TableMenuSpan } from './table-menu-item'


interface Bilgi {
    value: string
    label: string
}

interface TableDropdownMenuProps {
    bilgiler: Bilgi[]
    label?: string
}

const TableDropdownMenu: React.FC<TableDropdownMenuProps> = ({ bilgiler, label }) => {
    return (
        <Popover>
            <PopoverTrigger className='flex items-center'>
                <span>{label}</span>
                <BiDotsVerticalRounded size={16} className="mt-1 mx-2" />
            </PopoverTrigger>
            <PopoverContent className='space-y-4'>
                <h4 className="font-semibold leading-none">{bilgiler[0].value}</h4>
                {
                    bilgiler.map((item) => {
                        if (item.value && item.label !== 'Title') {
                            return (
                                <TableMenuContainerItem key={item.label}>
                                    <TableMenuInsideItem>
                                        <Label>{item.label} : </Label>
                                        <TableMenuSpan>{item.value}</TableMenuSpan>
                                    </TableMenuInsideItem>
                                    <AiOutlineCopy />
                                </TableMenuContainerItem>
                            )
                        }
                    })

                }
            </PopoverContent>
        </Popover>
    )
}

export default TableDropdownMenu