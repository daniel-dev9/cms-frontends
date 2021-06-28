import React from 'react';
import styles from './MainPage.module.css';

// localization component
import { FormattedMessage } from 'react-intl'

// hooks & libs
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';

// other
import { get } from '../../services/Api';

// Component for showing user main view
const MainPage = () => {

    const [pages, setPages] = useState([]);
    const history = useHistory();

    // get the availble pages
    const getPages = async () => {
        // call API & get data
        console.log('Fetching new data: Main page');
        try {
            const results = await get('/page');
            setPages(results);
        } catch (e) {
            console.error(e);
            alert(e);
        }
    }

    useEffect(() => {
        getPages();
    }, []);

    return (
        <div className={styles.mainWrapper}>

            <h1><FormattedMessage id="main.header" defaultMessage="Main Page" /></h1>

            <div className={styles.buttonWrapper}>
                {pages.map((page, index) =>
                    <button key={page.id} onClick={() => history.push(`/page/${page.id}`)}>{index}</button>)}
            </div>

        </div>
    )

}

export default MainPage;


