import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore((state = [], action) => {
    switch(action.type) {
        case 'ADD':
            return [ ...state, action.item ];
        case 'DEL':
            return state.filter(i => i.id !== action.id);
        default:
            return state;
    }
});

store.dispatch({ type: 'ADD', item: { 'id': '1', 'name': 'Apple', 'price': 3.99 } });
store.dispatch({ type: 'ADD', item: { 'id': '2', 'name': 'Orange', 'price': 2.99 } });

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
