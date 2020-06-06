import React from 'react';
import { connect } from 'react-redux';

class Item extends React.Component {
    render() {
        return (
            <li key={this.props.item.id}>
                {this.props.item.name} (${this.props.item.price})
                <a href="#/" onClick={() => {
                        this.props.remove(this.props.item.id);
                    }}>Del</a>
            </li>
        )
    }
}

const dispatchToProps = dispatch => {
    return {
        remove: id => {
            dispatch({ type: 'DEL', id });
        }
    }
}

const ReduxItem = connect(null, dispatchToProps)(Item);

export default ReduxItem;
