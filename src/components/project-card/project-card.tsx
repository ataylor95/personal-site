import React from 'react';

interface cardProps {
    name: string,
    description: string,
    link: string
}

const ProjectCard: React.FC<cardProps> = (props) => {
    console.log((props.link.toUpperCase()));
    return (
        <section className="project-card">
            <div className="project-card__name"><p>{props.name}</p></div>
            <div className="project-card__description"><p>{props.description}</p></div>
            <div className="project-card__link"><a href={props.link}>My link</a></div>
        </section>
    );
}

export default ProjectCard;