import React from 'react'
import "../App.css"
import logo from '../asserts/logo.png';

const Header = () => {
    return (
        <div className='top'>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default Header