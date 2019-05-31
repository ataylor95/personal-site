import React, { ReactNode } from 'react';
import Nav from '../nav/nav';

interface pageProps {
    children: ReactNode
}

const Page: React.FC<pageProps> = (props) => {
    return (
    <div className="page">
        <Nav />
        <h1>ALEX</h1>
        {props.children}
    </div>
    );
}

export default Page;