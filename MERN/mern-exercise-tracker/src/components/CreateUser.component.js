import React,{Component} from 'react';// Importing React and Component so we can use class-based components
import axios from 'axios';// Import axios for sending HTTP requests (used to talk to the backend server)
export default class CreateUser extends Component// CreateUser component: lets users create a new username and save it to the backend
{
    constructor(props){// Constructor: initializes the component with default state and binds methods
        super(props);
        this.state = {username: ''};// Component state to store the current value of the username input field
        // Bind 'this' to event handler methods so they work correctly inside the class
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChangeUsername(e){this.setState({username: e.target.value});}  // Event handler: updates state when the input value changes
    // e.target.value is the typed input


    onSubmit(e){  // Event handler: runs when the form is submitted
        e.preventDefault();// Prevents default page reload behavior of a form
        const user = { username: this.state.username};    // Create a user object from the current state
        console.log(user);    // Log the user to the console (for debugging)
        axios.post('http://localhost:5000/users/add',user)    // Send a POST request to the backend server to add this user
            .then(res=>console.log(res.data)); // Logs the server response to console
        this.setState({username:''});    // Reset the form by clearing the username from the state
    }

    render(){  // The render() method defines the UI that gets displayed on the screen
        return(
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>        {/* Form element to capture the username */}
                    <div className='form-group'>          {/* Bootstrap form group for styling */}
                        <label>
                            Username:
                        </label>
                        <input
                            type='text'// Input field type
                            required// Makes the field mandatory
                            className='form-control'
                            value={this.state.username}// Controlled input value
                            onChange={this.onChangeUsername}// Update state when user types
                        />

                    </div>

                    <div className='form-group'>          {/* Submit button to send form data */}
                        <input
                            type="submit"
                            value="Create User"
                            className='btn btn-primary'// Bootstrap button style
                            />

                    </div>
                </form>
            </div>
        );
    }
}