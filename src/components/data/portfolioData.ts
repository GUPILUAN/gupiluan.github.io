/**
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */
import { getLangFromUrl, useTranslations } from '../../i18n/utils';

/**
 * @type {PortafolioData[]}
 */

export const portafolioData = [
	{
		imgSrc: '/img/icon.jpg',
		title: 'Mayabite',
		skills: ['React', 'Tailwind', 'Python', 'Flask', 'MongoDB', 'Azure'],
		descripcion:
			'App movil de delivery de comida y productos de la Universidad Anahuac Mayab, desarrollada con React Native, Expo. Esta app cuenta con un sistema de autenticación, carrito de compras, y conexión con una base de datos MongoDB.',
		demoURL: 'https://youtu.be/xhS9Oln6m2w',
		repoURL: 'https://github.com/GUPILUAN/mayabite-app',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://raw.githubusercontent.com/GUPILUAN/Pyng-Pong/refs/heads/main/screenshots/ss1.png',
		title: 'Pyng-pong',
		skills: ['Python'],
		descripcion:
			'Juego de pong desarrollado en Python, con la libreria Pygame. Inspirado en el juego Pong de Atari.',
		repoURL: 'https://github.com/GUPILUAN/Pyng-Pong',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/jakay.png',
		title: 'Jakay',
		skills: ['Unity', 'CSharp'],
		descripcion:
			'Juego Multijugador desarrollado en Unity, con el lenguaje C#. El juego simula una mesa de jockey de aire, con un sistema de puntuación y un sistema de personalización de puck. Modo solitario cuenta con un sistema de IA para jugar contra la computadora.',
		demoURL: 'https://youtu.be/RhdjV2qMu_8',
		repoURL: 'https://github.com/GUPILUAN/Jakay',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://www.servnet.mx/hubfs/Backend-y-Frontend-¿Qué-es-cómo-funcionan-en-la-programación.jpg',
		title: 'Proyecto Escolar Frontend',
		skills: ['React', 'CSS', 'Azure'],
		descripcion:
			'Materia: Programación Web. Parte del proyecto escolar que simula una arrendara de autos inspirado en la empresa AirBnb, desarrollado con React y CSS. Alojado en Azure.',
		repoURL: 'https://github.com/GUPILUAN/frontendProyectoFinal',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://miro.medium.com/v2/resize:fit:1242/format:webp/1*UDOilEZZYakn48_tkIwi8Q.png',
		title: 'Proyecto Escolar Backend',
		skills: ['NodeJS', 'Express', 'MySQL', 'Azure'],
		descripcion:
			'Materia: Programación Web. Parte del proyecto escolar que simula una arrendara de autos inspirado en la empresa AirBnb, desarrollado con NodeJS, Express, MySQL. Alojado en Azure. Sistema de autenticación con JWT y bcrypt. Sistema de reservas con fecha y hora.',
		repoURL: 'https://github.com/GUPILUAN/backendProyectoFinal',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvroh2fw97L74U1maGrpTYvW5o8hzdGKTjQn8BDaP3vkp3Hjor4KW6z5Kbf5EvYc1LaU8&usqp=CAU',
		title: 'Proyecto Escolar QA',
		skills: ['Java', 'Selenium', 'Maven'],
		descripcion:
			'Materia: Calidad de Software, Diferentes pruebas automatizadas con JUnit, Selenium y Maven.',

		repoURL: 'https://github.com/GUPILUAN/LuisGutierrezUnitTest',
		anim: 'fade-right',
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	Typescript: 'skill-icons:typescript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Python: 'skill-icons:python-dark',
	Pygame: 'skill-icons:pygame',
	Django: 'skill-icons:django',
	Flask: 'skill-icons:flask-dark',
	Java: 'skill-icons:java-dark',
	HTML: 'skill-icons:html',
	NodeJS: 'skill-icons:nodejs-dark',
	MongoDB: 'skill-icons:mongodb',
	MySQL: 'skill-icons:mysql-dark',
	CSharp: 'skill-icons:cs',
	Unity: 'skill-icons:unity-dark',
	Azure: 'skill-icons:azure-dark',
	Express: 'skill-icons:expressjs-dark',
	Selenium: 'skill-icons:selenium',
	Maven: 'skill-icons:maven-dark',
};

export const getPortafolioData = (url: URL) => {
	const lang = getLangFromUrl(url);
	const t = useTranslations(lang);
	return portafolioData.map((item) => {
		return {
			...item,
			skills: item.skills.map((skill) => skillIcons[skill]),
			title: t(
				`portfolio.title.${item.title
					.toLowerCase()
					.replace(/\s+/g, '-')}` || item.title
			),
			descripcion: t(
				`portfolio.description.${item.title
					.toLowerCase()
					.replace(/\s+/g, '-')}` || item.descripcion
			),
		};
	});
};
