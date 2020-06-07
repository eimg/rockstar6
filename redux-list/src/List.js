import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

const List = ({ data }) => (
    <ul>
        {data.map( item => <Item item={item} />)}
    </ul>
);

const stateToProps = state => {
    return {
        data: state
    }
}

const ReduxList = connect(stateToProps, null)(List);

export default ReduxList;
