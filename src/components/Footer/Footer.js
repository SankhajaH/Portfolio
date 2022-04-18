import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi'
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <>
     <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:shapu953@gmail.com">
            <HiOutlineMail size="4rem"/>
          </LinkItem>
        </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan>Web Design is more than just making things look pretty. 
           <br/>It’s about telling a story through the message and visuals.</Slogan>
       </CompanyContainer>
       <SocialContainer>
         <a href="https://github.com/SankhajaH" rel='noopener noreferrer'
        target='_blank'>
       <SocialIcons >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      </a>
      <a href="https://www.linkedin.com/in/sankhaja-hapukotuwa-a13ab41b5/"  rel='noopener noreferrer'
        target='_blank'>
      <SocialIcons >
        
        <AiFillLinkedin size="3rem" />
        
      </SocialIcons>
      </a>
       </SocialContainer>
     </SocialIconsContainer>
     </>
  );
};

export default Footer;
