export const languages = {
  en: "🇺🇸 English",
  es: "🇪🇸 Español",
};

export const defaultLang = "es";

export const ui = {
  en: {
    "layout.title": "Luis's Portfolio",
    "nav.home": "Home",
    "nav.about": "About",
    "404.title": "Page not found",
    "temporal.message":
      "My portfolio is being updated 🚧 Please excuse the inconvenience",
    "temporal.button": "Visit my github profile",
    "temporal.news.title": "Preparing my portfolio using Astro!",
    "temporal.news.description":
      "I invite you to take a look at my profile on github :)",
  },
  es: {
    "layout.title": "Portafolio de Luis",
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "404.title": "Página no encontrada",
    "temporal.message":
      "Mi portafolio esta siendo actualizado 🚧 Por favor, disculpa las molestias",
    "temporal.button": "Visita mi perfil en github",
    "temporal.news.title": "Preparando mi portafolio usando Astro!",
    "temporal.news.description":
      "Te invito a darte una vuelta por mi perfil en github :)",
  },
} as const;

export const routes = {
  en: {
    home: "home",
  },
  es: {
    home: "inicio",
  },
};
