# StudioFX

Table Of Content

- [Overview](#overview)
- [UX](#ux)
- [Contributing](#contributing)
- [Tech used](#tech-used)
- [Features](#features)
- [License](#license)
- [Credits](#credits)

## Overview

**_Live preview_** :
[githup pages](https://gareths3.github.io/studiofx/)  

### What is it for ?

To present the Studio's portfolio to potential client as much as new talents willing to join the team in its growth.

### What does it do ?

The website should showcase StudioFX's gallery, present the team and the services they provide.
While portfolio are best shown on desktop displays, the mobile first approach insures the targeted users can access what they are looking for from any devices.

## UX

The website has been designed to respond to the following scenarios:

- As a client, I want to check previous work to estimate the outcome quality of my project with StudioFX should they match the service required.
	- To satisfy this demand, the video sampling previous work is present on the landing page.
	- The gallery is accessible from landing page. Priority is given to media visibility over text content. It pictures the full range of services and skills provided while a sub-menu filters diverse types of projects.
	- A basic presentation of the Studio and the core team members is provided to give a feel of how they work and how they interact in collaborative projects with their clients.
	- A basic contact page provides a form to quickly send a customized query.

- As a partner or regular client I want to check StudioFX’s latest news and activity.
	- Social links are displayed at all times as a persistent fixed footer.
	- Having the text content separated from the gallery on external platforms raises the flexibility to interact with professional network while reducing the maintenance for the website.

- As a digital artist and employee, I want to investigate on potential talent need of StudioFX.
	- The overall gallery directly shows the variety of projects on which StudioFX has been involved.
	- Text content on external social network platform also gives the possibility to promote StudioFX production environment and team behavior.

### Wireframes

Wireframes (along with few drafts) are visible in [this directory](./wireframes/).

## Contributing

### Getting the code up and running

1. Firstly you will need to clone this repository by running :
   ```bash
   git clone https://github.com/GarethS3/studiofx.git
   ```
2. Install project’s dependencies :
   ```bash
   npm install
   ```
   _**Node** installation [here](https://nodejs.org/en/)_
3. Start local server :
   ```bash
   npm run start
   ```
This will execute `http-server` using ` -c-1 ` flags will disable the cache.
The project will now run at [localhost:8080](http://127.0.0.1:8080) with any web browser.

### The Testing framework

#### Unit Testing

The Unit Tests are run in Firefox 64.0, Chrome 71.0 and Opera 57.0 using Karma testing framework.

You can run the tests using local config:
```bash
npm run unittest
```

Check configuration and tested scripts in `gulpfile.js` and `karma.conf.js`, in project root directory.  
_To test in additional browsers you will need to check for their [Karma launcher](https://npmjs.org/browse/keyword/karma-launcher) and add them in the ` karma.conf.js ` file_.

#### End-to-End Testing

These End-to-End tests are executed in Firefox 64.0 and Chrome 71.0 running Selenium server and Protactor.

_You need [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) to be installed on your computer to run **Selenium Server** locally._

To simply run the tests with local config :
```bash
npm run e2etest
```
This will run the tests with local installation of Webdriver-manager and Protractor after updating the drivers. Should it fails in the 5s delay (which you can change in package.json), you may have to update them running: ```npm run webdriver```.
Once the selenium driver is running on port 4444 you can interrupt it and run again ```npm run e2etest``` or run simultaneously ```npm run protractor```.

Check configuration in `protractor.conf.js` in project root directory.

## Tech used

### Main tech used:

- [AngularJS](https://angularjs.org/)
	- **AngularJS** is used to handle page routing, build custom directives
- [Bootstrap](http://getbootstrap.com/)
	- **Bootstrap v3.3.7** is used to give the project a simple, responsive layout. No update to BS4 planed at this stage and would result in new version.
- [jQuery](https://jquery.com/)
	- **jQuery** library is used to ease DOM manipulation. _Note that **jqLite** is built-in AngularJS_
- [NPM](https://www.npmjs.com/)
	- We use **npm** to help manage some of the dependencies in our application
- [Yarn](https://yarnpkg.com/en/)
	- **Yarn** is now used to manage the installation of our libraries and framework (_Previously used Bower_)
 
### Testing tools

- [Jasmine](https://jasmine.github.io/)
	- **Jasmine** as our testing framework
- [karma](https://karma-runner.github.io/2.0/index.html)
	- **Karma** as our test runner for the browsers we want
- [Gulp](https://gulpjs.com/)
	- Now using **Gulp** as our task runner instead of Grunt. (_Previously used Grunt_)
- [Angular mocks](https://docs.angularjs.org/api/ngMock)
	- We need **ngMocks** to test our AngularJs components

- [Protractor](https://www.protractortest.org/#/)
	- **Protractor** is our AngularJs end-to-end testing framework
- [Webdriver-manager](https://www.protractortest.org/#/server-setup)
	- **Webdriver-manager** helps running [Selenium server](https://www.seleniumhq.org/) and drive the browsers needed

### Additional tech used

- [http-server](https://www.npmjs.com/package/http-server)
  - To run the project on ` localHost:8080 `
- [Jasmine-expect](https://www.npmjs.com/package/jasmine-expect)
  - Used to add custom matchers for testing the app


## Features

### Existing Features

- Demo Reel on Home Page
- About page presenting services and team
- Address on googleMap for location
- Contact Forms
- Portfolio gallery viewer

### Features to add

_There is always space for improvement_

## License

See the [LICENSE.md](./LICENSE.md) file for license rights and limitations (MIT).

## Credits

### Code

Tanks to Eric A. Meyer for the [resetCSS](./src/css/resetCSS.css) file, used to smooth appearance differences between browsers.

### Media

Graphic elements were created by Gareth Sciarrone.  
Photographs and material in the gallery section are copyrighted Gareth Sciarrone except for the following:  
London Olympic 2012:  © International Olympic Committee,  
Acts Of Godfrey : © Acts of Godfrey Limited,  
Ptouch : © Brother Industries, Ltd,  
Motat : © Copyright MOTAT (Museum of Transport and Technology).  
