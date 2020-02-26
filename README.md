### README

This test assignment was built with React and deployed to [Heroku](http://secure-citadel-62833.herokuapp.com/) (please wait a minute when open the link - it have to wake up :)

## Table of contents:

- **[Technologies used](#technologies-used)**
- **[Things to be improved](#things-to-be-improved)**
- **[Getting Started](#getting-started)**
- **[Available scripts](#available-scripts)**

## Technologies used

1. React with `create-react-app`
2. `redux`, `react-redux` and `redux-thunk` to set up a redux store and dispatch actions
3. `superagent` to fetch data from the database

## Things to be improved

- I prefer to build an app with "mobile-first" approach, but in that case I started with desktop (as it was the only provided desine)
- API is available only with http, better to change it to https
- Ctyles were implemented very close, but not pixel-perfect

## Getting Started

Step-by-step instructions to get you up and running!

### Clone the repo

Clone the repo to your local machine using the following SSH Link:
`git@github.com:apavlushina/sbrothers.git`

### Install required dependencies

If not already installed, install dependencies in the project directory by running the following:

- `npm install` || `npm i`

This will install the required dependencies.

### Store the authorization token

The app expects enviromet variable `REACT_APP_AUTH="your token"`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
