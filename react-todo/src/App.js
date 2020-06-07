import React, { useState } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import AddTask from './AddTask';

const App = props => {
    const [ items, setItem ] = useState([
        { id: 1, name: "Egg", status: 0 },
        { id: 2, name: "Milk", status: 0 },
        { id: 3, name: "Bread", status: 1 },
    ]);

    const add = name => {
        const id = items[items.length - 1].id + 1;
        setItem([ ...items, { id, name, status: 0 } ]);
    }

    const remove = id => {
        setItem(items.filter(i => i.id !== id));
    }

    const toggle = id => {
        setItem(items.map(i => {
            if(i.id === id) i.status = +!i.status;
            return i;
        }));
    }

    return (
        <div>
            <Header count={items.filter(i => i.status === 0).length} />
            <TodoList
                items={items.filter(i => i.status === 0)}
                remove={remove}
                toggle={toggle}
            />
            <TodoList
                items={items.filter(i => i.status === 1)}
                remove={remove}
                toggle={toggle}
            />
            <AddTask add={add} />
        </div>
    );
}

export default App;
