import React from 'react';
import Header from './Header';
import Nav from './Nav';

const Home = props => {
    return (
        <div>
            <Header>
                <Nav />
            </Header>
            <h2>Home</h2>
        </div>
    );
}

export default Home;
