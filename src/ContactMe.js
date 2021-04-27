import React from 'react'
import NavHeader from './NavHeader'
import './ContactMe.css'

export default function ContactMe() {
    return (
        <div className='ContactMe'>
            <div className='contactimg1'>
                <NavHeader />
                <div className='contacttext1'>
                    <span className='contactborder1'>
                       <h2>Contact Me</h2>
                    </span>
                </div>
            </div>
            <section>
                <form action="https://formspree.io/f/mnqljaoz"
                method="POST">
                    <label for="user-name">Name:</label>
                    <input id="user-name" type="text" name="name" />

                    <label for="user-email">Email:</label>
                    <input id="user-email" type="text" name="email" />

                    <label for="form-message">Message Me:</label>
                    <textarea id="form-message" name="message" ></textarea>
                    
                    <button type="submit">Submit</button>
                </form>
            </section>
            <div className='contactimg2'>
                <div className='contacttext2'>
                    <span className='contactborder2'>
                        <a className="contactGit" href="https://github.com/Matt-Moo16" target="_blank"><img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" width="50" alt="GitHub"/></a>
                        <a className="contactLinkedIn" href="https://www.linkedin.com/in/matt-moore-57332b196/" target="_blank"><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" alt="LinkedIn" width="50"/></a>
                        <a className="contactMail" href="mailto:matt.roger.m@gmail.com"><img src="https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png" alt="Gmail" width="50"/></a>
                    </span>
                </div>
            </div>
        </div>
    )
}