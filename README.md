# Content Management Frontend
This repository contains two frontend client applications built with React.

## Main Directories
This repository contains two main directories.
1. admin-app
2. user-app

### 1. admin-app
This directory comprises with the react app for admin panel. Admin app provides functionalities to manage the page contents of the application.

### 2. user-app
This directory comprises with the react app for user access. Content is displayed as pages & users can read through the content. Main page has links to each page.

Both the apps have added with localization support for 
- English
- French
- Spanish

<br />

---
## Folder structure
Both the apps have been developed adhering to same following structure.

|Directory name|Description|
|--------|-----------|
|`/components`|Contains all the React components which are used in views or as views.|
|`/services`|Utility functions & App context providers.|
|`/lang`|Translation mappings for each language.|
|`./routes.js`|Route configuration for the app.|
|`./constants.js`|Constants which are initialized via env variables. Can add any other constant here for app wide access.|

<br />

---
<span id="env"></span>

## Environment setup 
Setup the following variable(s) in the `.env` file from root of both of the applications before running `npm start`.

- `admin-app/.env`
- `user-app/.env`

|Variable|Description|
|--------|-----------|
|`REACT_APP_API_BASE`|Set this variable to the backend server url with the port number at the end, no trailing slashes. Ex: `http://localhost:8000`|

<br>

# Locally serving the app
- Clone/download the repository.
- Open a terminal window within the `admin-app` directory or `user-app` directory.
- Run `npm i` if not previously run. (This command only need to be run once, this command downloads the necessary dependencies for the application to run)
- Edit/Create the `.env` file & set the variable values with own resources. *[See more above](#env)*
- Run `npm start` - This will serve the app in a development server usually in http://localhost:3000. 


<br/>

# Deploying
- Run `npm run build` from within the app directory which is to be deployed (`admin-app` | `user-app`).
- Deploy/Upload the content from the `/build` directory to the hosting server.

<br/>
<br/>

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
