import React from 'react';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

const DraftContent = props => {
    return (
        <div>
            <List
                subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    DRAFT
                </ListSubheader>
            }>
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
    )
};

export default DraftContent;
