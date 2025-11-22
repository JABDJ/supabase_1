import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) return setError('Las contraseñas no coinciden.');
    
    setLoading(true);
    try {
      await register(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Error al registrarse.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // Fondo muy oscuro para toda la pantalla
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gray-950 px-4">
      
      {/* Tarjeta del formulario: un poco menos oscura */}
      <div className="card w-full max-w-md bg-gray-900 shadow-xl border border-gray-800">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Crear Cuenta</h2>
          
          {error && <div className="alert alert-error text-white text-sm py-2 mb-4 bg-red-900/50 border-red-800">{error}</div>}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="form-control">
              <label className="label"><span className="label-text text-gray-400">Correo Electrónico</span></label>
              <input 
                type="email" 
                placeholder="ejemplo@correo.com" 
                // Input oscuro con borde sutil
                className="input input-bordered w-full bg-gray-800 border-gray-700 text-white focus:border-pink-500 focus:outline-none" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-control">
              <label className="label"><span className="label-text text-gray-400">Contraseña</span></label>
              <input 
                type="password" 
                placeholder="Mínimo 6 caracteres" 
                className="input input-bordered w-full bg-gray-800 border-gray-700 text-white focus:border-pink-500 focus:outline-none" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text text-gray-400">Confirmar Contraseña</span></label>
              <input 
                type="password" 
                placeholder="Repite la contraseña" 
                className="input input-bordered w-full bg-gray-800 border-gray-700 text-white focus:border-pink-500 focus:outline-none" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
            </div>

            <div className="form-control mt-6">
              <button 
                type="submit" 
                // Botón ROSA intenso
                className="btn w-full border-none bg-pink-600 hover:bg-pink-700 text-white text-lg font-medium"
                disabled={loading}
              >
                {loading ? <span className="loading loading-spinner"></span> : 'Registrarme'}
              </button>
            </div>
          </form>
          
          <div className="text-center mt-6 text-sm text-gray-400">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="link link-hover text-pink-500 font-semibold">
              Inicia Sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;