// src/App.js
const List = props => (
    <ul>
        {props.items.map(i => <li>{i.name}</li>)}
    </ul>
);

const items = [
    { name: 'Apple' },
    { name: 'Orange' },
    { name: 'Banana' },
];

ReactDOM.render(
    <List items={items} />,
    document.getElementById("app")
);
