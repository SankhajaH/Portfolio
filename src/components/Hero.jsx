import {gsap} from 'gsap';
import React, {useEffect} from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    useEffect(() => {
        gsap.from('#hero', {
            opacity: 0,
            y: 40,
            ease: 'power3.out',
            duration: 7,
            delay: 0.7,
        });
    }, []);
    return (
        <section id='hero' style={{minHeight: '90vh'}} className='flex items-center'>
            <div>
                <p className='text-xl font-semibold text-white-base py-2'>
                    Hey there! Welcome to My Porfolio. I am
                </p>
                <Typewriter
                    options={{
                        strings: [
                            `<span class='text-6xl font-semibold text-blue py-4'> Sankhaja Hapukotuwa. </span>`,
                        ],

                        loop: false,
                        autoStart: true,
                        deleteSpeed: Infinity,
                        cursor: '_',
                        typeSpeed: 100,
                    }}
                />
                <p className='text-3xl font-semibold py-2'>
                    I&lsquo;m a Fullstack Developer, currently based in Kandy, <br />
                    Sri Lanka.
                </p>
                <div className='flex flex-row py-4'>
                    <a
                        href='/sankhaja_resume.pdf'
                        rel='noopener noreferrer'
                        target='_blank'
                        className='bg-blue rounded-md w-fit hover:cursor-pointer hover:bg-opacity-40'
                    >
                        <p className='px-6 py-4 text-white-base'>Resume</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
