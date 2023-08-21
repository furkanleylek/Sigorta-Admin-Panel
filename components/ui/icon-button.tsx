'use client'
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';


interface ButtonPrimaryProps {
    children: ReactNode;
    onClick?: () => void; // onClick işlevi için opsiyonel prop
}


const IconButton: React.FC<ButtonPrimaryProps> = ({ children, onClick }) => {
    return (
        <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, x: "-1px", y: "1px" }}
            onClick={onClick}
            className='rounded-full'
        >
            {children}
        </motion.button>
    );
};

export default IconButton; 
