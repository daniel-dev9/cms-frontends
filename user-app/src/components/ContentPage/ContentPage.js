import React from 'react';
import styles from './ContentPage.module.css';

//  hooks & libs
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { get } from '../../services/Api';

//  Component which displays the Page contents for subpages
const ContentPage = () => {

    // load page content basedd on the route path variable
    let { page } = useParams();

    // initial page state
    const [content, setContent] = useState({});
    const [loading, setLoading] = useState(true);

    // get data for the current page
    const getPageData = async () => {
        try {
            setLoading(true);
            const res = await get(`/page/${page}`);
            console.log(res);
            setContent(res);
        } catch (e) {
            console.error(e);
            alert(e);
        }
        setLoading(false);
    }

    // get new page data once for each page id when visited
    useEffect(() => {
        getPageData();
    }, []);

    return (
        <div className={styles.pageWrapper}>

            {/* Render the page content after retreived from the API */}
            {loading ? '' : <>
                <div className={`${styles.contentRow} ${styles.url}`}>
                    {content.url}
                </div>
                <div className={`${styles.contentRow} ${styles.heroImage}`}>
                    <img src={content.images[0]?.url} alt="Hero" />
                </div>
                <div className={`${styles.contentRow} ${styles.headTitle}`}>
                    {content.head_title}
                </div>
                <div className={`${styles.contentRow} ${styles.headDescription}`}>
                    {content.head_description}
                </div>
                <div className={`${styles.contentRow} ${styles.textTitle}`}>
                    {content.text_title}
                </div>

                {/* other images */}
                <div className={styles.contentRow}>
                    {content.images.slice(1).map(img => <img src={img.url} alt="alt img" />)}
                </div>

                <div className={`${styles.contentRow} ${styles.textParagraph}`}>
                    <p>
                        {content.text_paragraph}
                    </p>
                </div></>}

        </div>
    )

}


export default ContentPage;