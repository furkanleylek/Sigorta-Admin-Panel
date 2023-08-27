import React, { ReactNode } from 'react';
import { Separator } from '../separator';
import { Paragraph } from '../paragraph';

interface TableMenuItem {
    children: ReactNode;
}

interface TableMenuContainerItemProps {
    children: ReactNode;
}


export const TableMenuContainerItem: React.FC<TableMenuContainerItemProps> = ({ children }) => {
    return (
        <React.Fragment >
            <Separator />
            <div className="flex items-center justify-between relative ">
                {children}
            </div>
        </React.Fragment>

    );
};

export const TableMenuInsideItem: React.FC<TableMenuItem> = ({ children }) => {
    return (
        <div className='flex items-center space-x-2 '>
            {children}
        </div>
    );
};


export const TableMenuSpan: React.FC<TableMenuItem> = ({ children }) => {
    return (
        <p className='text-sm leading-3 tracking-wide flex-1'> {children}</p>
    );
};

