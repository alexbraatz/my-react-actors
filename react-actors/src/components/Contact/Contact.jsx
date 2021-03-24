import { useState } from 'react';

function Contact(){
    const [ fname, setFirstName ] = useState( '' );
    const [ lname, setLastName  ] = useState( '' );
    const [ impression, setImpression ] = useState( '' );

    let handleFirst = ( event ) => {
        console.log( 'in handleFirst:', event.target.value );
        setFirstName( event.target.value);
    }

    let handleLast = ( event ) => {
        console.log( 'in handleLast:', event.target.value );
        setLastName( event.target.value );
    }

    let handleImpression = ( event ) => {
        console.log( 'in handleImpression:', event.target.value );
        setImpression( event.target.value );
    }

    let userGreeting = ( props ) => {
        console.log( {fname}, {lname}, {impression} )
        return <p>{fname} {lname}'s best impression is {impression}!</p>
    }

    let handleJoin = () => {
        if ( fname && lname && impression ){
            userGreeting();
        }
    }

    return (
        <div>
            <h2>Contact</h2>
            <input type="text" placeholder="First Name" onChange={ handleFirst }></input>
            <input type="text" placeholder="Last Name" onChange={ handleLast }></input>
            <input type="text" placeholder="Best Impression" onChange={ handleImpression }></input>
            <button onClick={ handleJoin }>Join Us!</button>
            <p>Phone: 1-888-WE-REACT</p>
            <p>Email: reactWithUs@ReactActors.com</p>
        </div>
    )
}

export default Contact;