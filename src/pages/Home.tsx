import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-full flex items-center justify-center bg-white  dark:bg-slate-700 py-20">
      <div className="container text-center">
        <h1 className="text-4xl font-bold mb-4">
          ¡Bienvenido a mi Portafolio!
        </h1>
        <p className="text-lg mb-4 text-gray-700">
          Explora mis proyectos y conoce más sobre mí.
        </p>
        <Link
          to="/about"
          className="hover:text-gray-400 text-blue-500 underline"
        >
          Saber más sobre mí
        </Link>
      </div>
    </div>
  );
};

export default Home;
