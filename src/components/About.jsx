import React from 'react';
import './about.css'

export const About = ({about}) => {
  return (
    <div className="about">
      <div className="card">
      <h3>Sobre mi</h3>
        {about.aboutMe.map((item) => {
          return (
            <div key={item.info}>
              <p>
                {item.info}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
