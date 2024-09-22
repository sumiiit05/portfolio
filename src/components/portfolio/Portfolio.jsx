import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React jobs",
    img: "./reactjobs.png",
    desc: "The React Jobs project is built using React and Vite. It provides a minimal setup for creating a React application with hot module reloading (HMR) and some ESLint configurations. The project demonstrates the use of modern front-end tools and technologies, making it an ideal example of a React-based job listing or job board application. It is deployed on Vercel, providing a smooth and fast web experience."
  },
  
  {
    id: 2,
    title: "Todo list",
    img: "./todo.png",
    desc: "This React-based Todo List app allows users to manage their tasks efficiently by adding, deleting, and marking tasks as complete. It features a clean, minimalistic user interface with responsive design, showcasing your front-end development skills in state management using hooks like useState and useEffect. The app demonstrates your ability to implement CRUD functionality and local storage integration, enabling persistent task management across sessions. This project is a practical example of building real-world productivity tools with React.",
  },
  {
    id: 3,
    title: "Portfolio",
    img: "./portfolio.png",
    desc: "React-based portfolio, featuring animations to enhance user experience. Built using React and Vite, it focuses on a minimalist and dynamic design, allowing users to showcase their work interactively. The project is ideal for personal portfolios, demonstrating skills in React development, responsive design, and animation libraries.",
  },
  {
    id: 4,
    title: "Nasa Reactjs App ",
    img: "./apod.png",
    desc: "This React-based project leverages NASA's Astronomy Picture of the Day (APOD) API to deliver a user-friendly and visually engaging experience. The app fetches daily astronomical images or videos along with detailed descriptions directly from NASA, allowing users to browse different dates. It demonstrates your skills in API integration, state management, and responsive design. Key React features such as functional components, hooks (like useState, useEffect), and custom styling are employed, making it a great showcase of both technical expertise and creativity for front-end development.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
   
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style = {{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Visit</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        {/* <h1>Projects</h1> */}
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
