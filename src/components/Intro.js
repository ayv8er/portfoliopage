import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="introMain">
      <div className="introLeft">
        <h3>image</h3>
      </div>
      <div className="introRight">
        <h3>Richard J Oh</h3>
        <Link to={"/projects"}>
          <input type="button" className="introButton" value="My Projects" />
        </Link>
        <p>
          simple paragraph introduction simple paragraph introduction simple
          paragraph introduction simple paragraph introduction simple paragraph
          introduction simple paragraph introduction
        </p>
      </div>
    </section>
  );
};

export default Intro;
