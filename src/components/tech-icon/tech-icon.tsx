import React from 'react';

interface techIconProps {
    name: string
}

const TechIcon: React.FC<techIconProps> = ({name}) => {
    return (
        <div className="tech-icon">{name}</div>
    );
}

export default TechIcon;