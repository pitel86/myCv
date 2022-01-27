import React from "react";
import "./more.css";

export const More = ({ languages, abilities }) => {
  return (
    <div className="more">
      <div className="card">
        <h3>Lenguajes</h3>
        <div key={languages.language}>
          <p>
            <b>{languages.language}</b>
          </p>
          <p>{languages.wrlevel}</p>
          <p>{languages.splevel}</p>
        </div>
      </div>
      <div className="card">
        <h3>Skills</h3>
        {abilities.map((item) => {
          return (
            <div key={item}>
              <p>
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
