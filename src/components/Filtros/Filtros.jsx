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
          activeLink === "nike" ? "active" : ""
        }`}
        to="/productos/nike"
        onClick={() => handleLinkClick("nike")}
      >
        NIKE
      </Link>
      <Link
        className={`navbarLink marcas ${
          activeLink === "adidas" ? "active" : ""
        }`}
        to="/productos/adidas"
        onClick={() => handleLinkClick("adidas")}
      >
        ADIDAS
      </Link>
      <Link
        className={`navbarLink marcas ${
          activeLink === "vans" ? "active" : ""
        }`}
        to="/productos/vans"
        onClick={() => handleLinkClick("vans")}
      >
        VANS
      </Link>
    </div>
  );

};