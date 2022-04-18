import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';



const Timeline = () => {


  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hi! I am Sankhaja, a passionate web developer. Self-taught as well as following a degree in{' '} 
         <a  href='https://www.sliit.lk/computing/programmes/software-engineering-degree/'
            rel='noopener noreferrer'
            target='_blank'
            style={{color: '#64FFDA'}}>
               Information Technology, speacializing in Software Engineering </a> 
              at{' '}
              <a
                href='https://www.sliit.lk/'
                rel='noopener noreferrer'
                target='_blank'
                style={{color: '#64FFDA'}}
                >SLIIT</a>, Malabe, Sri Lanka. 
        <br/>
        I enjoy opportunites that allow me to grow as an individual and aspire towards a career that will bring the best out of me as a developer. <br/>
      </SectionText>
    </Section>
  );
};

export default Timeline;
