import React from 'react';
import { connect } from 'react-redux';

const Item = ({ item, remove }) => (
    <li key={item.id}>
        {item.name} (${item.price})
        <a href="#/" onClick={() => {
            remove(item.id);
        }}>Del</a>
    </li>
);

const dispatchToProps = dispatch => {
    return {
        remove: id => {
            dispatch({ type: 'DEL', id });
        }
    }
}

const ReduxItem = connect(null, dispatchToProps)(Item);

export default ReduxItem;
