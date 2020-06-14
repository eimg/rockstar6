import React, { useEffect } from 'react';
import List from './List';
import { connect } from 'react-redux';

const api = 'http://localhost:8000/tasks';

const App = ({ add, set }) => {
    let name = React.createRef();

    useEffect(() => {
        set();
    }, []);

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
            fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, price: 0 })
            }).then(res => res.json()).then(item => {
                dispatch({ type: 'ADD', item });
            });
        },
        set: () => {
            fetch(api).then(res => res.json()).then(items => {
                dispatch({ type: 'SET', items });
            });
        }
    }
}

const ReduxApp = connect(null, dispatchToProps)(App);

export default ReduxApp;
