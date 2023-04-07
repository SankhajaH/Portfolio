import {AiFillGithub} from 'react-icons/ai';
import {HiExternalLink} from 'react-icons/hi';

const ProjectCard = ({id, image, title, description, tags, source, visit}) => {
    return (
        <div className='rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden flex'>
            <div className='flex flex-col'>
                <img className='h-full' src={image} />
                <div className='flex flex-row justify-center pb-2 mt-4'>
                    <a
                        href={source}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-500 hover:text-blue-700 mr-4'
                    >
                        <AiFillGithub size={25} />
                    </a>
                    <a
                        href={visit}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-500 hover:text-blue-700'
                    >
                        <HiExternalLink size={25} />
                    </a>
                </div>
            </div>
            <div className=' w-2/3 p-4 bg-white dark:bg-gray-800 bg-opacity-75 flex flex-col justify-center'>
                <h3 className='text-2xl font-semibold mb-2 text-blue'>{title}</h3>
                <p className='text-gray-700 dark:text-gray-400'>{description}</p>
                <div className=' mt-4'>
                    <p className='text-gray-700 dark:text-gray-400'>Technologies Used:</p>
                    <div className='pl-4'>
                        {tags.map((tech) => (
                            <div className='flex flex-row space-x-1'>
                                <div className='text-blue'>{`>`}</div>
                                <div key={tech} className='text-gray-700 dark:text-gray-400'>
                                    {tech}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;
