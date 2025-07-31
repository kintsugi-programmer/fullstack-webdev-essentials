import React from "react";// Importing the React library to use JSX and component features
import 'bootstrap/dist/css/bootstrap.min.css';// Importing Bootstrap CSS for styling (you get buttons, layouts, etc. pre-designed)
import {BrowserRouter, Route} from 'react-router-dom';// Importing tools from React Router for handling navigation between pages
// Importing the components used in the app
import Navbar from './components/Navbar.component'; // Top navigation bar
import ExerciseList from './components/ExerciseList.component'; // Homepage - shows list of exercises
import CreateExercise from './components/CreateExercise.component'; // Pageto create a new exercise
import EditExercise from './components/EditExercise.component'; // Page toedit an existing exercise
import CreateUser from './components/CreateUser.component'; // Page tocreate a new user

function App()// Main App component
{
  return(// Wraps the entire application inside the BrowserRouter so routing can work
    <BrowserRouter>
      <div className="container">{/* This div gives some padding and centers content using Bootstrap's'container' class */}
        <Navbar />{/* The Navbar is always shown at the top of the page */}
        <br/>{/* Just a line break for spacing */}
        {/* Define routes for different URLs and their correspondingcomponents */}
        <Route path="/" exact Component={ExerciseList} />{/* If the URL is exactly '/', show the ExerciseList component(i.e., the homepage) */}
        <Route path="/edit/:id" Component={EditExercise} />{/* If the URL is '/edit/:id', show the EditExercise component. The ':id' is a dynamic part - it will be replaced by an actual exercise ID */}
        <Route path="/create" Component={CreateExercise}/>{/* If the URL is '/create', show the CreateExercise component */}
        <Route path="/user"Component={CreateUser}/>{/* If the URL is '/user', show the CreateUser component */}
      </div>
    </BrowserRouter>
  );
}

export default App;// Export the App component so it can be used in index.js to render the whole app
