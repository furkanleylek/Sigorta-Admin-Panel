import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Lora, Roboto_Mono, Open_Sans, Mate_SC } from 'next/font/google'

interface TitleH1Props {
    children: ReactNode;
}

const lora = Lora({ subsets: ['latin'], weight: '700' })

const TitleH1: React.FC<TitleH1Props> = ({ children }) => {
    return (
        <h1 className={classNames('font-bold text-2xl md:text-3xl border-l-4 border-border pl-4', lora.className)}>
            {children}
        </h1>
    );
};

export default TitleH1;