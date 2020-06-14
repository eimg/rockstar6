import React, { useState, useEffect } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import AddTask from './AddTask';

const api = 'http://localhost:8000/tasks';

const App = props => {
    const [ items, setItem ] = useState([]);

    useEffect(() => {
        fetch(api).then(res => res.json()).then(items => {
            setItem(items);
        });
    }, []);

    const add = name => {
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price: 0 })
        }).then(res => res.json()).then(item => {
            setItem([ ...items, item ]);
        });
    }

    const remove = _id => {
        fetch(`${api}/${_id}`, { method: 'DELETE' });
        setItem(items.filter(i => i._id !== _id));
    }

    const toggle = _id => {
        fetch(`${api}/${_id}`, { method: 'PATCH' });
        setItem(items.map(i => {
            if(i._id === _id) i.status = +!i.status;
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
