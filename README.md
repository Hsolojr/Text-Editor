# Text Editor Web Application

## Description

This text editor web application allows developers to create and store notes or code snippets seamlessly, with or without an internet connection. The application is designed to ensure reliability in retrieving and managing these notes for later use.

## User Story

As a developer, I want to create notes or code snippets so that I can reliably retrieve them for later use, regardless of my internet connection.

## Acceptance Criteria

### Setup

- **Given** a text editor web application,
- **When** I open my application in my editor,
- **Then** I should see a client-server folder structure.

### Backend and Client Startup

- **When** I run `npm run start` from the root directory,
- **Then** my application should start up the backend and serve the client.

### Webpack Integration

- **When** I run the text editor application from my terminal,
- **Then** my JavaScript files should be bundled using webpack.
- **When** I run my webpack plugins,
- **Then** I should have a generated HTML file, service worker, and a manifest file.

### Next-Gen JavaScript Support

- **When** I use next-gen JavaScript in my application,
- **Then** the text editor should still function in the browser without errors.

### IndexedDB Integration

- **When** I open the text editor,
- **Then** IndexedDB should immediately create a database storage.
- **When** I enter content and subsequently click off the DOM window,
- **Then** the content in the text editor should be saved with IndexedDB.
- **When** I reopen the text editor after closing it,
- **Then** the content in the text editor should be retrieved from IndexedDB.

### Install and Desktop Icon

- **When** I click on the Install button,
- **Then** I should download my web application as an icon on my desktop.

### Service Worker and Workbox

- **When** I load my web application,
- **Then** I should have a registered service worker using Workbox.
- **When** I register a service worker,
- **Then** my static assets should be precached upon loading, along with subsequent pages and static assets.

# Your Text Editor Application

Follow these steps to set up and run the text editor application:

1. Pull and clone this branch.
2. Run `npm i` to install necessary packages.
3. Start the application by typing `npm start` into your console.

Access the application by clicking [here](https://texteditorapplication-8182994e6598.herokuapp.com/Links).

## License

This project is licensed under the [MIT License](LICENSE.md).