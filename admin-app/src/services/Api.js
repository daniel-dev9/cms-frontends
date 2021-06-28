import constants from '../constants';

const API_BASE = constants.API_BASE;

/**
 * GET request
 * @param {string} url 
 * @param {object} options 
 * @returns - object
 */
export const get = async (url, options = {}) => {
    const response = await fetch(`${API_BASE}${url}`, {
        ...options,
        method: 'GET'
    });
    if (response.ok)
        return response.json();

    const message = await response.text();
    throw new Error(message);
}

/**
 * POST request,
 * Request body could be `Json | string | FormData`
 * Content type header should be set manually to `application/json` for a JSON payload.
 * @param {string} url 
 * @param {object} options 
 * @returns - object
 */
export const post = async (url, options = {}) => {
    console.log('POST op: ', options);
    const response = await fetch(`${API_BASE}${url}`, {
        headers: { ...options.headers },
        ...options,
        body: options.body,
        method: 'POST'
    });

    if (response.ok)
        return response.json();

    const message = await response.text();
    throw new Error(message);
}

/**
 * PUT request,
 * Request body could be `Json | string | FormData`
 * Content type header should be set manually to `application/json` for a JSON payload.
 * @param {string} url 
 * @param {object} options 
 * @returns - object
 */
export const put = async (url, options = {}) => {
    console.log('PUT op: ', options);
    const response = await fetch(`${API_BASE}${url}`, {
        headers: { ...options.headers },
        ...options,
        body: options.body,
        method: 'PUT'
    });

    if (response.ok)
        return response.json();

    const message = await response.text();
    throw new Error(message);
}

/**
 * DELETE request
 * @param {string} url 
 * @param {object} options 
 * @returns - object
 */
export const del = async (url, options = {}) => {
    const response = await fetch(`${API_BASE}${url}`, {
        ...options,
        method: 'DELETE'
    });
    if (response.ok)
        return response.json();

    const message = await response.text();
    throw new Error(message);
}