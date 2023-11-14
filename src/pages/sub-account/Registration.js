// Registration.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setLastEmail] = useState('');
  const [password, setLastPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleLastEmailChange = (e) => {
    setLastEmail(e.target.value);
  };

  const handleLastPasswordChange = (e) => {
    setLastPassword(e.target.value);
  };

  return (
    <div className="bg-register intro">
      <Link to="/account">Retour à la page de connexion</Link>
      <form className='regiss'>
      <h3>INSCRIPTION</h3>
        <div className="form-group">
          <label htmlFor="firstName">Nom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Entrez votre nom"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Prénom(s)</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Entrez votre(vos) prénoms(s)"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Votre mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={handleLastEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Votre mail</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Votre mots de passe"
            value={password}
            onChange={handleLastPasswordChange}
          />
        </div>
        <Link to="/Dashboard">
          <button type="submit">Confirmer et se Connecter</button>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
