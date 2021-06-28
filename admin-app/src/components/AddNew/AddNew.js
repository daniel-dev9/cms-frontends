import React from 'react';
import styles from './AddNew.module.css';

// localization component
import { FormattedMessage } from 'react-intl';

// hooks & libs
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useHistory } from 'react-router';

// other
import { post } from '../../services/Api';

// component for adding new page
const AddNew = () => {

    const [imgSrc, setImgSrc] = useState({ img_1: {}, img_2: {}, img_3: {} });
    const history = useHistory();

    // form initial state
    const initialValues = {
        url: '',
        head_title: '',
        head_description: '',
        text_title: '',
        text_paragraph: '',
    }

    // handle edit form submit with formData object
    const handleSubmit = async (values) => {
        console.log('submitting!', values);

        // create the PUT formdata object
        const formdata = createPostData(values);

        // PUT the updates
        try {
            const res = await post('/admin/page', { body: formdata });
            console.log('Page added: ', res);
        } catch (e) {
            console.error(e);
            alert(e);
        }

        // if success go back to overview
        history.push('/');
    }

    // create formdata to be sent over to the server
    const createPostData = (values) => {
        const formdata = new FormData();

        // if no new image is selected do not append it
        // add new images to photos key as an array
        for (const val of Object.values(imgSrc)) {
            if (val.url === '') continue;
            formdata.append('photos', val.file);
        }

        // check for only updated fields & 
        // create multipart formData object
        for (const [key, val] of Object.entries(values)) {
            // if field value is not updated do not append it
            if (val === initialValues[key]) continue;
            formdata.append(key, val);
        }

        return formdata;
    }

    // update the UI for preview of slected image file
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const url = URL.createObjectURL(file);

        setImgSrc(prev => ({
            ...prev,
            [e.target.name]: { id: e.target.id, url, file }
        }));
    }

    const handleDeleteImg = (img) => {
        const imgObj = imgSrc[img];
        console.log('delete img: ', imgObj);
        if (!imgObj) return alert('Error while deleting image');

        setImgSrc(prev => ({ ...prev, [img]: {} }));
    }

    return (
        <div className={styles.addWrapper}>
            <h1><FormattedMessage id="add.title" defaultMessage="Add new" /></h1>

            <Formik
                validateOnMount={true}
                initialValues={initialValues}
                validate={values => {
                    const errors = {};
                    for (const [key, val] of Object.entries(values)) {
                        if (key === 'image' && !val) errors.image = 'Image is required!';
                        if (val === '') errors[key] = 'This field is required!';
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    await handleSubmit(values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, isValid }) => (
                    <Form className={styles.form}>

                        <label htmlFor="url"><FormattedMessage id="edit.url" defaultMessage="URL: " /></label>
                        <Field className={styles.field} type="text" name="url" />
                        <ErrorMessage name="url" component="div" />

                        {/* Images */}
                        <div className={styles.imgContainer}>

                            <div className={styles.imgWrapper}>
                                <label htmlFor="img_1"><FormattedMessage id="edit.image" defaultMessage="Image 1: " /></label>
                                <img src={imgSrc.img_1?.url} alt="img-1"></img>
                                <input type="file" name="img_1" id="img_1" onChange={handleImageChange}></input>
                                {imgSrc.img_1.url ? <button type="button" className="danger" onClick={() => handleDeleteImg('img_1')}>
                                    <FormattedMessage id="row.remove.btn" defaultMessage="Remove" />
                                </button> : ''}
                            </div>

                            <div className={styles.imgWrapper}>
                                <label htmlFor="img_2"><FormattedMessage id="edit.image" defaultMessage="Image 2: " /></label>
                                <img src={imgSrc.img_2?.url} alt="img-2"></img>
                                <input type="file" name="img_2" id="img_2" onChange={handleImageChange}></input>
                                {imgSrc.img_2.url ? <button type="button" className="danger" onClick={() => handleDeleteImg('img_2')}>
                                    <FormattedMessage id="row.remove.btn" defaultMessage="Remove" />
                                </button> : ''}
                            </div>

                            <div className={styles.imgWrapper}>
                                <label htmlFor="img_3"><FormattedMessage id="edit.image" defaultMessage="Image 3: " /></label>
                                <img src={imgSrc.img_3?.url} alt="img-3"></img>
                                <input type="file" name="img_3" id="img_3" onChange={handleImageChange}></input>
                                {imgSrc.img_3.url ? <button type="button" className="danger" onClick={() => handleDeleteImg('img_3')}>
                                    <FormattedMessage id="row.remove.btn" defaultMessage="Remove" />
                                </button> : ''}
                            </div>

                        </div>

                        <label htmlFor="head_title"><FormattedMessage id="edit.head.title" defaultMessage="Head title: " /></label>
                        <Field className={styles.field} type="text" name="head_title" />
                        <ErrorMessage name="head_title" component="div" />

                        <label htmlFor="head_description"><FormattedMessage id="edit.head.desc" defaultMessage="Head description: " /></label>
                        <Field className={styles.field} type="text" name="head_description" />
                        <ErrorMessage name="head_description" component="div" />

                        <label htmlFor="text_title"><FormattedMessage id="edit.text.title" defaultMessage="Text title: " /></label>
                        <Field className={styles.field} type="text" name="text_title" />
                        <ErrorMessage name="text_title" component="div" />

                        <label htmlFor="text_paragraph"><FormattedMessage id="edit.text.paragraph" defaultMessage="Text paragraph: " /></label>
                        <Field as="textarea" className={styles.field} type="text" name="text_paragraph" />
                        <ErrorMessage name="text_paragraph" component="div" />

                        <button className="success" type="submit" disabled={isSubmitting || !isValid}>
                            <FormattedMessage id="add.submit" defaultMessage="Add" />
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );

}

export default AddNew;
