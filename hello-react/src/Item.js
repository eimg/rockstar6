import React from "react";

class Item extends React.Component {
    render() {
        const { _id, name, price } = this.props.item;
        return (
            <li>
                {name} (${price})
                <a href="/#" onClick={this.props.remove(_id)}>&times;</a>
            </li>
        );
    }
}

export default Item;
