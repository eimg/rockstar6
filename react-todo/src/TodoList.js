import React from 'react';
import Item from './Item';

const TodoList = ({ items, remove, toggle }) => (
    <ul>
        {items.map(item => (
            <Item
                key={item.id}
                item={item}
                remove={remove}
                toggle={toggle}
            />
        ))}
    </ul>
);

export default TodoList;
