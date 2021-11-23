import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to={"/contact"}>
        <input type="button" className="button" value="Let's Connect!" />
      </Link>
    </footer>
  );
};

export default Footer;
