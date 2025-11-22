import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthLayout = () => {
  const { user } = useAuth();

  // Si el usuario no existe (no está logueado), lo mandamos al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si está logueado, mostramos el contenido protegido (Outlet)
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <div className="grow container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
