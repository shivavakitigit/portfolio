import { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  // State to hold GitHub information
  const [gitHubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    // Fetch GitHub repository information
    fetch("https://api.github.com/repos/mdSiva Kumar/my-portfolio")
      .then((res) => res.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  // Variants for button animation
  const buttonVariants = {
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 1,
    },
  };

  return (
    <footer>
      <SocialIcons />
    </footer>
  );
};

export default Footer;
