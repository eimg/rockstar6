import React from 'react';

const style = {
    background: 'cyan',
    padding: 10
};

const Header = props => {
    return (
        <div style={style}>
            <h1>Next JS</h1>
            {props.children}
        </div>
    );
}

export default Header;
