import React from 'react';
import styles from './Overview.module.css';

// Components
import PageRow from '../PageRow/PageRow';

// localization component
import { FormattedMessage } from 'react-intl'

// hooks
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

// other
import { get, del } from '../../services/Api';

const Overview = () => {

    const [overviews, setOverviews] = useState([]);
    const history = useHistory();

    const getOverviews = async () => {
        // call API & get data
        console.log('Fetching new data: overview');
        try {
            const results = await get('/admin/page');
            setOverviews(results);
        } catch (e) {
            console.error(e);
            alert(e);
        }
    }

    useEffect(() => {
        getOverviews();
    }, []);

    // handlers for CRUD ops
    const handleEdit = (id) => {
        console.log('Edit', id);
        const overview = overviews.find(o => o.id === id);
        if (!overview) return alert('No existing item found for this ID');

        history.push(`/edit/${id}`);
    }

    //  remove page functionality
    const handleRemove = async (id) => {
        console.log('Remove', id);
        if (!window.confirm('Are you sure to delete this page?')) return;
        try {
            const results = await del(`/admin/page/${id}`);
            console.log(results);

            // remove the deleted overview from the state cache
            setOverviews(prev => prev.filter(o => o.id !== id));
            alert(results.message || 'Successfully deleted page!');
        } catch (e) {
            console.error(e);
            alert(e);
        }
    }

    // add page funcitonality
    const handleAdd = () => {
        history.push('/add');
    }

    return (
        <>
            <div className={styles.adminHeader}>
                <h1><FormattedMessage id="overview.header" defaultMessage="Admin" /></h1>
                <button className={styles.addnew} onClick={handleAdd}>
                    <FormattedMessage id="overview.add.new" defaultMessage="Add new" />
                </button>
            </div>
            <div className={styles.overviewWrapper}>

                {overviews.map(overview =>
                    <PageRow key={overview.id}
                        id={overview.id}
                        headTitle={overview.head_title}
                        textTitle={overview.text_title}
                        handlers={{ edit: handleEdit, remove: handleRemove }} />
                )}

            </div>
        </>
    );

}

export default Overview;
