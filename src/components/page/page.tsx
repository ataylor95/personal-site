import React, { ReactNode } from 'react';

interface pageProps {
    children: ReactNode
}

const Page = (props : pageProps) => {
    return (
    <div className="page">
        <h1>ALEX</h1>
        {props.children}
    </div>
    );
}

export default Page;