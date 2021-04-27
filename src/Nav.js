import React from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css'

export default function Nav() {
    return (
        <div className='Nav'>
            <h2>
                <NavLink to='/about'>
                    About Me
                </NavLink>
            </h2>
            <h2>
                <NavLink to='/projects'>
                    Projects
                </NavLink>
            </h2><h2>
                <NavLink to='/contact'>
                    Contact Me
                </NavLink>
            </h2>
        </div>
    )
}