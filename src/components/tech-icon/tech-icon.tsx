import React, { useState } from 'react';

interface techIconProps {
    name: string
}

const TechIcon: React.FC<techIconProps> = ({name}) => {
    let [imgsrc, setImgsrc] = useState('');
    const imgName = name.toLowerCase().replace(' ', '');
    import(`../../data/images/logos/${imgName}-icon.svg`).then((logo) => {
        setImgsrc(logo.default);
    });

    // Stencil logo is black so need to add a white background.
    // In theory if there are more logos like this, we could make an array of them to check against
    const addWhiteBg = (name.includes('Stencil') ? "add-white-bg" : "")

    return (
        <div className="tech-icon">
            <img className={`tech-icon__icon ` + addWhiteBg}  src={imgsrc} alt={name} title={name}></img>
            <p>{name}</p>
        </div>
    );
}

export default TechIcon;