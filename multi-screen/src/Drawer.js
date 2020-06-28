import React from 'react';

import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const MyDrawer = props => {
    return (
        <Drawer open={props.drawer} onClose={props.hideDrawer}>
            <div style={{height: 160, background: '#ccc'}}></div>
            <div onClick={props.hideDrawer} onKeyDown={props.hideDrawer}>
                <List style={{width: 280}}>
                    <ListItem button="button">
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <Link to='/inbox'>
                            <ListItemText primary="Inbox" />
                        </Link>
                    </ListItem>
                    <ListItem button="button">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <Link to='/sent'>
                            <ListItemText primary="Sent Mail" />
                        </Link>
                    </ListItem>
                    <ListItem button="button">
                        <ListItemIcon>
                            <MailIcon/>
                        </ListItemIcon>
                        <Link to='/draft'>
                            <ListItemText primary="Drafts" />
                        </Link>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
}

export default MyDrawer;
