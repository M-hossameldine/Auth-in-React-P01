# Authentication Flow in React

#### Demo site is here: [User Auth Flow](https://user-auth-flow.web.app/)

## Table of Contents

- [About](#about)
- [Build Setup](#build_setup)
- [Must-Read Notes](#must_read_notes)
- [Built Using](#built_using)
- [TODO](#todo)
- [Acknowledgements](#achknowledgement)

## About <a name= "about"></a>

This demo project aims to practice on Authentication in **_React_**

The demo comprehend the most essential authentication features:

- User Sign up & Login
- Tokens & protected resources
- Redirecting the User
- Presisting user authentication status (Local Storage) and Auto-Logout

## Build Setup <a name="build_setup"></a>

```
  # install dependencies
  $ npm install

  # serve with hot reload at localhost:3000
  $ npm start

  # build for production and launch server
  $ npm run build

```

## Must-Read Notes <a name="must_read_notes></a>

- The APIs in this demo are customized for Firebase.
- An API_KEY must be provided at [src/constants/api](./src/constants/api.js). I am using my own Firebase project API_kEY, so you should replace it with yours.
- For More information about [Firebase API_KEYS] (https://firebase.google.com/docs/projects/api-keys)

## Built Using <a name="built_using"></a>

### Client-Side

- [ReactJs](https://reactjs.org/) - Web FrameWork
- [React Router Dom v.5](https://www.npmjs.com/package/react-router-dom/v/5.0.0) DOM binding for [React Router](https://reactrouter.com/)

### Server-Side (Database & Authentication)

[Firebase](https://firebase.google.com/) - Google-Backed application development software

- [Firebase Auth REST API](https://firebase.google.com/docs/reference/rest/auth#section) - Back-End Authentication
- Firebase Realtime Database.

## TODO <a name="todo"></a>

- [ ] Add a new branch and practice on presisting user Authentication status using **Cookies**.
- [ ] Add User Validation for the client-side.

## Acknowledgements <a name="acknowledgement"></a>

This demo was implemented as a part of [**React - The Compolete Guide**](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) by **Maximilian Schwarzmüller**.
