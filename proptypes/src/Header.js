import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <>
            <h1>Prop Type {props.count}</h1>
        </>
    )
};

Header.propTypes = {
    count: PropTypes.number.isRequired
}

export default Header;
