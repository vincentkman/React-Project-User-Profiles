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

function User({ picture, firstname, lastname, gender, city, postcode, email, dob, phone, country }) {
    return (
        <div className='User'>
            <img src={picture} alt={lastname} />
            <h3>First Name: {capitalise1stLetter(firstname)}</h3>
            <h3>Last Name: {capitalise1stLetter(lastname)}</h3>
            <h3>Gender: {capitalise1stLetter(gender)}</h3>
            <h3>City: {capitalise1stLetter(city)}</h3>
            <h3>Postcode: {postcode}</h3>
            <h3>Email: {email}</h3>
            <h3>DOB: {removeChar(dob)}</h3>
            <h3>Phone: {phone.split('-')}</h3>
            <h3>Country: {country}</h3>
        </div>
    );
}

export default User; 