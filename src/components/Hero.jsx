import React from "react";
import './hero.css'

export const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="" />
      <div className="card-hero">
        <h2>
          {hero.name} {hero.surname}
        </h2>
        <p>{hero.city} </p>
        <p>{hero.birthDate}</p>
        <p>
          <a href={"mailto:" + hero.email}>Mi email</a>
        </p>
        <p>
          <a href={hero.gitHub}>GitHub</a>
        </p>
      </div>
    </div>
  );
};
