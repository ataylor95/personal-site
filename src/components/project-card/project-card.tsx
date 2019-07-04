import React from 'react';

import TechIcon from '../tech-icon/tech-icon';

interface cardProps {
    name: string,
    description: string,
    technologies: Array<string>,
    link: string
}

const ProjectCard: React.FC<cardProps> = ({name, description, technologies, link}) => {
    const techIcons = technologies.map((tech) => {
        const key = name.toLowerCase().replace(' ', '') + '-' + tech;
        return <TechIcon key={key} name={tech}></TechIcon>
    });
    return (
          <a className="project-card" href={link} target="_blank" rel="noopener noreferrer">
              <div className="project-card__container">
                <div className="project-card__name"><p>{name}</p></div>
                <div className="project-card__description"><p>{description}</p></div>
                <div className="project-card__icons">{techIcons}</div>
              </div>
          </a>
        
    );
}

export default ProjectCard;