import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Maximiliano Sinopoli | Software Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi! I'm",
  name: 'Max',
  subtitle: 'a Software Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'image.png',
  paragraphOne:
    "** I'm a software developer specialised in Javascript technologies based in London, UK. I stand out for being an extremely curious person, with a proactive personality and a passion for learning new and exciting things.",
  paragraphTwo:
    "** Recently I've done a programming bootcamp with +800 hours of coding. I've learned technologies like React, NodeJS, Express among others. I like also travel, photography, reading, outdoor sports and learn new languages.",
  paragraphThree:
    '** If you’d like to learn more about what makes me tick, feel free to send a message. Email: m_sinopoli@hotmail.com || Phone Number: +44 7593902107',
  resume: 'https://drive.google.com/file/d/1bYc5IXoS7ql2ISumC6eQ4De_iwRDDpdr/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'recipe.jpg',
    title: 'Recipe App',
    info: 'Able to retrieve and render recipes from any ingredient from 1,000,000+ records database.',
    info2: 'Coupled a React front-end with a server-side algorithm that retrieve REST API data.',
    url: 'https://lets-eat-react.netlify.app/',
    repo: 'https://github.com/maximilianosinopoli/Recipe-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'to-do.jpg',
    title: 'Keeper, to-do list App',
    info: 'Able the user to add, remove and filter tasks.',
    info2: 'Powered with Javascript and Materialized CSS.',
    url: 'https://todo-list-vanilla-js.netlify.app/',
    repo: 'https://github.com/maximilianosinopoli/Todo-Vanilla', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.jpg',
    title: 'Forecast, weather app',
    info: 'Allows the user to retrieve and display the temperature and weather description of any city.',
    info2: 'Coupled a Javascript front-end with the ‘Open Weather App’ API. Developed with JS OOP.',
    url: 'https://determined-borg-e66bcf.netlify.app/',
    repo: 'https://github.com/maximilianosinopoli/weather', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'travel.jpg',
    title: 'Travel Agency',
    info: 'Responsive travel agency site develop with the Materialize CSS.',
    info2: 'Coupled a Javascript front-end with Materialize css.',
    url: 'https://travel-agency-site.netlify.app/',
    repo: 'https://github.com/maximilianosinopoli/Wanderlust', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'm_sinopoli@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/colosinopoli/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/feed/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/maximilianosinopoli',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
