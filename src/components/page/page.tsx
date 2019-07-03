import React from 'react';
import Nav from '../nav/nav';

interface pageProps {
    children: React.ReactNode
}

const Page: React.FC<pageProps> = (props) => {
    return (
    <div className="page">
        <div className="page__header__logo"></div>
        <div className="page__header__content">
            <h1 className="page__header__content__name">Alex Taylor</h1>
            <h2 className="page__header__content__title">Full Stack Developer</h2>
            <h3 className="page__header__content__location icon-location">London</h3>
            <div className="social-media__container">
                <a className="icon-mail-alt" href="mailto: at95eng@gmail.com"><span className="social-media__container__text">Email me</span></a>
                <a className="icon-linkedin-squared" href="https://www.linkedin.com/in/amltaylor/" target="_blank" rel="noopener noreferrer">
                    <span className="social-media__container__text">LinkedIn</span>
                </a>
                <a className="icon-github-circled" href="https://github.com/ataylor95" target="_blank" rel="noopener noreferrer">
                    <span className="social-media__container__text">Github</span>
                </a>
            </div>
        </div>
        <div className="page__header__nav">
            <Nav />
        </div>
        <main className="page__main">
            {props.children}
        </main>
        <footer className="page__footer">
        </footer>
    </div>
    );
}

export default Page;