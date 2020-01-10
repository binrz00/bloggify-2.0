# Bloggify 2.0 App

An user-authenticated application to write, store, and delete blog posts that utilizes MySQL, EJS, Node, Sequelize, Husky, & Lint.

## Getting Started

### Prerequisites

This application uses the following NPMs:

fs, sequelize, path, ejs.

### Installing
You must also have node.js and perform a npm install to bring in all the necessary node modules. 
Run application using server.js as your node starting point.

## Running the tests

In order to run tests (canary.test.js and apiRoutes.test), user will need to type npm test in terminal.

### Example test: apiRoutes

The apiRoutes test will determine if the routing used by the database is connecting properly. 
The api routes currently utilize get, push, post and delete methods in orders to update the database and it's data.

## Deployment

Front and back end components were developed by separate teams and integrated using the EJS (Embedded Javascript) npm. 
<br>
The application is deployed via Heroku: [Bloggify 2.0](https://handsome-gentlemen-blogify.herokuapp.com/signup)

## Screenshots
<img src="/public/images/login.png">
<img src="/public/images/index.png">
<img src="/public/images/show.png">

## Built With
Semantic UI - The web framework used
<br>
Canva - Graphic Design Tool for our App Logo
<br>
Google Fonts - Primary font scheme for our UI
<br>
Flat Icon - Interactive icon elements for our UI
<br>
MySQL - Database Creation & Management
<br>
MAMP - Server Creation & Management

## Contributing
This application was built by the following developers: Max McCord, Mark McGraw, Austin Schlander, Elliot Trejo, and Brian Zauner.
<br>
Project Manager: Austin S.
<br>
Front End Team: Brian Z. and Mark M.
<br>
Back End Team: Elliot T. and Max M.
<br>
Our Instructor and TAs with Trilogy Education Services Coding Bootcamp assisted us with troubleshooting.

## Challenges
Back End: Tasks requiring the most troubleshooting included both ensuring the API routes and MySQL database interacted successfully and, once the application ran successfully, incorporating user authentication.
<br>
Front End: Linking forms to backend code, and converting HTML to EJS syntax.


## Versioning
Our team didn't use versioning for this project, per se. However, we did collaborate via GitHub branching.

## Authors
Max McCord, Mark McGraw, Austin Schlander, Elliot Trejo, Brian Zauner.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments
We named our application Bloggify prior to learning that a site called Bloggify already exists. This application is in no way, shape, or form affiliated with the blogging platform Bloggify. 
<br>This is Bloggify 2.0. It is simply a group project assignment for our Coding Boot Camp and is not intended for commercial use. 
<br>
This application was created for educational purposes only.
