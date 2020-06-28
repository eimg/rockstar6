import React from 'react';

import { useParams } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

const FilterContent = props => {
    const { filter } = useParams();
    return (
        <div>
            <List
                subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    { filter.toUpperCase() }
                </ListSubheader>
            }>
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

export default FilterContent;
