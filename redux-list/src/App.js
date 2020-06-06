import React from 'react';
import List from './List';
import { connect } from 'react-redux';

class App extends React.Component {
    name = React.createRef();

    render() {
        return (
            <div>
                <h1>Redux List</h1>
                <List />
                <input type="text" ref={this.name} />
                <button onClick={() => {
                        this.props.add(this.name.current.value);
                    }}>+</button>
            </div>
        );
    }
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
