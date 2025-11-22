import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    // Fondo oscuro (gray-900), texto blanco, borde inferior sutil
    <div className="navbar bg-gray-900 border-b border-gray-800 px-4 sm:px-8 flex justify-between items-center h-16">
      
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-white">
          MiApp <span className="text-indigo-500">Daisy</span>
        </Link>
      </div>

      {/* Derecha: Buscador y Botones */}
      <div className="flex items-center gap-4">
        
        {/* Buscador (visible en pantallas medianas en adelante) */}
        <div className="hidden md:block relative">
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="input input-sm rounded-md bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 w-48" 
          />
          {/* Icono de lupa decorativo */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Icono de Sol (Decorativo) */}
        <button className="btn btn-ghost btn-circle btn-sm text-yellow-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        </button>

        {/* Botones de Acción */}
        {!user ? (
          <div className="flex gap-3">
            <Link 
              to="/register" 
              className="btn btn-sm border-none bg-pink-600 hover:bg-pink-700 text-white font-medium px-5"
            >
              Regístrate
            </Link>
            <Link 
              to="/login" 
              className="btn btn-sm border-none bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5"
            >
              Iniciar Sesión
            </Link>
          </div>
        ) : (
          <button onClick={handleLogout} className="btn btn-sm btn-ghost text-gray-300 hover:text-white">
            Salir
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;