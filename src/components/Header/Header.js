import Link from 'next/link';
import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {DiCssdeck} from 'react-icons/di';
import {HiOutlineMail} from 'react-icons/hi';
import {Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () => (
    <Container>
        <Div1>
            <Link href='#'>
                <a
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        marginBottom: '20px',
                    }}
                >
                    <DiCssdeck size='3rem' /> <Span>Portfolio</Span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href='#projects'>
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href='#tech'>
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href='#about'>
                    <NavLink>About</NavLink>
                </Link>
            </li>
            <li>
                <a href='/sankhaja_resume.pdf' rel='noopener noreferrer' target='_blank'>
                    <NavLink>Resume</NavLink>
                </a>
            </li>
        </Div2>
        <Div3>
            <p>
                <a href='https://github.com/SankhajaH' rel='noopener noreferrer' target='_blank'>
                    <SocialIcons>
                        <AiFillGithub size='3rem' />
                    </SocialIcons>
                </a>
            </p>
            <p>
                <a
                    href='https://www.linkedin.com/in/sankhaja-hapukotuwa-a13ab41b5/'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <SocialIcons>
                        <AiFillLinkedin size='3rem' />
                    </SocialIcons>
                </a>
            </p>
            <p>
                <a href='mailto:shapu953@gmail.com' rel='noopener noreferrer' target='_blank'>
                    <SocialIcons>
                        <HiOutlineMail size='4rem' />
                    </SocialIcons>
                </a>
            </p>
        </Div3>
    </Container>
);

export default Header;
