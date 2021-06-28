import React from 'react';
import styles from './TopNav.module.css';

// localization component
import { FormattedMessage } from 'react-intl';

// Hooks & libs
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router';
import { useContext } from 'react';

// other
import { Context } from '../../services/ConfigProvider';

const TopNav = () => {

    const location = useLocation();
    const { page } = useParams();
    const context = useContext(Context);

    // render topnav back button & header name based on the admin view
    const renderTopnavHeader = () => {
        if (location.pathname === '/')
            return <FormattedMessage id="nav.title.overview" defaultMessage="Overview" />;

        // if currently on editing/add page, show back button & update the header
        if (location.pathname === '/add')
            return (
                <>
                    <Link to="/" replace><FormattedMessage id="nav.back" defaultMessage="Back" /></Link>
                    <h2><FormattedMessage id="nav.title.add" defaultMessage="Add page" /></h2>
                </>)

        // else in editpage
        return (
            <>
                <Link to="/" replace><FormattedMessage id="nav.back" defaultMessage="Back" /></Link>
                <h2><FormattedMessage id="nav.title.edit" defaultMessage="Edit page" /> {page}</h2>
            </>)
    }

    const handleLangChange = (e) => {
        e.preventDefault();
        const lang = e.target.value;
        context.selectLang(lang);
    }

    return (
        <div className={styles.navWrapper}>

            <div className={styles.breadcrumbs}>
                {renderTopnavHeader()}
            </div>

            <div>
                <select onChange={(e) => handleLangChange(e)} defaultValue={context.locale}>
                    <option key="en" value="en">English</option>
                    <option key="fr" value="fr">français</option>
                    <option key="sp" value="sp">Español</option>
                </select>
            </div>

        </div>
    );

}

export default TopNav;