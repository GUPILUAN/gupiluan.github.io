import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 dark:bg-slate-700 min-h-full">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-lg mb-8 dark:text-white">
          ¿Tienes algún proyecto en mente? ¡Hablemos!
        </p>

        <a
          href="mailto:gupiluan@hotmail.com"
          className="text-blue-500 p-4 bg-gray-300 dark:bg-slate-800 rounded-xl"
        >
          Enviar Correo
        </a>
      </div>
    </section>
  );
};

export default Contact;
