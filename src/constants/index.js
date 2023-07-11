import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  import BharatIntern from '../assets/company/BharatIntern.png'
  import CodSoft from '../assets/company/codSoft.jpeg'
  import java from '../assets/tech/java.png'
  import firebase from '../assets/tech/firebase.png'
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developement",
      icon: web,
    },
    {
      title: "ReactJs Developement",
      icon: mobile,
    },
    {
      title: "Backend Developement",
      icon: backend,
    },
    {
      title: "Java development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Trainee",
      company_name: "Bharat Intern",
      icon: BharatIntern,
      iconBg: "#fff ",
      date: "10 June - 10 July of 2023",
      points: [
        "Developed a Full Stack Blogging Website.",
        "Developed a Full Stack Project Management Website.",
      ],
    },
    {
      title: "Java Developement Trainee",
      company_name: "Codsoft",
      icon: CodSoft,
      iconBg: "#E6DEDD",
      date: "1 July - 1 August of 2023",
      points: [
        "Developed a Number Game Program.",
        "Developed a Student Management System.",
        "Developed a Atm Interface.",
        "Developed a Address Book System"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Krypt",
      description:
        "Blockchain based platform that allows to transfer ethereums to another using Blockchain and all the transactions are stored safely on Blockchain.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Blockchain",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/vikibhatt/krypt",
    },
    {
      name: "Task Media",
      description:
        "Web based project that allows user to create task for all others and also manage them if there is any doubts solve it on the ChatRoom.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "ModuleCSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/vikibhatt/Project-Management-Tool",
    },
    {
      name: "Weather App",
      description:
        "A comprehensive weather app which uses real time weather data to analyse and give the output that what's the currrent weather of the particular place.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "RapidApi",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/vikibhatt/Weather-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };