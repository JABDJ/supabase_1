import React, { createContext, useContext, useState, useEffect } from 'react';

// --- MODO SIMULADO (SIN SUPABASE) ---
// Nota: No importamos 'createClient' para evitar el error de URL.

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos que carga rápido
    console.log("Modo simulado activado");
    setTimeout(() => setLoading(false), 500);
  }, []);

  const register = async (email, password) => {
    // Simula registro exitoso
    const fakeUser = { id: '123', email };
    setUser(fakeUser);
    return fakeUser;
  };

  const login = async (email, password) => {
    // Simula login exitoso con cualquier dato
    const fakeUser = { id: '123', email };
    setUser(fakeUser);
    return fakeUser;
  };

  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;