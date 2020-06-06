import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.data.map( item => {
                    return (
                        <Item item={item} />
                    )
                })}
            </ul>
        )
    }
}

const stateToProps = state => {
    return {
        data: state
    }
}

const ReduxList = connect(stateToProps, null)(List);

export default ReduxList;
