// Import React and Component class from 'react' so we can define a class component
import React, { Component } from 'react';

// Import Link from react-router-dom for client-side navigation (without reloading the page)
import { Link } from 'react-router-dom';

// Define and export a Navbar class component
export default class Navbar extends Component {
  // The render method returns the JSX that will be displayed
  render() {
    return (
      // This is a Bootstrap-styled navigation bar (dark background and expands on larger screens)
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        
        {/* The brand/logo part of the navbar, clicking it takes user to the home page ("/") */}
        <Link to="/" className="navbar-brand">Exercise Tracker</Link>
        
        {/* Container for the navigation links - Note: small typo in 'collapse' fixed below */}
        <div className="collapse navbar-collapse">
          
          {/* Unordered list to group navigation items */}
          <ul className="navbar-nav mr-auto">

            {/* First navigation item: Link to home page, shows "Exercises" */}
            <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
            </li>

            {/* Second navigation item: Link to create a new exercise */}
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Exercise</Link>
            </li>

            {/* Third navigation item: Link to create a new user */}
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}