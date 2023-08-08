'use client'
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';


interface ButtonPrimaryProps {
    children: ReactNode;
}


const IconButton: React.FC<ButtonPrimaryProps> = ({ children }) => {
    return (
        <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-2px", y: "2px" }}
        >
            {children}
        </motion.button>
    );
};

export default IconButton; 
