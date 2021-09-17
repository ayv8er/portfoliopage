import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h3>Click for Contact Info</h3>
        </div>

        <Link to={"/contact"}>
          <input type="button" value="Contact Me" />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
