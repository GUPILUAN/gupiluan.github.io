import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-200 dark:bg-slate-900 text-stone-600 dark:text-white p-4 flex justify-center items-center">
      <nav className="space-x-4">
        <Link to="/" className="hover:text-gray-400">
          Inicio
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          Sobre mí
        </Link>
        <Link to="/projects" className="hover:text-gray-400">
          Proyectos
        </Link>
        <Link to="/contact" className="hover:text-gray-400">
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Header;
