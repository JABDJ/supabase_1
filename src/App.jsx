import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AuthLayout from './layouts/AuthLayout';

// Un componente simple para la página de inicio pública
const Home = () => (
  <div className="hero min-h-[80vh] bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Bienvenido</h1>
        <p className="py-6">Esta es la página pública. Inicia sesión para ver el contenido protegido.</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* El Navbar está fuera de Routes para que aparezca en todas las páginas */}
        <Navbar />
        
        <div className="container mx-auto px-4">
          <Routes>
            {/* Rutas Públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Rutas Protegidas (Envueltas en AuthLayout) */}
            <Route element={<AuthLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Aquí puedes añadir más rutas privadas */}
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;