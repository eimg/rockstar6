import React from 'react';
import List from './List';
import { connect } from 'react-redux';

const App = ({ add }) => {
    let name = React.createRef();

    return (
        <div>
            <h1>Redux List</h1>
            <List />
            <input type="text" ref={name} />
            <button onClick={() => {
                add(name.current.value);
            }}>+</button>
        </div>
    );
}

const dispatchToProps = dispatch => {
    return {
        add: name => {
            dispatch({ type: 'ADD', item: { id: '3', name, price: 2.99 } });
        }
    }
}

const ReduxApp = connect(null, dispatchToProps)(App);

export default ReduxApp;
