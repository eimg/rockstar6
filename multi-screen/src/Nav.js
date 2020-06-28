import React from 'react';

import { Link } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Nav = props => {
    return (
        <BottomNavigation style={{position: 'absolute', bottom: 0, width: '100%'}}>
            <Link to="/inbox/recent">
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            </Link>
            <Link to="/inbox/favorite">
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            </Link>
            <Link to="/inbox/nearby">
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </Link>
        </BottomNavigation>
    )
}

export default Nav;
