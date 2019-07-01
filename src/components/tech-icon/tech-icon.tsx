import React, { useState } from 'react';
// var images = require.context('../../data/images/logos', true); //yarn add @types/webpack-env 

interface techIconProps {
    name: string
}

const TechIcon: React.FC<techIconProps> = ({name}) => {
    let [imgsrc, setImgsrc] = useState('');
    import(/* webpackMode: "eager" */ `../../data/images/logos/${name}-icon.svg`).then((logo) => {
        setImgsrc(logo.default);
    });

    return (
        <div className="tech-icon">
            <img className="tech-icon__icon" src={imgsrc} alt={name} title={name}></img>
        </div>
    );
}

export default TechIcon;