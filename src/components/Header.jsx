import {gsap} from 'gsap';
import React, {useEffect, useState} from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {DiCssdeck} from 'react-icons/di';
import {HiOutlineMail} from 'react-icons/hi';
import {Link as ScrollLink} from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState('');

    useEffect(() => {
        const tl = gsap.timeline({delay: 0.4});

        tl.from('#id', {opacity: 0, duration: 0.3, ease: 'expo.in'}, 'start').from('#navItems', {
            opacity: 0,
            y: -10,
            stagger: 0.1,
            ease: 'power2.out',
            duration: 0.5,
        });
    }, []);

    const toggle = () => {
        if (!isOpen) {
            setMenu('opened');
        } else {
            setMenu('');
        }
        setIsOpen(!isOpen);
    };

    const handleLink = () => {
        setIsOpen(false);
        setMenu('');
    };
    return (
        <nav className='sticky top-0 z-50 flex items-center justify-between bg-primary-base text-white-dark p-4'>
            <div id='id' className='flex flex-row'>
                <ScrollLink
                    className='transition ease-in cursor-pointer'
                    to='home'
                    smooth
                    duration={500}
                    offset={-100}
                    isDynamic
                    onClick={handleLink}
                >
                    <a
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'white',
                            marginBottom: '20px',
                        }}
                    >
                        <DiCssdeck size='3rem' /> <div className='text-lg'>Sankhaja</div>
                    </a>
                </ScrollLink>
            </div>
            <div id='navItems' className='flex flex-row space-x-16'>
                <ScrollLink
                    className='transition ease-in cursor-pointer hover:text-blue'
                    to='projects'
                    smooth
                    duration={500}
                    offset={-100}
                    isDynamic
                    onClick={handleLink}
                >
                    Projects
                </ScrollLink>

                <ScrollLink
                    className='transition ease-in cursor-pointer hover:text-blue'
                    to='technologies'
                    smooth
                    duration={500}
                    offset={-100}
                    isDynamic
                    onClick={handleLink}
                >
                    Technologies
                </ScrollLink>

                <div className='transition ease-in cursor-pointer hover:text-blue'>
                    <a href='/sankhaja_resume.pdf' rel='noopener noreferrer' target='_blank'>
                        <div>Resume</div>
                    </a>
                </div>
            </div>
            <div id='navItems' className='flex flex-row space-x-3'>
                <div>
                    <a href='mailto:shapu953@gmail.com' rel='noopener noreferrer' target='_blank'>
                        <HiOutlineMail
                            size={30}
                            className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
                        />
                    </a>
                </div>
                <div>
                    <a
                        href='https://github.com/SankhajaH'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <AiFillGithub
                            size={30}
                            className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
                        />
                    </a>
                </div>
                <div>
                    <a
                        href='https://www.linkedin.com/in/sankhaja-hapukotuwa-a13ab41b5/'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <AiFillLinkedin
                            size={30}
                            className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
