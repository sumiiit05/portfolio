import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const items = [
  {
    id: 1,
    title: "React jobs",
    img: "./reactjobs.png",
    desc: "The React Jobs Project is an innovative application built using React and Vite, designed to streamline the creation of job listings and board applications. With a minimal setup that includes hot module reloading (HMR) and ESLint configurations, this project exemplifies the power of modern front-end technologies. It not only showcases best practices in React development but also provides an intuitive user experience. Deployed on Vercel, it ensures fast loading times and seamless interactions, making it an ideal platform for job seekers and employers alike.",
    link: "https://github.com/sumiiit05/react-jobs",
  },
  {
    id: 2,
    title: "Todo list",
    img: "./todo.png",
    desc: "This React-based Todo List application empowers users to efficiently manage their tasks by seamlessly adding, deleting, and marking them as complete. With a sleek and minimalistic user interface, it's designed for responsiveness, ensuring a smooth experience across devices. The app showcases your expertise in front-end development through effective state management using hooks like, useState and useEffect.By implementing CRUD functionality and integrating local storage, users benefit from persistent task management across sessions. This project serves as a compelling example of how to build practical productivity tools with React, demonstrating both technical proficiency and an understanding of user needs.",
    link: "https://todolist-app-woad.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    img: "./portfolio.png",
    desc: "As the creator of this React-based portfolio, I designed it to enhance user experience through engaging animations. Built using React and Vite, I focused on a minimalist yet dynamic aesthetic that allows visitors to interactively explore my work. This project serves as a personal showcase, demonstrating my skills in React development, responsive design, and the use of animation libraries to create a fluid and captivating experience.",
    link: "https://portfolio-sumit-rauts-projects-799280e1.vercel.app/",
  },
  {
    id: 4,
    title: "Nasa Reactjs App",
    img: "./apod.png",
    desc: "In this React-based project, I leveraged NASA's Astronomy Picture of the Day (APOD) API to create a user-friendly and visually engaging experience. The app seamlessly fetches daily astronomical images and videos, complete with detailed descriptions from NASA, allowing users to explore and browse through different dates. This project showcases my skills in API integration, state management, and responsive design. Utilizing key React features such as functional components, hooks (like useState and useEffect), and custom styling, I crafted an application that exemplifies both technical expertise and creative flair in front-end development.",
    link: "https://nasa-reactjs-app.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>Visit</button>
            </a>
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
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
