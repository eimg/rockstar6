import React from 'react';

const Item = ({ item, remove, toggle }) => (
    <li>
        <input type="checkbox" checked={item.status} onChange={() => {
            toggle(item._id);
        }} />
        { item.name }
        <a href="#/" onClick={() => {
            remove(item._id);
        }}>&times;</a>
    </li>
);

export default Item;
