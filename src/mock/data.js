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
  resume: 'https://www.resumemaker.online/es.php',
};

export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'YelpCamp 2.0',
    info:
      'A Yelp-like application for sharing and rating campground created with Javascript, NodeJS, Express and MongoDB. Uses google maps to create cluster areas of campgrounds listed in a custom cloud database. Comes with secure authentication to ensure only logged in users have access to database.',
    info2:
      'Uses geocoding to plot areas by map and allows users to leave ratings. Logging out/switching accounts disables other user features as a normal app would.',
    url: 'https://mysterious-sierra-35230.herokuapp.com/',
    repo: 'https://github.com/ArtAttac/Yelp-Camp',
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Tracker Bracker App',
    info:
      'A progressive web app turned to a React Native phone application. With authorization and authentication, the correct and remembered user can input their path name and start recording their path.',
    info2:
      "The app will follow user's phone at the accuracy and level set by user's requested battery allowance. User can save and look at all past tracks. Uses a Ngrok tunnel so until production, demo can't be seen.",
    url: 'https://github.com/ArtAttac/Tracker-React-Native',
    repo: 'https://github.com/ArtAttac/Tracker-React-Native',
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'JS Web Paint Clone (w/ Local Save/Load)',
    info:
      ' A javascript app that was created to showcase the canvas functionalty and the local storage. Users can draw, erase, change the background and more. They can also save their work to their machine or to the local storage in the application.',
    info2:
      'If user selects load within the app, the previously kept image in local storage will reappear.',
    url: 'https://artattac.github.io/JS-Paint-Clone-w-Save-and-Load/',
    repo: 'https://github.com/ArtAttac/JS-Paint-Clone-w-Save-and-Load',
  },
  {
    id: nanoid(),
    img: 'project5.png',
    title: 'Memorable Places App',
    info:
      ' A Kotlin and java android application that asks the user for location permissions and allows user to save memorable locations to the database and to retrieve it at a later point.',
    info2: 'The locations are then able to be grabbed and used for directions/sharing.',
    url: 'https://imgur.com/a/ZWRHgLO',
    repo: 'https://github.com/ArtAttac/Memorable-Places-App',
  },
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
