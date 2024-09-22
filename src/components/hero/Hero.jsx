import { motion } from "framer-motion";
import { animate } from "framer-motion";
import "./hero.scss";


const textVariants = {
    initial:{
        x: -500,
        opacity:0,
    },
    animate:{
        x: 0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
},

animate: {
    x: "-220%",
    transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
    },
},
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants = {textVariants} initial = "initial" animate = "animate">
          <motion.h2  variants = {textVariants}>SUMIT RAUT</motion.h2>
          <motion.h1  variants = {textVariants}>Software Engineer</motion.h1>
          <motion.div  variants = {textVariants} className="buttons">
            <motion.button  variants = {textVariants} >See the Latest Works</motion.button>
            <motion.button  variants = {textVariants}>Contact Me</motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants = {sliderVariants} initial = "initial" animate = "animate">
        Engineer Web Dev
      </motion.div>
      <div className="imageContainer">
        <img src="cover.png" alt="photograph" />
      </div>
    </div>
  );
};

export default Hero;
