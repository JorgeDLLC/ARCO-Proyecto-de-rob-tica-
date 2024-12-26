import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Archivo para los estilos.
import Logo from "../Image/logo en azul.png";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <img src={Logo} className="Logo" />
      <ul className="nav-links">
        <li>
          <div className="box">
            <Link to="/descripcion">Descripción</Link>
          </div>
        </li>
        <li>
          <div className="box">
            <Link to="/partes">Componentes</Link>
          </div>
        </li>
        <li>
          <div className="box">
            <Link to="/diseñocinematico">Modelo cinemático</Link>
          </div>
        </li>
        <li>
          <div className="box">
            <Link to="/sensores">Simulación de sensores</Link>
          </div>
        </li>
        <li>
          <div className="box">
            <Link to="/actuadores">Simulación de actuadores</Link>
          </div>
        </li>
        <li>
          <div className="box">
            <Link to="/control">Etapa de control</Link>
          </div>
        </li>
        <li>
          <div className="box">
            <Link to="/pruebas">Integración y pruebas</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
