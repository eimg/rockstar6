import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ListUI from "@material-ui/core/List";
import ListIcon from "@material-ui/icons/List";
import Item from "./Item";

const List = ({items, remove, toggle}) => {
    return (
        <ListUI>
            {items.map(item => {
                return (
                    <Item
                        key={item._id}
                        remove={remove}
                        item={item}
                        toggle={toggle}
                    />
                )
            })}
        </ListUI>
    );
}

class App extends React.Component {
    state = {
        items: [
            { _id: 1, name: 'Egg', status: 1 },
            { _id: 2, name: 'Milk', status: 0 },
            { _id: 3, name: 'Bread', status: 0 },
            { _id: 4, name: 'Butter', status: 0 },
        ]
    }

    textbox = React.createRef();

    add = () => {
        this.setState({
            items: [
                ...this.state.items,
                { _id: 3, name: this.textbox.current.value, status: 0 }
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

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Badge badgeContent={this.state.items.filter(i => i.status === 0).length} color="secondary">
                            <ListIcon />
                        </Badge>
                        <Typography
                            style={{marginLeft: 20}}
                            variant="h6">Todo List</Typography>
                    </Toolbar>
                </AppBar>

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
                <input type="text" ref={this.textbox} />
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default App;
