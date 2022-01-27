import "./App.css";
import { useState } from "react";
import { Hero } from "./components/Hero.jsx";
import { Experience } from "./components/Experience.jsx";
import { Education } from "./components/Education.jsx";
import { About } from "./components/About.jsx";
import { More } from "./components/More.jsx";
import data from "./cv/cv.json";

const { hero, about, experience, education, languages, abilities } = data;

function App() {
  const [menu, setMenu] = useState(0);
  return (
    <div className="App">
      <Hero hero={hero} />
      <div className="navbar">
        <button onClick={() => setMenu(1)}>
          <img
            src="https://cdn.icon-icons.com/icons2/1367/PNG/128/32officeicons-25_89711.png"
            alt="Sobre mi"
          />
          Sobre mi
        </button>
        <button onClick={() => setMenu(2)}>
          <img
            src="https://cdn.icon-icons.com/icons2/1367/PNG/128/32officeicons-9_89719.png"
            alt="Experiencia"
          />
          Experiencia
        </button>
        <button onClick={() => setMenu(3)}>
          <img
            src="https://cdn.icon-icons.com/icons2/1367/PNG/128/32officeicons-7_89710.png"
            alt="Estudios"
          />
          Estudios
        </button>
        <button onClick={() => setMenu(4)}>
          <img
            src="https://cdn.icon-icons.com/icons2/1367/PNG/128/32officeicons-17_89703.png"
            alt="Otras habilidades"
          />
          Otras habilidades
        </button>
      </div>

      {menu === 1 ? (
        <About about={about} />
      ) : menu === 2 ? (
        <Experience experience={experience} />
      ) : menu === 3 ? (
        <Education education={education}/>
      ) : menu === 4 ? (
        <More languages={languages} abilities={abilities} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
