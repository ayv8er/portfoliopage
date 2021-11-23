import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="introMain">
      <div className="introLeft">
        <h3>image</h3>
      </div>
      <div className="introRight">
        <h2>Hello, I'm Richard</h2>
        <Link to={"/projects"}>
          <input type="button" className="button" value="My Projects" />
        </Link>
        <p>
          I'm a full stack web developer living in Austin, Texas with my smart
          and beautiful wife, and an adorable baby boy. I'm madly in love with
          creating and maintaining apps that provide users with amazing
          experiences.
          <br />
          <br />
          I find joy when working in a team, solving problems, and learning new
          things. I believe in constant development because you're either
          growing or dying. I'm a private pilot, Cryptocurrency enthusiast, and
          a fan of all documentaries.
          <br />
          <br />
          I'm also looking to work on an ambitious project with positive people
          for the benefit of our customers. <br />
          <br />
          But I especially look forward to our conversation.
        </p>
      </div>
    </section>
  );
};

export default Intro;
