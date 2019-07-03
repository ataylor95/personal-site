import React, { useState } from 'react';

interface techIconProps {
    name: string
}

const TechIcon: React.FC<techIconProps> = ({name}) => {
    let [imgsrc, setImgsrc] = useState('');
    import(`../../data/images/logos/${name}-icon.svg`).then((logo) => {
        setImgsrc(logo.default);
    });

    const addWhiteBg = (name.includes('stencil') ? "add-white-bg" : "")

    return (
        <div className="tech-icon">
            <img className={`tech-icon__icon ` + addWhiteBg}  src={imgsrc} alt={name} title={name}></img>
        </div>
    );
}

export default TechIcon;