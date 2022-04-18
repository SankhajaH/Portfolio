import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, A } from './HeroStyles';


const Hero = () => (
  <Section>
    <LeftSection>
    <SectionText>
        Hey there! <br />
        Welcome to My Porfolio. <br/>
        I am  
      </SectionText>
      <SectionTitle main center>
        Sankhaja Hapukotuwa
      </SectionTitle>
      <SectionText>
        I&lsquo;m a Fullstack Developer, currently based in Kandy, <br/>
        Sri Lanka.
        </SectionText>
        <A 
        href='/sankhaja_resume.pdf'
        rel='noopener noreferrer'
        target='_blank'>
          Resume
        </A>
    </LeftSection>
  </Section>
);

export default Hero;