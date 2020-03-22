import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import ListIcon from "@material-ui/icons/List";

const Header = ({ count, clear }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Badge badgeContent={count} color="secondary">
                    <ListIcon />
                </Badge>
                <Typography
                    style={{marginLeft: 30, flexGrow: 1}}
                    variant="h6">Todo List</Typography>
                <Button onClick={clear} color="inherit">CLEAR</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
