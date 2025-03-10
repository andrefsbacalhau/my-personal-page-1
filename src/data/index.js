import weatherApp1 from "../assets/projectImgs/weatherApp1.jpg";
import movieapp1 from "../assets/projectImgs/movieapp1.jpg";
import ecommerce1 from "../assets/projectImgs/ecommerce1.jpg";
import personalPage1 from "../assets/projectImgs/personalPage1.jpg";
import javascript from "../assets/technologies/javascript.png";
import css from "../assets/technologies/css.png";
import sass from "../assets/technologies/sass.png";
import tailwindcss from "../assets/technologies/tailwindcss.png";
import html from "../assets/technologies/html.png";
import react from "../assets/technologies/react.png";

export const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#academics", label: "Academics" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Welcome to my personal page,",
  introduction:
    "I’m André Bacalhau, a junior front-end developer and enthusiast in developing creative, inovative and immersive digital solutions.",
  description:
    "Mostly, i'm a self-learning developer that is always open and available to develop my skills with all the knowledge i can get about all things. \nI consider myself as someone who's always looking forward to achieve my goals with efficiency, precision and always in search of better way to do things.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "My Personal Page",
    description: "This same personal page we're at!",
    techs: [javascript, react, tailwindcss],
    image: personalPage1,
    githubLink: "https://github.com/andrefsbacalhau/personal-page-1",
  },
  {
    name: "Movie App",
    description:
      "Movie landing page, with functional search options. (with API)",
    techs: [javascript, react, tailwindcss],
    image: movieapp1,
    githubLink: "https://github.com/andrefsbacalhau/movie-app-1",
    vercelLink: "https://movie-app-1-flame.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "Check the current weather for every city worldwide! (with API)",
    techs: [javascript, react, tailwindcss],
    image: weatherApp1,
    githubLink: "https://github.com/andrefsbacalhau/weather-app-1",
    vercelLink: "https://weather-app-1-fawn.vercel.app/",
  },
  {
    name: "E-Commerce App",
    description: "Clothing website with a functional cart. (with API)",
    techs: [javascript, react, tailwindcss],
    image: ecommerce1,
    githubLink: "https://github.com/andrefsbacalhau/ecommerce-app-1",
    vercelLink: "https://ecommerce-app-1-ashen.vercel.app/",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated junior front-end developer, always looking to build the next project better and cleaner than the last, meeting the requirement of the projects/challenges i’m facing. In my developing process, I always try to find a balance between the aesthetically pleasing side and also the functional side, never leaving behind the performance and the user-friendlyness. By being an overall self-learning front-end developer, I’ve built dozens of projects which some of them can be found available on this page.",
    "Since i’ve been focusing more on the front-end side, i grew fond and focused a few technologies (besides JavaScript, HTML and CSS), such as ReactJS and TailwindCSS, but I can also develop with CSS and the basics with SaSS. All my projects are scalable, responsive and always taken in consideration to have the best performance providing a seamless user experience.",
  ],
};

export const STRENGTHS = {
  points: [
    "Fully motivated, dedicated and focused when working on new projects.",
    "Always self-conscious about me and others, regarding work/relationships.",
    "100% honest and transparent regarding my working conduct.",
    "Easy to collaborating with teams and others.",
    "Establishing good relationships with clients.",
    "Always pushing myself and others/my team for the best outcome.",
  ],
};

export const WEAKNESSES = {
  points: [
    "I might focus too much on details.",
    "Stress out with delays.",
    "When projects aren't going as supposed to, I might feel insecure.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2017 — Now",
    title: "Salesperson at Worten",
    location: "Lisbon, Portugal",
    description: [
      "Sales in person from health care items to IT hardware  and services (B2C).",
      "Telecomunications and home service contracts.",
      "Store operator.",
    ],
  },
  {
    yearRange: "09-11 / 2016",
    title: "Comercial at CONTACT Training Center",
    location: "Lisbon, Portugal",
    description: [
      "Participated on a oubound project in partership with NOS (service provider).",
      "Gathering new clients.",
    ],
  },
  {
    yearRange: "07-10 / 2014",
    title: "IT Technician / administrative at HighSkills",
    location: "Lisbon, Portugal",
    description: [
      "Development of a local data management software.",
      "Maintenance of local IT area.",
      "Data management and administrative assistant.",
      "Invitation for a summer job/project after internship.",
    ],
  },
  {
    yearRange: "07-10 / 2013",
    title: "IT Technician at Globaldata",
    location: "Lisbon, Portugal",
    description: [
      "IT equipement assembly and maintenance.",
      "Salesperson and communicating directly with clientes regarding business matters.",
      "Warehouse/stock operator and management.",
      "Data management and administrative assistant.",
      "Invitation for a summer job after internship.",
    ],
  },
];

export const ACADEMICS = [
  {
    yearRange: "2017 - 2021",
    title:
      "Bachelor's degree at ISTEC - Instituto Superior de Tecnologias Avançadas de Lisboa",
    location: "Lisbon, Portugal",
    finalEval: "13/20 points",
  },
  {
    yearRange: "09 / 2012 - 07 / 2015",
    title: "Level 4 Course at ECL - Escola de Comércio de Lisboa",
    location: "Lisbon, Portugal",
    finalEval: "17/20 points",
  },
];

export const INTERSHIPS = [
  {
    yearRange: "01 - 06 / 2016",
    title:
      "Intern at APSOCECAT - Associació Catalana pro Persones amb Sordceguesa (Erasmus+ Scholarship)",
    location: "Barcelona, Spain",
    description: [
      "Software developer/IT technician.",
      "Advisor and team-leading with a local team of other interns",
      "Trainer assessments.",
    ],
    finalEval: "18/20 points",
  },
  {
    yearRange: "01-02 / 2015",
    title: "Intern at HighSkills",
    location: "Lisbon, Portugal",
    description: [
      "Software developer/IT technician.",
      "Content creator.",
      "Design department.",
      "Data management.",
    ],
    finalEval: "20/20 points",
  },
  {
    yearRange: "06-07 / 2014",
    title: "Intern at Highskills",
    location: "Lisbon, Portugal",
    description: [
      "Software developer/IT technician.",
      "Data management.",
      "Administrative assessments.",
    ],
    finalEval: "20/20 points",
  },
  {
    yearRange: "06-07 / 2013",
    title: "Intern at Globaldata",
    location: "Lisbon, Portugal",
    description: [
      "IT equipement assembly and maintenance.",
      "Salesperson.",
      "Warehouse/stock management.",
    ],
    finalEval: "20/20 points",
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK TOGETHER",
  description:
    "Hopefully you found interests in common, i'm excited to collaborate on projects that have a purpuose and meaningful impact. Contact me for a meeting or for more information. Let's create something great!",
  email: "andrefsbacalhau@gmail.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/yourprofile",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} André Bacalhau. All rights reserved.`,
};
