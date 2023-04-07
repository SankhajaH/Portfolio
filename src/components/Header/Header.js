import React, {useState} from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {DiCssdeck} from 'react-icons/di';
import {HiOutlineMail} from 'react-icons/hi';
import {Link as ScrollLink} from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState('');

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
            <div className='flex flex-row'>
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
                        className='hover:text-xl'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'white',
                            marginBottom: '20px',
                        }}
                    >
                        <DiCssdeck size='3rem' /> <div className='text-lg'>Portfolio</div>
                    </a>
                </ScrollLink>
            </div>
            <div className='flex flex-row space-x-16'>
                <ScrollLink
                    className='transition ease-in cursor-pointer hover:text-blue'
                    to='hero'
                    smooth
                    duration={500}
                    offset={-100}
                    isDynamic
                    onClick={handleLink}
                >
                    About
                </ScrollLink>
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
            <div className='flex flex-row space-x-2'>
                <p>
                    <a
                        href='https://github.com/SankhajaH'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <div className='hover:shadow-blue shadow-lg'>
                            <AiFillGithub size={30} />
                        </div>
                    </a>
                </p>
                <p>
                    <a
                        href='https://www.linkedin.com/in/sankhaja-hapukotuwa-a13ab41b5/'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <div className='hover:shadow-blue shadow-lg'>
                            <AiFillLinkedin size={30} />
                        </div>
                    </a>
                </p>
                <p>
                    <a href='mailto:shapu953@gmail.com' rel='noopener noreferrer' target='_blank'>
                        <div className='hover:shadow-blue shadow-lg'>
                            <HiOutlineMail size={30} />
                        </div>
                    </a>
                </p>
            </div>
        </nav>
    );
};

export default Header;
