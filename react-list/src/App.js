import React from "react";
import NewItem from "./NewItem";
import Header from "./Header";
import List from "./List";

class App extends React.Component {
    state = {
        items: [
            { _id: 1, name: 'Egg', status: 1 },
            { _id: 2, name: 'Milk', status: 0 },
            { _id: 3, name: 'Bread', status: 0 },
            { _id: 4, name: 'Butter', status: 0 },
        ]
    }

    add = (name) => {
        this.setState({
            items: [
                ...this.state.items,
                { _id: 3, name, status: 0 }
            ]
        });
    }

    remove = (_id) => () => {
        this.setState({
            items: this.state.items.filter(i => i._id !== _id)
        });
    }

    toggle = (_id) => () => {
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
