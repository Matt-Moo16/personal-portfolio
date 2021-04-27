import React from 'react'
import './Projects.css'
import kitlabimg from './images/Kitlab-ScreenShot.png'
import giftwrapimg from './images/Giftwrap-ScreenShot.png'
import podivoreimg from './images/Podivore-Screenshot.png'
import NavHeader from './NavHeader'


export default function Projects() {
    return (
        <div className='Projects'>
            <div className='pimg1'>
                <NavHeader />
                <div className='ptext'>
                    <span className='pborder'>
                       <h2>Projects</h2>
                    </span>
                </div>
            </div>
            <section>
                <h3>Below are all the porjects I have worked on throughout my career as a Web Developer.</h3>
            </section>
            <div className='pimg2'>
                <div className='ptext'>
                    <span className='pborder'>
                        <h2>Kitlab</h2>
                    <ul className="plinks">
                        <li>
                            <a className="repo" href="https://github.com/Matt-Moo16/kitlab" target="_blank">GitHub Repository</a> 
                        </li>
                        <li>
                            <a className="demo" href="https://kitlab-matt-moo16.vercel.app/" target="_blank">Live Demo</a>
                        </li>
                    </ul>
                    </span>
                </div>
            </div>

            <section>
                <img src={kitlabimg} />
                <p>
                    Kitlab is an app that allows users to see guitar gear that they might want all together in one place to get an idea of what a setup might look like. Users can create custom setups of different gear including guitars, pedals, and amps and then save those setups. Once the setups are saved users can view their custom setups and click each product in the setup to go to its manufacturer product page.
                </p>
                <div className='skillsUsed'>
                    <h4>Skills Used</h4>
                    <ul>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
            </section>

            <div className='pimg3'>
                <div className='ptext'>
                    <span className='pborder'>
                        <h2>Giftwrap</h2>
                    <ul className="plinks">
                        <li>
                            <a className="repo" href="https://github.com/Matt-Moo16/giftwrap-app" target="_blank">GitHub Repository</a> 
                        </li>
                        <li>
                            <a className="demo" href="https://giftwrap-app.vercel.app/" target="_blank">Live Demo</a>
                        </li>
                    </ul>
                    </span>
                </div>
            </div>

            <section>
                <img src={giftwrapimg}/>
                <p>
                    Giftwrap is an app that allows users to keep track of gifts that they want to purchase for their family or friends. Users can create lists to represent the people they want to gift to and add links from across the web. When the links are added as gifts, Giftwrap does the rest by taking the OG tags from the link to display product information at a glance for the user.
                </p>
                <div className='skillsUsed'>
                    <h4>Skills Used</h4>
                    <ul>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
            </section>

            <div className='pimg4'>
                <div className='ptext'>
                    <span className='pborder'>
                        <h2>Podivore</h2>
                    <ul className="plinks">
                        <li>
                            <a className="repo" href="https://github.com/Matt-Moo16/podivore" target="_blank">GitHub Repository</a> 
                        </li>
                        <li>
                            <a className="demo" href="https://matt-moo16.github.io/podivore/" target="_blank">Live Demo</a>
                        </li>
                    </ul>
                    </span>
                </div>
            </div>

            <section>
                <img src={podivoreimg} />
                <p>
                Podivore is an app that finds a random recipe for an ingredient search and will pair that recipe with a genred podcast search with the same length as the cook time of the recipe.
                </p>
                <div className='skillsUsed'>
                    <h4>Skills Used</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>REST APIs</li>
                    </ul> 
                </div>
                
            </section>
        </div>
    )
}