import React from 'react';
import styles from './TopNav.module.css';

// localization component
import { FormattedMessage } from 'react-intl'

// Hooks & libs
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useContext } from 'react';

// other
import { Context } from '../../services/ConfigProvider';

const TopNav = () => {

    const location = useLocation();
    const context = useContext(Context);

    return (
        <div className={styles.navWrapper}>

            <div className={styles.breadcrumbs}>
                <Link to="/" replace><FormattedMessage id="topnav.head" defaultMessage="Home" /></Link>
                <Link to={location.pathname} replace>{location.pathname}</Link>
            </div>

            <div>
                <select onChange={(e) => context.selectLang(e.target.value)} defaultValue={context.locale}>
                    <option value="en">English</option>
                    <option value="fr">français</option>
                    <option value="sp">Español</option>
                </select>
            </div>

        </div>
    );

}

export default TopNav;