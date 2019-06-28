import React from 'react';

interface cardProps {
    name: string,
    description: string,
    link: string
}

const ProjectCard: React.FC<cardProps> = (props) => {
    return (
        
          <a className="project-card" href={props.link}>
                <div className="project-card__name"><p>{props.name}</p></div>
                <div className="project-card__description"><p>{props.description}</p></div>
          </a>
        
    );
}

export default ProjectCard;