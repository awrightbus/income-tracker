import React from 'react'
import './Navigation.css'

function Navigation() {
    return (
        <div className='Navigation'>
            <h3 className='logo'>Better You</h3>
            
            <nav className='Nav-items'>
                <ul>
                    <li className='nav-item-about'>About</li>
                    <li className='nav-item-login'> Login </li>
                    <li className='nav-item-register'>Register</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
