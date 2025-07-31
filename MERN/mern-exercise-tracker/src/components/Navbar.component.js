import React,{Component} from 'react';// Import React and Component class from 'react' so we can define a class component
import {Link} from 'react-router-dom';// Import Link from react-router-dom for client-side navigation (without reloading the page)
export default class Navbar extends Component{
// Define and export a Navbar class component
    render(){  // The render method returns the JSX that will be displayed

        return(      // This is a Bootstrap-styled navigation bar (dark background and expands on larger screens)

            <nav className='
            navbar
            navbar-dark
            bg-dark
            navbar-expand-lg'>
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>{/* The brand/logo part of the navbar, clicking it takes user to the home page ("/") */}
                <div className="
                collapse
                navbar-collapse">{/* Container for the navigation links - Note: small typo in 'collapse' fixed below */}
                    <ul className='navbar-nav mr-auto'>{/* Unordered list to group navigation items */}
                        <li className='navbar-item'><Link to="/" className='nav-link'>Exercises</Link></li>{/* First navigation item: Link to home page, shows "Exercises" */}
                        <li className='navbar-item'><Link to="/create" className='nav-link'>Create Exercise</Link></li>{/* Second navigation item: Link to create a new exercise */}
                        <li className='navbar-item'><Link to="/user" className='nav-link'>Create User</Link></li>{/* Third navigation item: Link to create a new user */}

                    </ul>

                </div>
            </nav>

        );
    }
}