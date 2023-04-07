import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const Layout = ({title, children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <main className='relative min-h-screen font-sans bg-primary-base text-white-dark'>
                {children}
            </main>
            <Footer />
        </>
    );
};
