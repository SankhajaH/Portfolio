import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, {useEffect} from 'react';
import {DiFirebase, DiReact} from 'react-icons/di';
import {FiFigma} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
    useEffect(() => {
        gsap.from('#technologies', {
            scrollTrigger: {
                trigger: '#technologies',
                start: 'top 80%',
            },
            opacity: 0,
            y: 40,
            ease: 'linear.out',
            duration: 1,
            delay: 0.3,
        });
    }, []);
    return (
        <section id='technologies' style={{minHeight: '80vh'}} className='py-36 border-b-2'>
            <p className='font-semibold text-5xl pb-4'>Technologies</p>
            <div className='text-2xl md:text-3xl text-gray-400 pb-8'>
                I've worked with an array of technologies in the web development realm. From design
                to build!
            </div>
            <div className='md:flex md:flex-row justify-between mt-4'>
                <div className='flex flex-col justify-start'>
                    <FiFigma size={30} />
                    <div className='py-2'>
                        <div className='text-blue font-semibold text-2xl'>UI/UX</div>
                        <div>
                            Experience with <br />
                            design tools like Figma.
                        </div>
                    </div>
                </div>
                <div>
                    <DiReact size={35} />
                    <div>
                        <div className='text-blue font-semibold text-2xl'>Front-End</div>
                        <div>
                            Experience with <br />
                            HTML, CSS, Javascript, Typescript, React.js, Next.js, <br />{' '}
                            Commerce.Js, TailwindCSS, MaterialUI and ChakraUI.
                        </div>
                    </div>
                </div>
                <div>
                    <DiFirebase size={40} />
                    <div>
                        <div className='text-blue font-semibold text-2xl'>Back-End</div>
                        <div>
                            Experience with <br />
                            Node.js, Nest.Js Firebase and SQL.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
