import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div>
        <img />
      </div>

      <div>
        <h3>Richard J Oh</h3>

        <Link to={"/projects"}>
          <input type="button" value="My Projects" />
        </Link>

        <p>simple paragraph introduction</p>
      </div>
    </>
  );
};

export default Intro;
