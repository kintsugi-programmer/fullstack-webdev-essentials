# MERN Stack 
- with project Exercise Tracker App

## Table of Contents
- [MERN Stack](#mern-stack)
  - [Table of Contents](#table-of-contents)
  - [1. Introduction](#1-introduction)
  - [2. Technology Stack](#2-technology-stack)
  - [3. Database Concepts](#3-database-concepts)
  - [4. MongoDB Atlas Setup](#4-mongodb-atlas-setup)
    - [ObjectIds in MongoDB](#objectids-in-mongodb)
  - [5. Backend Setup (Node.js + Express + Mongoose)](#5-backend-setup-nodejs--express--mongoose)
    - [5.1 Prerequisites](#51-prerequisites)
    - [5.2 Initialize Backend Project](#52-initialize-backend-project)
    - [nodemon](#nodemon)
    - [5.3 Create `backend/server.js`](#53-create-backendserverjs)
    - [5.4 Environment Variable](#54-environment-variable)
    - [5.5 Mongoose Models](#55-mongoose-models)
      - [`models/user.model.js`](#modelsusermodeljs)
      - [`models/exercise.model.js`](#modelsexercisemodeljs)
    - [5.6 Routes](#56-routes)
      - [`routes/users.js`](#routesusersjs)
      - [`routes/exercises.js`](#routesexercisesjs)
  - [6. Testing API (Insomnia / Postman)](#6-testing-api-insomnia--postman)
  - [7. Frontend Setup (React)](#7-frontend-setup-react)
    - [7.1 Initialize React App](#71-initialize-react-app)
    - [7.2 `public/index.html`](#72-publicindexhtml)
    - [7.3 `src/index.js`](#73-srcindexjs)
    - [7.4 `src/App.js`](#74-srcappjs)
    - [7.5 Components](#75-components)
      - [7.5.1 `src/components/Navbar.component.js`](#751-srccomponentsnavbarcomponentjs)
      - [7.5.2 `src/components/CreateUser.component.js`](#752-srccomponentscreateusercomponentjs)
      - [7.5.3 `src/components/CreateExercise.component.js`](#753-srccomponentscreateexercisecomponentjs)
      - [7.5.4 `src/components/ExerciseList.component.js`](#754-srccomponentsexerciselistcomponentjs)
      - [7.5.5 `src/components/EditExercise.component.js`](#755-srccomponentseditexercisecomponentjs)
  - [8. Running the App](#8-running-the-app)
  - [9. Conclusion](#9-conclusion)

---

## 1. Introduction

Welcome to building web apps with the MERN stack (MongoDB, Express, React, Node.js), using MongoDB Atlas and Google Cloud Platform. In this tutorial, we will create an **Exercise Tracker** app.

**Outline:**

1. Introduction to the MERN stack
2. Database concepts (MongoDB vs. relational)
3. MongoDB Atlas setup
4. Backend (Node.js + Express + Mongoose)
5. Testing API with Insomnia/Postman
6. Frontend (React + React Router + Axios)
7. Connecting frontend to backend

*Teacher: Beau Carnes (freeCodeCamp)*

---

## 2. Technology Stack

* **MongoDB**: Document-based open‑source database
* **Express**: Web application framework for Node.js, help to create server, lightweight, fast
* **React**: Front-end JavaScript library for building UIs
* **Node.js**: JavaScript runtime environment that executes JS code outside of the browser (server)
* **Mongoose**: Simple, schema based solution to model application data. ODM (Object Data Modeling) library for MongoDB + Node.js
* **CORS**: Cross-Origin Resource Sharing middleware, helps to AJAX request to skip same origin policy and access resources from remote hosts. interlinked with Express middleware
* **dotenv**: Load environment variables from `.env` file into process.env, makes dev easier

---

## 3. Database Concepts

| Relational (SQL)     | MongoDB (NoSQL)                                                                |
| -------------------- | ------------------------------------------------------------------------------ |
| Database             | Database                                                                       |
| Tables               | Collections                                                                    |
| Rows                 | Documents                                                                      |
| Columns              | Fields                                                                         |
| Foreign keys         | References (using ObjectIDs)                                                   |
| JOINs                | `$lookup` operator                                                             |
| Data on disk: tables | Data on disk: **BSON** (binary JSON) — supports strings, integers, dates, etc. |

> BSON
- looks like json
- store in disc as bson format
- wide variety datatype supports
- allows nesting documents
- improves data integrity instead of splitting into different tables

> Example of a MongoDB document(row) Model and labels the different BSON data types used
```json
{
  name: "Beau Carnes",                     // String
  title: "Developer & Teacher",           // String
  address: {                              // Nested Document
    address_1: "123 Main Street",         // String
    city: "Grand Rapids",                 // String
    state: "Michigan",                    // String
    postal_code: "49503"                  // String
  },
  topics: ["MongoDB", "Python", "JavaScript", "Robots"],  // Array of Strings
  employee_number: 1234,                  // Integer
  location: [44.9901, 123.0262]           // Geo-Spatial Coordinates (Array of Numbers)
}

```

> **Subdocuments** and **arrays** allow nesting related data together for faster access.

---

## 4. MongoDB Atlas Setup

1. **Sign in** to MongoDB Atlas at `https://cloud.mongodb.com`
2. Click **"New Project"** → name your project → **"Create Project"**
3. Click **"Build a Cluster"** → choose **Google Cloud Platform**, **Free Tier (M0 sandbox)**, select a region → **"Create Cluster"**
4. **Whitelist IP & Create DB User**:

   * In **Network Access**, add your current IP.
   * In **Database Access**, create a user & password.
5. **Get Connection String**:

   * Click **"Connect"** → **"Connect your application"** → copy the connection string.
   * It will look like:

     ```
     mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
     ```
6. **Database & Collections** for this Projectapp:

   * **Collections**: 
     * `users`, 
     * `exercises` 
     * (each exercise references one user)

### ObjectIds in MongoDB
Here’s the breakdown of a MongoDB ObjectId as shown:

```text
ObjectId("5c2fc4b3 e52f37b7ee a58d00")

  5c2fc4b3   ← 4‑byte UNIX timestamp
  e52f37b7ee ← 5‑byte random value
  a58d00     ← 3‑byte incremental counter
```
- auto generated by Mongodb driver
- is guranteed to be unique across each document in collection
- different part of object id represent different things

---

## 5. Backend Setup (Node.js + Express + Mongoose)

### 5.1 Prerequisites

* **Node.js** installed (`node -v`)
* **npm** available
* **MongoDB Atlas** cluster ready

### 5.2 Initialize Backend Project

```bash
# you can either create backend folder inside the frontend directory or make it seperate adjacent to it
mkdir backend && cd backend
npm init -y #create package.json
npm install express mongoose cors dotenv #backend packages
npm install -g nodemon #makes dev easier, tool to make NodeJS Applications by automatically restarting the node application when files changes in directory/detective

```
### nodemon
- makes dev easier, 
- tool to make NodeJS Applications 
- by automatically restarting the node application when files changes in directory/detective
- SO WHENEVER WE UPDATE OUR SERVER FILE, IT AUTOMATICALLY RESTARTS THE SERVER
  
> whenever to install globally ,use sudo

### 5.3 Create `backend/server.js`
```js
// server.js
// body parser not needed in new version of express

// import express framework and core middleware to enable cross-origin requests
const express = require('express')
const cors = require('cors')

// load env var form .env into process.env
require('dotenv').config();

// create a new express app
const app = express();
// get port no. from environment or default 5000
const port = process.env.PORT || 5000;

// load cors, now app allows requests from any origin
app.use(cors());

// load express, now app auto parse json payloads in incomin requests
// as our server is gonna send&receive JSONs
app.use(express.json()); // bodyparser is included in express

// start the server and listen on specific port
app.listen(port, ()=> {console.log(`Server Running at Port : ${port}`)})

// basic server ready :)
```
- run it
```js
nodemon server
```

```js
// bakwass
// server.js
// body parser not needed in new version of express

const express = req




const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies

// Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Import routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// Use routes
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
```

### 5.4 Environment Variable

Create `.env` in `/backend`:

```
ATLAS_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/exercise-tracker?retryWrites=true&w=majority
```

---

### 5.5 Mongoose Models

#### `models/user.model.js`

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true, minlength: 3 }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
```

#### `models/exercise.model.js`

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username:   { type: String, required: true },
  description:{ type: String, required: true },
  duration:   { type: Number, required: true },
  date:       { type: Date,   required: true }
}, { timestamps: true });

module.exports = mongoose.model('Exercise', exerciseSchema);
```

---

### 5.6 Routes

#### `routes/users.js`

```js
const router = require('express').Router();
let User = require('../models/user.model');

// GET all users
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST add user
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
```

#### `routes/exercises.js`

```js
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// GET all exercises
router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST add exercise
router.route('/add').post((req, res) => {
  const { username, description, duration, date } = req.body;
  const newExercise = new Exercise({
    username,
    description,
    duration: Number(duration),
    date: Date.parse(date)
  });
  newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET exercise by ID
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE exercise
router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST update exercise
router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username    = req.body.username;
      exercise.description = req.body.description;
      exercise.duration    = Number(req.body.duration);
      exercise.date        = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
```

---

## 6. Testing API (Insomnia / Postman)

1. **POST** `http://localhost:5000/users/add`

   ```json
   { "username": "Beau" }
   ```
2. **GET** `http://localhost:5000/users`
3. **POST** `http://localhost:5000/exercises/add`

   ```json
   {
     "username": "Beau",
     "description": "Running",
     "duration": 30,
     "date": "2025-07-26T00:00:00.000Z"
   }
   ```
4. **GET** `http://localhost:5000/exercises`
5. **GET** `http://localhost:5000/exercises/<id>`
6. **POST** `http://localhost:5000/exercises/update/<id>` (with updated fields)
7. **DELETE** `http://localhost:5000/exercises/<id>`

---

## 7. Frontend Setup (React)

### 7.1 Initialize React App

```bash
# from project root:
npx create-react-app mern-exercise-tracker
cd mern-exercise-tracker
npm install axios react-router-dom bootstrap react-datepicker
```
- `create-react-app` will generate default react project with default dependencies installed
- do `/node_modules` to `node_modules` in `.gitignore`

Remove unused files (logo, serviceWorker) and CSS imports.

### 7.2 `public/index.html`

* Change `<title>` to **Exercise Tracker**
* Ensure `<div id="root"></div>` remains

### 7.3 `src/index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

### 7.4 `src/App.js`

```js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.component';
import ExerciseList from './components/ExerciseList.component';
import CreateExercise from './components/CreateExercise.component';
import EditExercise from './components/EditExercise.component';
import CreateUser from './components/CreateUser.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
```

---

### 7.5 Components

#### 7.5.1 `src/components/Navbar.component.js`

```js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Exercise Tracker</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Exercise</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
```

#### 7.5.2 `src/components/CreateUser.component.js`

```js
import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = { username: this.state.username };
    console.log(user);
    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({ username: '' });
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
```

#### 7.5.3 `src/components/CreateExercise.component.js`

```js
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', description: '', duration: 0, date: new Date(), users: []
    };
    // bind methods
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(res => { if (res.data.length > 0) {
        this.setState({
          users: res.data.map(user => user.username),
          username: res.data[0].username
        });
      }})
      .catch(err => console.log(err));
  }

  onChangeUsername(e)    { this.setState({ username: e.target.value }); }
  onChangeDescription(e) { this.setState({ description: e.target.value }); }
  onChangeDuration(e)    { this.setState({ duration: e.target.value }); }
  onChangeDate(date)     { this.setState({ date }); }

  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select required className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {this.state.users.map(user => (
                <option key={user} value={user}>{user}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input  type="text" required className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input type="number" className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
```

#### 7.5.4 `src/components/ExerciseList.component.js`

```js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Functional component for a single exercise row
const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={`/edit/${props.exercise._id}`}>edit</Link> |
      <a href="#!" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
);

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(res => this.setState({ exercises: res.data }))
      .catch(err => console.log(err));
  }

  deleteExercise(id) {
    axios.delete(`http://localhost:5000/exercises/${id}`)
      .then(res => console.log(res.data));
    this.setState({ exercises: this.state.exercises.filter(el => el._id !== id) });
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => (
      <Exercise
        exercise={currentexercise}
        deleteExercise={this.deleteExercise}
        key={currentexercise._id}
      />
    ));
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    );
  }
}
```

#### 7.5.5 `src/components/EditExercise.component.js`

```js
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class EditExercise extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', description: '', duration: 0, date: new Date(), users: [] };

    // bind methods
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // fetch exercise
    axios.get(`http://localhost:5000/exercises/${this.props.match.params.id}`)
      .then(res => this.setState({
        username: res.data.username,
        description: res.data.description,
        duration: res.data.duration,
        date: new Date(res.data.date)
      }))
      .catch(err => console.log(err));

    // fetch users
    axios.get('http://localhost:5000/users/')
      .then(res => { if(res.data.length > 0) {
        this.setState({ users: res.data.map(user => user.username) });
      }})
      .catch(err => console.log(err));
  }

  onChangeUsername(e)    { this.setState({ username: e.target.value }); }
  onChangeDescription(e) { this.setState({ description: e.target.value }); }
  onChangeDuration(e)    { this.setState({ duration: e.target.value }); }
  onChangeDate(date)     { this.setState({ date }); }

  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };

    axios.post(`http://localhost:5000/exercises/update/${this.props.match.params.id}`, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          {/* Similar form fields as CreateExercise */}
        </form>
      </div>
    );
  }
}
```

---

## 8. Running the App

1. **Start backend**:

   ```bash
   cd backend
   nodemon server.js
   ```
2. **Start frontend**:

   ```bash
   cd mern-exercise-tracker
   npm start
   ```
3. Visit `http://localhost:3000` to interact with your Exercise Tracker!

---

## 9. Conclusion

You have now built a full-stack **Exercise Tracker** application using the MERN stack:

* **Backend**: Node.js, Express, MongoDB Atlas, Mongoose
* **Frontend**: React, Axios, React Router, Bootstrap

Feel free to extend this app by:

* Adding authentication (JWT)
* Deploying to Heroku / Netlify
* Enhancing UI/UX

Happy coding! 🚀


