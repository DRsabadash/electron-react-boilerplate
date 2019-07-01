## Boilerplate README

#### About:

This is a boilerplate for creating electron applications, leveraging react, redux, and react-router.
Everything is pre-configured to load off of a client server with live updating in development mode, or off of a static HTML file in production mode.
This allows for easy distribution of a built application with a minified source, and optimized performance with no overhead of running a client server.

#### Main Stack:

- Electron
- React
- Redux
- express (Development)

bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Developed By:

David Sabadash

#### React boilerplate code by:
Brendan Walker & Jiawei Wu

---
### DEVELOPMENT

There are multiple options for development. This can be run and developed the traditional way using a browser window,
but the recommended way is with npm run electron-dev 

##### Setup commands:

`npm run electron`
- *ceates an electron window*
- *tries to load './build/index.html by default*
- *will not load anything if build has never been called*

`npm run build`
- *builds application into a single folder with condensed sourcecode*
- *entrypoint for application is ./build/index.html*
- *this is the original create-react-app build command*

##### Browser development:

`npm start || npm run start`

- *App is running at localhost:3000*
- *used for browser development mode*
- *Hot reloading is enabled*
- *`npm run electron` can be used at any time to open an electron window connected to the app (simultaneous browser / electron development windows)*

##### Electron development:

`npm run electron-dev`

- *App is accessed from localhost:3000*
- *used for electron development mode*
- *browser window auto open is disabled, but can still be accessed through a browser manually unless craco.config.js is overriding webpack*
- *using craco.config breaks browser development for some reason*
- *Hot reloading is enabled*
- *closing the electron window automatically shuts down the client server*

`npm run electron-dev-tools`

- *does all of the above*
- *makes default window size a little larger, installs Redux-devtools, auto opens Developer tools, and composes the store with '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'*


##### Electron build:

`npm run electron-build`

- *App is accessed through a static file*
- *build command is executed to output minified source code*
- *waits until build is finished to open electron container*
- *Hot reloading is DISABLED*
- *Used to simultaneously re-build and run the application*

`npm run electron-prod`

- *Only opens an electron window pointed at ./build/index.html*
- *assumes code has been pre-built*
- *Hot reloading is DISABLED*
- *Used to run a container pointed at the production file destination without rebuilding the app from source*

---

### PRODUCTION

#### App packaging:

`npm run pack`

- *bundles all application source into dist folder*
- *creates executable for current host OS*
- *package.json build:{} provides packaging args, asar controls dist source archiving*

`npm run dist`

- *does all of the above*
- *also provides an installer that moves app source to default host program directory*
- *installer will also create a desktop shortcut for the app*

---

## Docs
[Craco](https://github.com/sharegate/craco)
[Electron Build config](https://www.electron.build/configuration/configuration)

---

## GUIDELINES


#### Using Craco:
craco provides build-time hooks into the webpack config without having to eject the react app.
Previously, NPM packages that interact with the host directly (fs, childProcess, etc) were un-usable
due to the pseudo 'containerization' of react. In essence, the react app has no knowledge of either the
Electron container it is in, or Nodejs itself due to Electron's render process. Craco allows bridging the gap
between React and Electron by setting a webpack config target. React can then interact with the Electron wrapper
through the ipcRenderer->ipcMain event loop, which in turn can interact with Nodejs/host operating system from it's
main process. This also allows access to the BrowserWindow object, allowing things such as window resizing,
opening devTools, and other electron window related actions from within React.
As a bonus, it now also supports ES6 syntax for importing electron within react! 
```
import Electron from 'electron';

const BrowserWindow = Electron.BrowserWindow.remote.getCurrentWindow()
const ipcRenderer = Electron.ipcRenderer
```
Previous workaround: (breaks some importing in other files, requiring both import and require statements in files)
```
const { Electron } = window.require('electron');
```
or
```
const { ipcRenderer } = window.require('electron').ipcRenderer;
```

#### Files/Components:

- Consistent file naming scheme
i.e. Home.js -> HomeSidebar.js -> HomeFooter.js

- Containers (i.e. Home.js) contain logic and state (connect to redux) and pass props to sub components (i.e. HomeSidebar.js)

- Put reusable components in one folder in components folder: components -> common -> Countdown.js, GoogleMap.js, etc.

- Component classes are named the same as the files in which they are contained
i.e. Nav.js -> ```class Nav extends Component {...}```

- Organize imports in all files - modules at top, components below modules
- Mixed/named imports first, default imports second
- *@/someAppRootLevelDir/someFile* format
- ./SomeFile for local files

i.e. (in order) 

~~~
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { NonDefaultExport } from '@/components/SomeComponent';
import * as Routes from '@/constants/routes';
import Sidebar from './Sidebar';
etc
~~~

- Lifecycle methods right underneath constructor

i.e. (in order) 

~~~
constructor() {...}
componentDidMount() {...}
handleSubmit() {...}
etc
~~~

---

## Planned features
- Integrating Jest unit testing
