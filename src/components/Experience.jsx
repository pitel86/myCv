import React from "react";
import "./experience.css";

export const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <div className="card">
        <h3>Experiencia laboral</h3>
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>
                <b>{item.name}</b>
              </p>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>
                <small>{item.description}</small>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
