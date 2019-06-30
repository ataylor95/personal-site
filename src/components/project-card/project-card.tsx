import React from 'react';

interface cardProps {
    name: string,
    description: string,
    technologies: Array<string>,
    link: string
}

const ProjectCard: React.FC<cardProps> = ({name, description, technologies, link}) => {
    const techIcons = technologies.map((tech) => {
        return <div>{tech}</div>
    });
    return (
          <a className="project-card" href={link}>
                <div className="project-card__name"><p>{name}</p></div>
                <div className="project-card__description"><p>{description}</p></div>
                <div>{techIcons}</div>
          </a>
        
    );
}

export default ProjectCard;