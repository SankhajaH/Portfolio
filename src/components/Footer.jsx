import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='flex flex-row justify-center bg-primary-base text-white-dark py-6 border-b-2 border-blue'>
                <p className='text-xs sm:text-sm text-center text-white-dark'>
                    Copyright © {new Date().getFullYear()} All Rights Reserved by Sankhaja
                    Hapukotuwa{' '}
                </p>
            </div>
        </>
    );
};

export default Footer;
