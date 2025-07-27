const mongoose = require('mongoose');// Import the mongoose library to work with MongoDB
const Schema = mongoose.Schema;// Get the Schema constructor from mongoose to define data structure
const userSchema = new Schema( // Define a new schema (structure) for a "User" document
    // single field `username`

    {
        username :   // "username" field must be a string
        {

            // validators
            type: String, // Data type is String
            required: true, // This field is mandatory
            unique:true, // No two users can have the same username
            trim: true,  // Removes extra spaces at the beginning or end
            minlength: 3 // Must be at least 3 characters long
        }

    }
    ,
    {
        timestamps:true  // Automatically adds "createdAt" and "updatedAt" fields
    }
);

const User = mongoose.model('User',userSchema); //mongoose.model() creates a model named 'User' using the schema userSchema.
module.exports = User; //This line exports the User model so you can import and use it in other files (e.g., routes or controllers).