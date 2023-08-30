import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Filtros = () => {

    const [activeLink, setActiveLink] = useState("todos");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="container">
      <h2>Productos</h2>

      <Link
        className={`navbarLink marcas ${
          activeLink === "todos" ? "active" : ""
        }`}
        to="/"
        onClick={() => handleLinkClick("todos")}
      >
        TODOS
      </Link>
      <Link
        className={`navbarLink marcas ${
          activeLink === "capslab" ? "active" : ""
        }`}
        to="/productos/capslab"
        onClick={() => handleLinkClick("capslab")}
      >
        CAPSALB
      </Link>
      <Link
        className={`navbarLink marcas ${
          activeLink === "puma" ? "active" : ""
        }`}
        to="/productos/puma"
        onClick={() => handleLinkClick("puma")}
      >
        PUMA
      </Link>
      <Link
        className={`navbarLink marcas ${
          activeLink === "newera" ? "active" : ""
        }`}
        to="/productos/newera"
        onClick={() => handleLinkClick("newera")}
      >
        NEW ERA
      </Link>
    </div>
  );

};