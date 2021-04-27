import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavHeader.css'

export default function NavHeader() {
    return (
        <div className='NavHeader'>
            <h3>
                <NavLink to='/'>
                    Home
                </NavLink>
            </h3>
            <h3>
                <NavLink to='/about'>
                    About Me
                </NavLink>
            </h3>
            <h3>
                <NavLink to='/projects'>
                    Projects
                </NavLink>
            </h3>
            <h3>
                <NavLink to='/contact'>
                    Contact Me
                </NavLink>
            </h3>
        </div>
    )
}