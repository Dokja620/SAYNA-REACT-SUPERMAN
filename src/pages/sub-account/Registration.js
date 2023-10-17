// Registration.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div className="bg-account intro">
      <h1>REGISTRATION</h1>
      <Link to="/account">Back to Login</Link>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <Link to="/Dashboard">
          <button type="submit">Continue to Subpage</button>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
