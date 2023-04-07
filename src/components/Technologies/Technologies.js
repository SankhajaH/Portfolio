import React from 'react';
import {DiFirebase, DiReact} from 'react-icons/di';
import {FiFigma} from 'react-icons/fi';

const Technologies = () => (
    <section id='technologies'>
        <div>Technologies</div>
        <div>
            I've worked with an array of technologies in the web development realm. From design to
            build!
        </div>
        <div>
            <div>
                <FiFigma size='2rem' />
                <div>
                    <div>UI/UX</div>
                    <div>
                        Experience with <br />
                        design tools like Figma.
                    </div>
                </div>
            </div>
            <div>
                <DiReact size='3rem' />
                <div>
                    <div>Front-End</div>
                    <div>
                        Experience with <br />
                        HTML, CSS, Javascript, React.js, Next.js, Commerce.Js, TailwindCSS,
                        MaterialUI and ChakraUI.
                    </div>
                </div>
            </div>
            <div>
                <DiFirebase size='3rem' />
                <div>
                    <div>Back-End</div>
                    <div>
                        Experience with <br />
                        Node.js, Nest.Js Firebase and SQL.
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Technologies;
