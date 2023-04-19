import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const Layout = ({title, children}) => {
    return (
        <div className='select-none'>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <main className='min-h-screen font-sans bg-primary-base text-white-dark'>
                {children}
            </main>
            <Footer />
        </div>
    );
};
