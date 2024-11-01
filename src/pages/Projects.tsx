import React from "react";

interface Project {
  title: string;
  description: string;
  url: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "Jakay",
    description: "Videojuego para dispositivos móviles",
    url: "https://github.com/GUPILUAN/Jakay",
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    ],
  },
  {
    title: "Pyng-Pong",
    description: "Juego inspirado en Pong, realizado en Python",
    url: "https://github.com/GUPILUAN/Pyng-Pong",
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section className="bg-white min-h-full  dark:bg-slate-700 p-20">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="border p-4 rounded shadow hover:shadow-md transition dark:border-neutral-800 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-700 dark:text-white">
                {project.description}
              </p>
              <div className="p-3 flex flex-row items-center space-x-3">
                {project.images.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    className="h-10 w-10"
                    alt={`${project.title} logo`}
                  />
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                Link al repositorio de GitHub
              </a>
            </article>
          ))}
        </div>

        <div className="mt-5 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded shadow hover:shadow-md transition dark:border-neutral-800 flex flex-col items-center">
            <h3 className="text-xl font-semibold">Ver más</h3>
            <p className="text-gray-700 dark:text-white">Visita mi Github 🙂‍↕️</p>
            <div className="p-3 flex flex-row items-center space-x-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                className="h-10 w-10"
                alt={"Github logo"}
              />
              <img
                className="object-cover overflow-scroll"
                src="https://raw.githubusercontent.com/GUPILUAN/GUPILUAN/output/snake.svg"
                alt="Snake animation"
              />
            </div>
            <a
              href={"https://github.com/GUPILUAN/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition"
            >
              👉🏼 Clickeame 👈🏼
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
