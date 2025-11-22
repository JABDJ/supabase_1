import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Error de credenciales.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gray-950 px-4">
      <div className="card w-full max-w-md bg-gray-900 shadow-xl border border-gray-800">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Iniciar Sesión</h2>
          
          {error && <div className="alert alert-error text-white text-sm py-2 mb-4 bg-red-900/50 border-red-800">{error}</div>}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text text-gray-400">Correo Electrónico</span></label>
              <input 
                type="email" 
                placeholder="ejemplo@correo.com" 
                className="input input-bordered w-full bg-gray-800 border-gray-700 text-white focus:border-indigo-500 focus:outline-none" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-control">
              <label className="label"><span className="label-text text-gray-400">Contraseña</span></label>
              <input 
                type="password" 
                placeholder="Tu contraseña" 
                className="input input-bordered w-full bg-gray-800 border-gray-700 text-white focus:border-indigo-500 focus:outline-none" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <div className="form-control mt-6">
              <button 
                type="submit" 
                // Botón MORADO
                className="btn w-full border-none bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium"
                disabled={loading}
              >
                {loading ? <span className="loading loading-spinner"></span> : 'Iniciar Sesión'}
              </button>
            </div>
          </form>
          
          <div className="text-center mt-6 text-sm text-gray-400">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="link link-hover text-indigo-400 font-semibold">
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;