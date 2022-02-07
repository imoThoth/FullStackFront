import { render } from '@testing-library/react';
import React from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../Auth/AuthService'

const Navbar = () => {

    const isUserLoggedIn = AuthService.isUserLoggedIn();
    console.log(`Registration service: ${isUserLoggedIn}`);
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        {/* <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link> */}
        <ul className='nav-links'>
          <li>
            {!isUserLoggedIn && <Link to='/'>Home</Link>}
          </li>
          <li>
            {isUserLoggedIn && <Link to='/todo'>ToDo</Link>}
          </li>
          <li>
           {isUserLoggedIn && <Link to="/welcome/:name">Welcome</Link>}
          </li>
          <li>
            {isUserLoggedIn && <Link to='/logout' onClick={AuthService.logout}>Logout</Link>}
          </li>
        </ul>
      </div>
    </nav>
  );
  
}

export default Navbar