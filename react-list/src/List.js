import React from "react";
import ListUI from "@material-ui/core/List";
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

export default List;
