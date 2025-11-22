import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="hero bg-base-100 rounded-box shadow-lg p-10">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-primary">¡Hola!</h1>
          <p className="py-6 text-xl">
            Bienvenido a tu área privada.
          </p>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Usuario conectado</div>
              <div className="stat-value text-sm truncate max-w-xs">{user.email}</div>
              <div className="stat-desc">Autenticado con Supabase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;