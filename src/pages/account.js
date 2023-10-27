// src/Game.js
import React from 'react';
import { Link } from 'react-router-dom';
import user from './sub-account/user-svgrepo-com.svg';
import eye from './sub-account/eye-svgrepo-com.svg';
import google from './sub-account/spons-1.png';
import facebook from './sub-account/spons-2.png';
import apple from './sub-account/spons-3.png';


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
              <div className='ln'></div>
            </div>
          </div>
          <Link to="/dashboard">
              <button className='log'>valider</button>
        </Link>
          <div className="forgot">
            <p>Connectez vous avec</p>
            <div className="ln"></div>
          </div>
          <div className="spons">
            <div><img src={google} alt="" /></div>
            <div><img src={facebook} alt="" /></div>
            <div><img src={apple} alt="" /></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
