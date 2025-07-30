const Express = require('express'); // import express

const router = Express.Router();
// NOT // const Router = Express.Router; as Router var is conflict Router stuff // use router func to create route handlers
let User = require('../models/user.model'); // import model/mongoose schema

// 1st Route/endpoint that handles http get req/
// Route to GET Req. to fetch all users
router.route('/').get( //get request at index
    (req, res) =>
    {
        User.find()   // Find all user records from the database, method of mongoose, it returns a promise
        .then(users => res.json(users))    // If successful, return the users in JSON format
        .catch(err=> res.status(400).json('ERROR: '+err));     // If error occurs, send a 400 status with the error message
    }
);

// req ,from Express, This object represents the incoming HTTP request.
// res ,from Express, This object is used to send the response back to the client.

// Define a route for POST request to add a new user
router.route('/add').post(
    (req,res) => {
        const username = req.body.username;   // Extract username from the request body
        // req.body.username: This gets the "username" field from the data sent by the client (like a form or Postman)
        // For example: if you send { "username": "robin" }, this line will store "robin" in the variable `username`
        const newUser = new User({username});   // Create a new User object using the username
        // This creates a new object (document) using the User model
        // The new object looks like: { username: 'robin' }

        newUser.save()   // Save the new user to the database
        // .save(): This is a Mongoose method that saves the new user to the MongoDB database

        .then(()=>res.json('User added!'))     // If successful, respond with a success message
        .catch(err=> res.status(400).json('ERROR: '+err));     // If error occurs, send a 400 status with the error message
    }

    
);

module.exports = router;
// Export the router so it can be used in other parts of the app


