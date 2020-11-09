import { nanoid } from 'nanoid';

export const headData = {
  title: 'Arthur Itzhaki | JS Developer',
  lang: 'en',
  description: 'Welcome to my portfolio',
};

export const heroData = {
  title: 'Hello, my name is',
  name: 'Arthur Itzhaki',
  subtitle: "I'm a Web Developer",
  cta: 'Know more',
};

export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hi, I'm Arthur from Queens, NY! I started self-teaching myself HTML, CSS and JS in 2018. Almost two years later, I have already worked on almost 12 freelance projects (I can link the demos/files if asked for, most of them are internal or permission is needed), created over 40 of my own personal projects, and picked up a couple of JS frameworks in React and Vue. React Native and Kotlin are other technologies I'm extremely comfortable working with.",
  paragraphTwo:
    'Besides my passion for coding and creating web/mobile applications, I love designing templates, creating logos and photoshopping funny pictures for shirts. In my free time, I enjoy playing basketball, hiking and exploring nature, and catching up on my favorite podcasts.',
  paragraphThree: 'Please enjoy getting to know my projects and I better.',
  resume: 'https://drive.google.com/file/d/13kdFzchNdA4nwwGdav9otggsk4hpyAxv/view?usp=sharing',
};

export const projectsData = [
  {
    id: nanoid(),
    img: 'recipy.png',
    title: 'Recipy - Recipe Finder',
    info:
      'A prgoressive web app built with React, Gatsby, and custom SCSS. Built with speed and optimization in cooperation with mobile-design practices first. If the web speed is slow or offline, the app should not disconnect the user. ',
    info2:
      'Uses a custom built web-scraper in addition to a recipe API for as many recipes as possible to be present to the user. ',
    url: 'https://recipy-art.netlify.app/',
    repo: 'https://github.com/ArtAttac/recipy',
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Tracker Bracker App',
    info:
      'Also a PWA turned to a React Native phone application. With authorization and authentication, the correct and remembered user can input their path name and start recording their path.',
    info2:
      "The app will follow user's phone at the accuracy and level set by user's requested battery allowance. User can save and look at all past tracks. Uses a Ngrok tunnel so until production, demo can't be seen.",
    url: 'https://github.com/ArtAttac/Tracker-React-Native',
    repo: 'https://github.com/ArtAttac/Tracker-React-Native',
  },
  
  {
    id: nanoid(),
    img: 'artsart.png',
    title: 'Arts Artsy Art',
    info:
      ' An advanced javascript/React app that accepts photos/information from users to create a mini-picture "blog post". Uses React, MongoDB for storage, Express and Node for the server-side. ',
    info2:
      'User can submit a picture of a jpeg, jpg, png, or gif(although the gif will not play) with information and the data will be posted in a blog like fashion. ',
    url: 'https://arts-artsy-art.netlify.app/',
    repo: 'https://github.com/ArtAttac/arthurs-artsy-art',
  }
];

export const contactData = {
  cta: 'Make the best decision of your life!',
  btn: 'Contact Me!',
  email: 'arthur.itzhaki@gmail.com',
};

export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/arthuritzhaki/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ArtAttac',
    },
  ],
};

export const githubButtons = {
  isEnabled: false,
};
