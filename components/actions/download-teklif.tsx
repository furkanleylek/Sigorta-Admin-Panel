import React from 'react'
import { HiOutlineDocumentDownload } from 'react-icons/hi'
import IconButton from '../ui/icon-button'
const DownloadTeklif = () => {
    return (
        <IconButton>
            <HiOutlineDocumentDownload size={20} className="text-green-500 dark:text-green-300" />
        </IconButton>
    )
}

export default DownloadTeklif