import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckboxBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckboxIcon from "@material-ui/icons/CheckBox";

const styles = {
    done: {
        textDecoration: 'line-through',
        color: 'gray'
    }
};

const Item = ({ item, remove, toggle }) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar onClick={toggle(item._id)}>
                    {
                        item.status
                        ? <CheckboxIcon />
                        : <CheckboxBlankIcon />
                    }
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} />
            <ListItemSecondaryAction onClick={remove(item._id)}>
                <DeleteIcon />
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Item;
