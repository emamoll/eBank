import { createContext, useState, useContext } from 'react';
import { SignUpReq } from '../api/SignUpReq';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider')
  };
  return context;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAutenticated] = useState(false);
  const [errors, setErrors] = useState(null);

  const signup = async (users) => {
    try {
      await SignUpReq(users);
      console.log(users);
      setUser(user);
      setIsAutenticated(true)
    } catch (error) {
      console.log('Error');
      setErrors(error.response.data);
    }

  }
  return (
    <AuthContext.Provider value={{ signup, user, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  )
}