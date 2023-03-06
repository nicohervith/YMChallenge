import React from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <div className="header">
        <div className="title"></div>
      </div>
      <div className="auth-container">
        <div className="message">
          <div className="logo"></div>
        </div>
        <div className="body-auth">
          <div id="form" className="form-auth">
            <div className="input-container">
              <input type="text" placeholder="CUIT o Correo Electrónico" />
              <label></label>
            </div>
            <div className="container-button">
              <Link to="/verification" style={{ textDecoration: "none" }}>
                <button className="button">Iniciar Sesión</button>
              </Link>
              <p> Aún no tengo cuenta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
