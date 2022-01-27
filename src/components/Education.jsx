import React from 'react';
import './education.css'

export const Education = ({education}) => {
  return  (
    <div className="education">
      <div className="card">
        <h3>Mis estudios</h3>
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>
                <b>{item.name}</b>
              </p>
              <p>
                {item.where}
              </p>
              <p>
                {item.date}
              </p>
              <p><small>{item.description}</small></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
