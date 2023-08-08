import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Lora, Roboto_Mono, Open_Sans, Mate_SC } from 'next/font/google'

interface TitleH3Props {
    children: ReactNode;
}

const lora = Lora({ subsets: ['latin'], weight: '700' })

const TitleH3: React.FC<TitleH3Props> = ({ children }) => {
    return (
        <h1 className={classNames('font-bold text-2xl md:text-3xl border-l-4 border-border pl-4', lora.className)}>
            {children}
        </h1>
    );
};

export default TitleH3;