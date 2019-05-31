import React from 'react';
import Nav from '../nav/nav';

interface pageProps {
    children: React.ReactNode
}

const Page: React.FC<pageProps> = (props) => {
    return (
    <div className="page">
        <header>
            <Nav />
        </header>
        <main>
            <h1>ALEX</h1>
            {props.children}
        </main>
        <footer>
            <p>Copyright etc goes down here</p>
        </footer>
    </div>
    );
}

export default Page;