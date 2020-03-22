const redux = require('redux');

const store = redux.createStore((state = [], action) => {
    switch(action.type) {
        case 'ADD': return [ ...state, { name: action.name } ];
        case 'DEL': return state.filter(i => i.name !== action.name);
        default: return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ type: 'ADD', name: 'Bob' });
store.dispatch({ type: 'ADD', name: 'Alice' });
store.dispatch({ type: 'DEL', name: 'Bob' });
store.dispatch({ type: 'ADD', name: 'Tom' });
