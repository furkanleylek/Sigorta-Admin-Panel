import React, { ReactNode } from 'react';
import { Separator } from '../separator';
import { Paragraph } from '../paragraph';

interface TableMenuItem {
    children: ReactNode;
}


export const TableMenuContainerItem: React.FC<TableMenuItem> = ({ children }) => {
    return (
        <>
            <Separator />
            <div className="flex items-center justify-between space-x-2">
                {children}
            </div>
        </>

    );
};

export const TableMenuInsideItem: React.FC<TableMenuItem> = ({ children }) => {
    return (
        <div className='flex items-center space-x-2'>
            {children}
        </div>
    );
};


export const TableMenuSpan: React.FC<TableMenuItem> = ({ children }) => {
    return (
        <p className='text-sm leading-3 tracking-wide flex-1'> {children}</p>
    );
};

