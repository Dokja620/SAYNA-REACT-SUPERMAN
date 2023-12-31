// recovery.js

import React, { useState } from 'react';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [recoverySent] = useState(false);

  const handleRecoverPassword = () => {
  };

  return (
    <div>
      <h2>Password Recovery</h2>
      {recoverySent ? (
        <p>We've sent you a recovery email. Follow the steps in your email to reset your password.</p>
      ) : (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleRecoverPassword} disabled={!email}>
            Valider
          </button>
        </>
      )}
    </div>
  );
};

export default PasswordRecovery;
