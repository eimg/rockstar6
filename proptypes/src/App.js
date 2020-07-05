import React from 'react';
import Header from './Header';

const App = props => {
    return (
        <>
            <Header count={12} />
            <ul>
                <li>Item One</li>
                <li>Item Two</li>
            </ul>
        </>
    )
};

export default App;
