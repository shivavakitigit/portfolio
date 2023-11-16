import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import NavLinks from "./NavLinks";

/**
 * Represents the header component containing the logo and navigation links.
 *
 * @component
 */

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.5, type: "spring" }}
            className="logo"
          >
            Siva Kumar
          </motion.div>
        </motion.div>
      </NavLink>
      {/* Navigation links */}
      <NavLinks />
    </header>
  );
};

export default Header;
