import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// route components
import MainPage from './components/MainPage/MainPage';
import ContentPage from './components/ContentPage/ContentPage';

// wrap each component with layout
// layout adds topnav for each component
import Layout from './components/Layout/Layout';
// Main page
const Main = (props) => <Layout><MainPage {...props} /></Layout>
// Content page
const Content = (props) => <Layout><ContentPage {...props} /></Layout>

const Routes = () => {

    return (
        <Router>

            <Switch>
                <Route exact path="/" render={(props) => (<Main {...props} />)} />
                <Route path="/page/:page" render={(props) => (<Content {...props} />)} />
            </Switch>

        </Router>
    )

}

export default Routes;