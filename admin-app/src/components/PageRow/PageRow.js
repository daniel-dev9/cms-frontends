import React from 'react';
import styles from './PageRow.module.css';

// localization component
import { FormattedMessage } from 'react-intl'


// Shows an overview of a page content
const PageRow = ({ id, headTitle, textTitle, handlers }) => {

    return (
        <div className={styles.pageRowWrapper}>

            <div className={styles.contentWrapper}>
                <div className={styles.headTitle}>
                    {headTitle}
                </div>
                <div className={styles.textTitle}>
                    {textTitle}
                </div>
            </div>

            <div className={styles.actions}>
                <button className="edit" onClick={() => handlers.edit(id)}>
                    <FormattedMessage id="row.edit.btn" defaultMessage="Edit" />
                </button>

                <button className="danger" onClick={() => handlers.remove(id)}>
                    <FormattedMessage id="row.remove.btn" defaultMessage="Remove" />
                </button>
            </div>

        </div>
    );

}

export default PageRow;
