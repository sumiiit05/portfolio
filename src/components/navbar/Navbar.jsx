import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>

        
          <div className="social">
            <a href="https://www.facebook.com/rsumithere">
              <img src="./facebook.png" alt="" />
            </a>
            <a href="https://www.instagram.com/sumiiit._/">
              <img src="./instagram.png" alt="" />
            </a>
            <a href="https://github.com/sumiiit05">
              <img src="./github.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/sumit-raut-462642240/">
              <img className="linkedin.png" src="./linkedin.png" alt="" />
            </a>
          </div>
        
      </div>
    </div>
  );
};

export default Navbar;
