import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100  dark:bg-slate-700 min-h-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
        <img
          src="https://avatars.githubusercontent.com/u/25595729?v=4"
          className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover"
          alt="Foto de perfil"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          <p className="text-lg text-gray-700 dark:text-white">
            Hola! 😁 Soy Luis Ángel Gutiérrez, y estoy estudiando Tecnologías de
            la Información y Ingeniería en Negocios Digitales en el campus
            Anáhuac Mayab en Mérida, Yucatán. Estoy en mi quinto semestre y
            desde que recibí mi primera consola de videojuegos a los tres años,
            he tenido una gran pasión por la tecnología y los videojuegos. He
            estado trabajando en algunos proyectos personales, como el
            desarrollo de videojuegos con Python y Unity, y también he creado
            sitios web usando mis propias APIs. En este momento, me estoy
            sumergiendo en el desarrollo de aplicaciones con React Native,
            usando herramientas como Expo, NativeWind y Axios. Además, estoy
            utilizando JUnit 5 para hacer pruebas en mi proyecto de Java y
            prefiero Visual Studio Code como mi entorno de desarrollo. En mis
            estudios, he estado explorando temas de inteligencia artificial,
            desde sus fundamentos matemáticos hasta sus aplicaciones en
            diferentes áreas. Siempre estoy buscando aprender más y mejorar mis
            habilidades, y me encanta colaborar en proyectos en GitHub.
          </p>

          <h1 className="text-3xl font-bold my-4">
            Tecnologías y herramientas
          </h1>
          <div className="flex flex-wrap space-x-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              className="h-10 w-10"
              alt="html5 logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              className="h-10 w-10"
              alt="css3 logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              className="h-10 w-10"
              alt="javascript logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              className="h-10 w-10"
              alt="nodejs logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              className="h-10 w-10"
              alt="react logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              className="h-10 w-10"
              alt="python logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              className="h-10 w-10"
              alt="csharp logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              className="h-10 w-10"
              alt="java logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
              className="h-10 w-10"
              alt="unity logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-line-wordmark.svg"
              className="h-10 w-10"
              alt="amazonwebservices logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg"
              className="h-10 w-10"
              alt="docker logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
