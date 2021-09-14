import React from 'react'
import './AboutMe.css'
import NavHeader from './NavHeader'

export default function AboutMe() {
    return (
        <div className='AboutMe'>
            <div className='aboutimg1'>
                <NavHeader />
                <div className='abouttext'>
                    <span className='aboutborder'>
                       <h2>About Me</h2>
                    </span>
                </div>
            </div>  
            <section> 
                <p>
                    When the COVID pandemic hit, I was displaced from my previous career path as a restaurant manager. During my time off, I started teaching myself Python and HTML/CSS/Javascript through online resources like CodeAcademy. 
                </p>
                <p>
                    Through this, I quickly found out that I enjoyed learning how to code.
                    In March of 2021 I completed Thinkful's Engineering Flex Program. 
                    In this program I learned the basics of Full Stack Web Development and how to utilize languages such as Javascript, HTML and Python as well as frameworks such as ReactJS and NodeJS. 

                </p>
                <p>
                    I am very excited to have the ability and opportunity to learn such a valuable skill and turn it into a career path. I enjoy and look forward to working with others, using these skills for the betterment of society, and creating an inclusive environment for all.
                </p>
            </section>
            <div className='aboutimg2'>
                <div className='abouttext'>
                    <span className='aboutborder'>
                       <h2>Skills</h2>
                    </span>
                </div>
            </div> 
            <section>
                <ul>
                    <li>
                        React.js
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        PostgreSQL
                    </li>
                    <li>
                        Express
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        RESTful APIs
                    </li>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Git
                    </li>
                    <li>
                        Data Structures and Algorithms
                    </li>
                </ul>
            </section>
        </div>
    )
}