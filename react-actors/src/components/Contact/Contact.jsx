import { useState } from 'react';

function Contact(){
    const [ fname, setFirstName ] = useState( '' );
    const [ lname, setLastName  ] = useState( '' );
    const [ impression, setImpression ] = useState( '' );
    const [ message, setMessage ] = useState( '' );

    let handleFirst = ( event ) => {
        setFirstName( event.target.value);
    }

    let handleLast = ( event ) => {
        setLastName( event.target.value );
    }

    let handleImpression = ( event ) => {
        setImpression( event.target.value );
    }

    let isInputed = () => {
    
        if ( fname && lname && impression ) {
            setMessage( `${fname} ${lname}'s best impression is ${impression}`);
        }
    }

    return (
        <div>
            <h2>Contact</h2>
            <input type="text" placeholder="First Name" onChange={ handleFirst }></input>
            <input type="text" placeholder="Last Name" onChange={ handleLast }></input>
            <input type="text" placeholder="Best Impression" onChange={ handleImpression }></input>
            <button onClick={ isInputed }>Join Us!</button>
            <p>Phone: 1-888-WE-REACT</p>
            <p>{message}</p>
            <p>Email: reactWithUs@ReactActors.com</p>
        </div>
    )
}

export default Contact;