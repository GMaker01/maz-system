import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Common Pages
const Home = React.lazy(() => import('pages/home'));

export default () => {
    return (
        <Switch>
            {/* Public Routes */}
            <Route path="/home" component={Home} />
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            {/* Public Routes */}

            <Route exact path="*">
                <Redirect to="/home" />
            </Route>
        </Switch>
    );
}
