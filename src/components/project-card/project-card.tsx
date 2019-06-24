import React from 'react';

interface cardProps {
    name: String,
    description: String,
    link: String
}

const ProjectCard: React.FC<cardProps> = (props) => {
    return (
        <div className="project-card">
            <div className="project-card__name">{props.name}</div>
            <div className="project-card__description">{props.description}</div>
            <div className="project-card__link">{props.link}</div>
        </div>
    );
}

export default ProjectCard;