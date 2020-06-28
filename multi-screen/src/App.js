import React from 'react';

import Header from './Header';
import Drawer from './Drawer';
import Nav from './Nav';
import InboxContent from './InboxContent';
import SentContent from './SentContent';
import DraftContent from './DraftContent';
import FilterContent from './FilterContent';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    const [drawer, setDrawer] = React.useState(false);
    const showDrawer = () => setDrawer(true);
    const hideDrawer = () => setDrawer(false);

    return (
        <Router>
            <div>
                <Drawer drawer={drawer} hideDrawer={hideDrawer} />
                <Header showDrawer={showDrawer} />
                <Switch>
                    <Route path="/inbox" exact><InboxContent /></Route>
                    <Route path="/inbox/:filter"><FilterContent /></Route>
                    <Route path="/sent"><SentContent /></Route>
                    <Route path="/draft"><DraftContent /></Route>
                </Switch>
                <Nav />
            </div>
        </Router>
    );
}

export default App;
