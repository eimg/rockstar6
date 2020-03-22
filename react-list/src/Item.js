import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
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
            <ListItemIcon onClick={toggle(item._id)}>
                {
                    item.status
                    ? <CheckboxIcon />
                    : <CheckboxBlankIcon />
                }
            </ListItemIcon>
            <ListItemText primary={item.name} />
            <ListItemSecondaryAction onClick={remove(item._id)}>
                <DeleteIcon color="secondary" />
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Item;
