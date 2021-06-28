import React from 'react';
import styles from './Layout.module.css';

// TopNav is always visible in the view
import TopNav from '../TopNav/TopNav';

// Component which wraps the TopNav & other components
// to render the views
const Layout = ({ children }) => {

    return (
        <>
            <TopNav />
            {children}
        </>
    )

}

export default Layout;