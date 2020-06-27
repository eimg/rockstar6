import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const App = () => {
    const [state, setState] = React.useState(false);

    const showDrawer = () => {
        setState(true);
    };

    const hideDrawer = () => {
        setState(false);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={showDrawer}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                <Drawer open={state} onClose={hideDrawer}>
                    <div onClick={hideDrawer} onKeyDown={hideDrawer}>
                        <List style={{width: 260}}>
                            {
                                ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                    <ListItem button="button" key={text}>
                                        <ListItemIcon>{
                                                index % 2 === 0
                                                    ? <InboxIcon/>
                                                    : <MailIcon/>
                                            }</ListItemIcon>
                                        <ListItemText primary={text}/>
                                    </ListItem>
                                ))
                            }
                        </List>
                        <Divider/>
                        <List>
                            {
                                ['All mail', 'Trash', 'Spam'].map((text, index) => (
                                    <ListItem button="button" key={text}>
                                        <ListItemIcon>{
                                                index % 2 === 0
                                                    ? <InboxIcon/>
                                                    : <MailIcon/>
                                            }</ListItemIcon>
                                        <ListItemText primary={text}/>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                </Drawer>
            </AppBar>
        </div>
    );
}

export default App;
