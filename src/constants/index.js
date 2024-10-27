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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "2D Illustrator",
      icon: web,
    },
    {
      title: "Animator",
      icon: mobile,
    },
    {
      title: "Video Editor",
      icon: backend,
    },
    {
      title: "3D Artist",
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Education",
      company_name: "B.Voc Digital Media and Animation",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2022 -2025",
      points: [
      ],
    },
    {
      title: "Education",
      company_name: "Mount Carmel PU College",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2020-2022",
      points: [
      ],
    },
    {
      title: "Education",
      company_name: "Bishop Cotton Girl's School",
      icon: shopify,
      iconBg: "#383E56",
      date: "2009-2020",
      points: [
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make an artwork so beautiful and meaningful",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Very good knowledge of colour theory",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AR Quiz",
      description:
        "AR Quiz to test your general knowledge and riddle skills.",
      tags: [
        {
          name: "meta spark",
          color: "blue-text-gradient",
        },
        {
          name: "meta",
          color: "green-text-gradient",
        },
        {
          name: "filter",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ieat7artforbreakfast/Riddle-quiz",
    },
    {
      name: "Parts of a Motorcycle",
      description:
        "Web application that enables users to learn about the parts of a motorcycle.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "unity hub",
          color: "green-text-gradient",
        },
        {
          name: "blender3D",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ieat7artforbreakfast/BIKE_AR_Parts",
    },
    {
      name: "Solar system",
      description:
        "A comprehensive learning website made for children in school to study about our solar system's planets.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "unity hub",
          color: "green-text-gradient",
        },
        {
          name: "blender",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ieat7artforbreakfast/Solar-System.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };