import React from 'react';

const Item = ({ item, remove, toggle }) => (
    <li>
        <input type="checkbox" checked={item.status} onChange={() => {
            toggle(item.id);
        }} />
        { item.name }
        <a href="#/" onClick={() => {
            remove(item.id);
        }}>&times;</a>
    </li>
);

export default Item;
