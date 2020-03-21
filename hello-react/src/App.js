import React from "react";
import Item from "./Item";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [
                { _id: 1, name: "Apple", price: 2.99 },
                { _id: 2, name: "Orange", price: 1.99 },
                { _id: 3, name: "Mango", price: 1.49 },
            ]
        }

        this.input = React.createRef();
        this.add = this.add.bind(this);
    }

    add() {
        this.setState({
            data: [
                ...this.state.data,
                { _id: 4, name: this.input.current.value, price: 0.99 }
            ]
        });

        this.input.current.value = "";
        this.input.current.focus();
    }

    remove = _id => () => {
        this.setState({
            data: this.state.data.filter(item => item._id !== _id)
        });
    }

    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <ul>
                    {this.state.data.map(item => {
                        return (
                            <Item
                                key={item._id}
                                item={item}
                                remove={this.remove}
                            />
                        )
                    })}
                </ul>
                <input type="text" ref={this.input} />
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
}

export default App;
