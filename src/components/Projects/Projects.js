import React from 'react';

import {projects} from '../../constants/constants';

const Projects = () => (
    <section id='projects'>
        <div />
        <div>Projects</div>
        <div>
            {projects.map(({id, image, title, description, tags, source, visit}) => (
                <div key={id}>
                    <img src={image} />
                    <div>
                        <div title=''>{title}</div>
                    </div>
                    <div>{description}</div>
                    <br />
                    <div>
                        <div>Stack</div>
                        <div>
                            {tags.map((tag, i) => (
                                <div key={i}>{tag}</div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div href={source}>Code</div>
                        {visit && <div href={visit}>Visit</div>}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;
