import { useState } from 'react';

function Contact(){
    return (
        <div>
            <h2>Contact</h2>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <input type="text" placeholder="Best Impression"></input>
            <button>Join Us!</button>
            <p>Phone: 1-888-WE-REACT</p>
            <p>Email: reactWithUs@ReactActors.com</p>
        </div>
    )
}

export default Contact;