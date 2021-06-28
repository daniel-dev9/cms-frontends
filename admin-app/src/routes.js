import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// route components
import Overview from './components/Overview/Overview';
import Edit from './components/Edit/Edit';
import AddNew from './components/AddNew/AddNew';

// wrap each component with layout
// layout adds topnav for each component
import Layout from './components/Layout/Layout';
// Overview
const OverviewPage = (props) => <Layout><Overview {...props} /></Layout>
// Edit pages
const EditPage = (props) => <Layout><Edit {...props} /></Layout>
// Add pages
const AddPage = (props) => <Layout><AddNew {...props} /></Layout>

const Routes = () => {

    return (
        <Router>

            <Switch>
                <Route exact path="/" render={(props) => (<OverviewPage {...props} />)} />
                <Route path="/edit/:page" render={(props) => (<EditPage {...props} />)} />
                <Route path="/add" render={(props) => (<AddPage {...props} />)} />
            </Switch>

        </Router>
    )

}

export default Routes;