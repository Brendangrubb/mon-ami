# MonAmi

A social media app built to connect like-minded parents based on interests. This app utilizes the Angular2 framework, user authentication, and realtime data storage with firebase.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Angular2](https://github.com/angular/angular)
* [Angular-CLI](https://github.com/angular/angular-cli)

## Installation

**Step 1**: Clone this repository to your local computer

```console
git clone https://github.com/Xesme/mon-ami
```

**Step 2**: Install all development and production dependencies from the project root directory

```console
npm install
```
```console
bower install
```

**Step 3**: Create a new file named `api-keys.ts` in the `src/app` directory to include your firebase information in the following format:

```js
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

**Step 4**: Use Angular-CLI to run a local server instance

```console
ng serve
```

**Step 5**: Visit the app at [http://localhost:4200](http://localhost:4200).

## Planning

* Users can create an account with email and password authentication
* Users can create a profile with personal details including name, age, age and gender of all children, marital status, gender of user, and interests
* Users can sign in to view their profile
* All data is persisted in firebase
* Users can edit their profile details
* Users can view potential matches based on interests
* Users can add and view all friends
* Users can send messages to friends
* Users can view messages and send replies

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

Copyright 2017 Xia Xia Amendolara, Brendan Grubb, Dan Lauby, and Brynna Klamkin-McCarter - MIT License
