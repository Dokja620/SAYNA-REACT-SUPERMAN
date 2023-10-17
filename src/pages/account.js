// src/Game.js
import React from 'react';
import { Link } from 'react-router-dom';
import user from './sub-account/user-svgrepo-com.svg';
import eye from './sub-account/eye-svgrepo-com.svg';


const Account = () => {
  return (
    <div id='login' className="page">
      <div className="login">
        <div className="title">
            <h1>CONNEXION</h1>
            <div className="reg">
              <p>Vous n'aver pas encore de compte?</p>
              <Link to="/registration">
                <p style={{textDecoration: 'underline'}}>Inscrivez vous ici</p>
              </Link>
            </div>
        </div>
        <form>
          <div className="form-group">
            <div>
              <label htmlFor="email">Identifiant</label>
            </div>
            <div className='check'>
              <img src={user} alt="" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="password">Mot de passe</label>
            </div>
            <div className='check'>
              <img src={eye} alt="" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="mot de passe"
              />
            </div>
            <div className="forgot">
              <p style={{textDecoration: 'underline', fontSize: '.8em', cursor: 'pointer'}}
              >Mot de passe oublié</p>
            </div>
          </div>
          <Link to="/dashboard">
              <button>valider</button>
        </Link>
          <div className="forgot">
            <p>Connectez vous avec</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
