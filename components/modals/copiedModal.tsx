'use client'
import React, { useState, useEffect } from 'react';
import IconButton from '../ui/icon-button';
import { AiOutlineCopy } from 'react-icons/ai'

interface CopiedModalProps {
    url: string | null; // string veya null olabilir
    label: string | null
}

const handleCopyClick = (setCopySuccess: React.Dispatch<React.SetStateAction<boolean>>, url: string | null) => {
    if (url !== null) {
        navigator.clipboard.writeText(url);
        setTimeout(() => {
            setCopySuccess(false);
        }, 1000);
    }
};

const CopiedModal: React.FC<CopiedModalProps> = ({ url, label }) => {

    const [copySuccess, setCopySuccess] = useState(false)

    useEffect(() => {
        if (copySuccess && url !== null) {
            handleCopyClick(setCopySuccess, url);
        }
    }, [copySuccess, setCopySuccess, url]);

    return (
        <>
            <IconButton onClick={() => setCopySuccess(true)}>
                <AiOutlineCopy size={16} className="ml-4" />
            </IconButton>
            {
                copySuccess && (
                    <div className='text-[12px] px-2 py-[9px] left-0 text-center text-white w-full z-[51] bg-green-500 font-bold absolute '>
                        {label} kopyalandı !
                    </div>
                )
            }
        </>

    );
};

export default CopiedModal;
