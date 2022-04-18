import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <br/>
   <SectionTitle>
     Technologies
   </SectionTitle>
   <SectionText>
     I've worked with an array of technologies in the web development realm. From design to build!
   </SectionText>
   <List>
   <ListItem>
       <FiFigma size="2rem" />
       <ListContainer>
         <ListTitle>UI/UX</ListTitle>
         <ListParagraph>
           Experience with <br/>
           design tools like Figma.
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiReact size="3rem" />
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
           Experience with <br/>
           HTML, CSS, Javascript, React.js, Next.js and TailwindCSS.
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size="3rem" />
       <ListContainer>
         <ListTitle>Back-End</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Node.js, Firebase and SQL.
         </ListParagraph>
       </ListContainer>
     </ListItem>
     
   </List>
 </Section>
);

export default Technologies;
