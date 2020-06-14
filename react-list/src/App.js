import React from "react";
import NewItem from "./NewItem";
import Header from "./Header";
import List from "./List";

const api = 'http://localhost:8000/tasks';

class App extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        fetch(api).then(res => res.json()).then(items => {
            this.setState({ items });
        });
    }

    add = (name) => {
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price: 0 })
        }).then(res => res.json()).then(item => {
            this.setState({
                items: [ ...this.state.items, item ]
            });
        });
    }

    remove = (_id) => () => {
        fetch(`${api}/${_id}`, { method: 'DELETE' });

        this.setState({
            items: this.state.items.filter(i => i._id !== _id)
        });
    }

    toggle = (_id) => () => {
        fetch(`${api}/${_id}`, { method: 'PATCH' });

        this.setState({
            items: this.state.items.map(item => {
                if(item._id === _id) {
                    item.status = +!item.status;
                }

                return item;
            })
        })
    }

    clear = () => {
        fetch(api, { method: 'DELETE' });

        this.setState({
            items: this.state.items.filter(i => i.status === 0)
        });
    }

    render() {
        return (
            <div>
                <Header
                    clear={this.clear}
                    count={this.state.items.filter(i => i.status === 0).length} />

                <NewItem add={this.add} />

                <List
                    items={this.state.items.filter(i => i.status === 0)}
                    remove={this.remove}
                    toggle={this.toggle}
                />
                <List
                    items={this.state.items.filter(i => i.status === 1)}
                    remove={this.remove}
                    toggle={this.toggle}
                />
            </div>
        )
    }
}

export default App;
