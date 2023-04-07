import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, {useEffect} from 'react';
import {projects} from '../constants/constants';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    useEffect(() => {
        gsap.from('#projects', {
            scrollTrigger: {
                trigger: '#projects',
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
        <section id='projects' style={{minHeight: '80vh'}}>
            <p className='font-semibold text-5xl pb-8 pt-24'>Projects</p>
            <div>
                {projects.map(({id, image, title, description, tags, source, visit}) => (
                    <div
                        key={id}
                        className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
                    >
                        <ProjectCard
                            id={id}
                            image={image}
                            title={title}
                            description={description}
                            tags={tags}
                            source={source}
                            visit={visit}
                        />
                        <div className='pb-4'></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
