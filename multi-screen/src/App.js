import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';

const App = () => {
    const [drawer, setDrawer] = React.useState(false);
    const [bottomNav, setBottomNav] = React.useState(false);

    const showDrawer = () => {
        setDrawer(true);
    };

    const hideDrawer = () => {
        setDrawer(false);
    };

    return (
        <div>
            <Drawer open={drawer} onClose={hideDrawer}>
                <div style={{height: 160, background: '#ccc'}}></div>
                <div onClick={hideDrawer} onKeyDown={hideDrawer}>
                    <List style={{width: 280}}>
                        <ListItem button="button">
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <ListItem button="button">
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sent Mail" />
                        </ListItem>
                        <ListItem button="button">
                            <ListItemIcon>
                                <MailIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>

            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={showDrawer}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                </Toolbar>
            </AppBar>

            <div>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar><MailIcon /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="React book pre-order" secondary="Jan 9, 2020" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar><MailIcon /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="I want Laravel book PDF" secondary="Jan 9, 2020" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar><MailIcon /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="When Professional Web Developer ..." secondary="Jan 9, 2020" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar><MailIcon /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="React book pre-order" secondary="Jan 9, 2020" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar><MailIcon /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="I want Laravel book PDF" secondary="Jan 9, 2020" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar><MailIcon /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="When Professional Web Developer ..." secondary="Jan 9, 2020" />
                    </ListItem>
                </List>
            </div>

            <BottomNavigation
                style={{position: 'absolute', bottom: 0, width: '100%'}}
                value={bottomNav}
                onChange={(event, newValue) => {
                    setBottomNav(newValue);
                }}
                showLabels
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>

        </div>
    );
}

export default App;
