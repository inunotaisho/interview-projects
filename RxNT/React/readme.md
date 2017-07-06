## Instructions for setting up the project on your machine

*Download and setup the project directory

  * Navigate to ES6-React-Redux-Seed folder
```
cd ES6-React-Redux-Seed
```
  * Copy the seed project to your folder
```
cp -R ./  /Users/<username>/dev/go/src/work/Your_New_Project/site/
```

*Install node dependencies
  * Navigate back to Your_New_Project
```
cd Your_New_Project
```
  * Install yarn dependencies run
```
yarn install
```
  * Start the site in development mode
```
yarn Start
```

## Configuration changes to be made for making new project work

* WebPack configuration changes, make following changes in **webpack.config.env_name.js** file at root of the project directory
  * Replace LoginUrl with your login url. This url will be used for credentialing the user. Also if the user is not logged in he/she will be redirected to this url
  * Replace ApiServiceUrl value with url for API service to connect
  * Change HostedIP value to actual url where the app will be hosted, this information will be used for logging purpose
