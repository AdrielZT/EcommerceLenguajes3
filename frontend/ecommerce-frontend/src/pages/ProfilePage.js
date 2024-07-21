import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="container mt-4">
      <h1>Perfil de Usuario</h1>
      {user ? (
        <div>
          <h3>Nombre: {user.name}</h3>
          <h3>Email: {user.email}</h3>
        </div>
      ) : (
        <p>No has iniciado sesión.</p>
      )}
    </div>
  );
};

export default ProfilePage;
