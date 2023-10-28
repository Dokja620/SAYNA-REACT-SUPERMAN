import React from 'react';
import { Link } from 'react-router-dom';

const InfosComponent = () => {
  return (
    <div className='page'>
      <div className="back">
        <p>
          E-shop /
          <span>
            <Link to="/e-shop">Fiche du produits</Link>
          </span>
        </p>
        <h3>Page en cours de construction…</h3>
      </div>
    </div>
  );
}

export default InfosComponent;
