import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <div>
            <h1 title="TDD">Prop Type {props.count}</h1>
        </div>
    )
};

Header.propTypes = {
    count: PropTypes.number.isRequired
}

export default Header;
