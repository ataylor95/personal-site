import React from 'react';
import Nav from '../nav/nav';

interface pageProps {
    children: React.ReactNode
}

const Page: React.FC<pageProps> = (props) => {
    return (
    <div className="page">
        <div className="page__header__logo">Logo</div>
        <div className="page__header__content">
            <h1>amltaylor</h1>
            <h2>Full Stack Developer</h2>
            <h3>London</h3>
        
        </div>
        <div className="page__header__nav">
            <Nav />
        </div>
        <main className="page__main">
            {props.children}
        </main>
        <footer className="page__footer">
            <p>Copyright etc goes down here</p>
        </footer>
    </div>
    );
}

export default Page;