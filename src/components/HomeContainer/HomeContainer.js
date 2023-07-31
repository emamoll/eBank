import React from "react";
import { useLocation } from "react-router-dom";
const HomeContainer = ({ user, setUser }) => {
  const location = useLocation()

  const logout = () => {
    setUser([])
  }

  return (
    <div>
      <h1>Bienvenido {location.state.id}</h1>
      <button onClick={logout}>Cerrar sesion</button>
    </div>

  )
};

export default HomeContainer