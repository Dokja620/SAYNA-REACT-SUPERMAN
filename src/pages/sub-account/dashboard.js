import React, { useState } from 'react';
import ConfirmationModal from './popup'; // Import your custom modal component

const Dashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'User',
    lastName: 'SAYNA',
    password: 'thepassword',
    email: 'email@gmail.com',
    phoneNumber: '+261 00 000 00',
    addressOne: 'madagascar',
    addressTwo: 'madagascar',
  });

  const [newsletter, setNewsletter] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    // Show the logout confirmation popup
    setIsModalOpen(true);
  };

  const handleLogoutConfirm = () => {
    // Perform logout action and redirect to /account
    setIsModalOpen(false);
    window.location.href = '/account';
  };

  const handleModifyInfoClick = () => {
    setIsEditing(true);
  };

  const handleSaveInfoClick = () => {
    setIsEditing(false);
    // Save the modified user info (you can implement your logic here)
  };

  const handleNewsletterChange = (e) => {
    setNewsletter(e.target.checked);
  };

  return (
    <div id='dash'>
      <div id='secret' className='page'>
        <h1>
          Seriez vous kryptonien ? <br/>
          Dites nous en plus
        </h1>
      </div>
      <div className='identity'>
        <div className="leftp">
            <p>Mes informations</p>
            <p>Historique des commandes</p>
            <p>Mes avis</p>
            <p>Mes Favoris</p>
            <button onClick={handleLogoutClick}>DÉCONNEXION</button>
        </div>
        <div className="rightp">
            <section>
            <h3>Informations personnelles</h3>
              <div>
                <label>Nom:</label>
                {isEditing ? ( <input type="text" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} /> ) : ( <span>{userInfo.name}</span>)}
              </div>
              <div>
                <label>Prénoms:</label>
                {isEditing ? ( <input type="text" value={userInfo.lastName} onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}/> ) : (<span>{userInfo.lastName}</span>)}
              </div>
              <div>
                <label>Mot de passe:</label>
                {isEditing ? (
                  <input
                    type="password"
                    value={userInfo.password}
                    onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                  />
                ) : (
                  <span>{userInfo.password}</span>
                )}
              </div>
              <div>
                <label>Email:</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  />
                ) : (
                  <span>{userInfo.email}</span>
                )}
              </div>
              <div>
                <label>Numero de téléphone:</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={userInfo.phoneNumber}
                    onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })}
                  />
                ) : (
                  <span>{userInfo.phoneNumber}</span>
                )}
              </div>
              <div>
                <label>Adresse de livraison:</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={userInfo.addressOne}
                    onChange={(e) => setUserInfo({ ...userInfo, addressOne: e.target.value })}
                  />
                ) : (
                  <span>{userInfo.addressOne}</span>
                )}
              </div>
              <div>
                <label>Adresse de facturation:</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={userInfo.addressTwo}
                    onChange={(e) => setUserInfo({ ...userInfo, addressTwo: e.target.value })}
                  />
                ) : (
                  <span>{userInfo.addressTwo}</span>
                )}
              </div>
              <button onClick={isEditing ? handleSaveInfoClick : handleModifyInfoClick}>
                {isEditing ? 'Enregister' : 'Modifier'}
              </button>
            </section>
            <section>
              <h3>Newsletter</h3>
              <div>
                <label>Abonnez vous à la newsletter ! Ne ratez pas nos offres exceptionnels sur votre article préféré !</label>
                <div>
                  <p><input type="checkbox" name="yes" id="" /> Oui</p>
                  <p><input type="checkbox" name="non" id="" /> Non</p>
                </div>
              </div>
              <button>Enregistrer</button>
            </section>

            {/* Render the logout confirmation modal */}
            <ConfirmationModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleLogoutConfirm}
            />
          </div>

        </div>
      </div>
  );
};

export default Dashboard;
