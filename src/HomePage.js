import React from 'react'
import './HomePage.css'
import Nav from './Nav'

export default function HomePage() {
    return (
        <div className='HomePage'>
            <div className="outerContainer">
                <div className="middleContainer">
                    <div className="mainContent">
                        <h2>Hello! My name is Matt!</h2>
                        <Nav />      
                    </div>
                </div>
            </div>
        </div>
    )
}