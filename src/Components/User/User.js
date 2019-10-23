import React from 'react';
import './user.scss';

function capitalise1stLetter(string) {
    return string.charAt(0).toUpperCase() +
        string.substr(1).toLowerCase()
}

function removeChar(string) {
    return string
        .substr(0, 10)
        .split('-')
        .reverse()
        .join('-');
}

function User(props) {
    return (
        <div className='User'>
            <img src={props.picture} alt={props.lastname} />
            <h3>First Name: {capitalise1stLetter(props.firstname)}</h3>
            <h3>Last Name: {capitalise1stLetter(props.lastname)}</h3>
            <h3>Gender: {capitalise1stLetter(props.gender)}</h3>
            <h3>City: {capitalise1stLetter(props.city)}</h3>
            <h3>Postcode: {props.postcode}</h3>
            <h3>Email: {props.email}</h3>
            <h3>DOB: {removeChar(props.dob)}</h3>
            <h3>Phone: {props.phone.split('-')}</h3>
            <h3>Country: {props.country}</h3>
        </div>
    );
}

export default User; 