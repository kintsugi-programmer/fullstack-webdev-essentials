// server.js
// body parser not needed in new version of express

// import express framework and core middleware to enable cross-origin requests
const express = require('express')
const cors = require('cors')



// ### Integrate Mongoose in `backend/server.js` to connect mongodb atlas with server
// import mongoose for connecting to mongodb 
const mongoose = require('mongoose')

// load env var form .env into process.env
require('dotenv').config();


// create a new express app
const app = express();
// get port no. from environment or default 5000
const port = process.env.PORT || 5000;


// setup middleware
// load cors, now app allows requests from any origin
app.use(cors());

// load express, now app auto parse json payloads in incomin requests
// as our server is gonna send&receive JSONs
app.use(express.json()); // bodyparser is included in express

// after setting up middleware
// load mongodb conn. string from .env
// we will get uri from mongodb atlas dashboard
// uri, where our db is stored
const uri = process.env.ATLAS_URI;

// tell mongoose to connect mongodb using that uri
// As of Mongoose 6.x, many connection options (including useCreateIndex, useNewUrlParser, useUnifiedTopology, etc.) are now set by default or deprecated.
mongoose.connect(uri)  .then(() => console.log("MongoDB db-connection est. SUCCESS"))
  .catch((err) => console.error("MongoDB connection ERROR:", err));

 

// old way
// // tell mongoose to connect mongodb using that uri
// mongoose.connect(uri, { // passing uri

//     // extra flags, due to internal mongodb update guidelines
//     useNewUrlParser: true, // use the new URL parser instead of the deprecated one
//     useCreateIndex: true // use createIndex() instead of ensureIndex()
// })

// grab default connection obj
const connection = mongoose.connection;


// old way to detect
// replaced by .then(() => console.log("MongoDB db-connection est. SUCCESS")) .catch((err) => console.error("MongoDB connection ERROR:", err));
// // listen,1st time the connection opens, log est success
// connection.once('open',
//     ()=>{
//         console.log("MongoDB db-connection Est. SUCCESS")
//     }
// )



// #### importing and using `routes/users.js` & `routes/exercises.js` in `server.js`
// just before app.listen()
// import routes
const exercisesRouter = require('./routes/exercises');
//exercisesRouter is now an Express router containing endpoints like POST, GET, etc., for exercises.
const userRouter = require('./routes/users'); //usersRouter will handle routes related to user operations like registration or listing users

app.use('/exercises', exercisesRouter); // Mount exercise routes at /exercises
// This tells the Express app to use all routes from exercisesRouter, and prefix them with /exercises.
// For example, if exercisesRouter has a GET / route, it will be available at GET /exercises/.
app.use('/users',userRouter) // Mount user routes at /users


// start the server and listen on specific port
app.listen(port, ()=> {console.log(`Server Running SUCCESS at Port : ${port}`)})

// server+mongoose server ready :)
