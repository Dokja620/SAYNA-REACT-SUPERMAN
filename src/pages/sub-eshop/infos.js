import React from 'react';
import { Link } from 'react-router-dom';

const InfosComponent = () => {
  return (
    <div className='page'>
      {/* Your info content here */}
      <Link to="/e-shop">Go back to e-shop</Link>
    </div>
  );
}

export default InfosComponent;
