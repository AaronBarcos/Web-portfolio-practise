import { useState } from "react";
import AboutMe from "../pages/sections/AboutMe";
import Technologies from "../pages/sections/Technologies";
import Projects from "../pages/sections/Projects";

function Carousel(props) {
  const components = [<AboutMe />, <Technologies />, <Projects />];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedComponents, setSelectedComponents] = useState(components[0]);

  const darkMode = "text-black dark:text-white"

  const previous = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setSelectedComponents(components[selectedIndex - 1]);
    }
  };

  const next = () => {
    if (selectedIndex < components.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setSelectedComponents(components[selectedIndex + 1]);
    }
  };

  return (
    <div>
      <div className="flex">
        <button onClick={previous}>{"<"}</button>
        {selectedComponents}
        <button onClick={next}>{">"}</button>
      </div>
      <div className="flex justify-center gap-11">
        <button className={darkMode} onClick={() => setSelectedComponents(components[0])}>
          About me
        </button>
        <button className={darkMode} onClick={() => setSelectedComponents(components[1])}>
          Technologies
        </button>
        <button className={darkMode} onClick={() => setSelectedComponents(components[2])}>
          Projects
        </button>
      </div>
    </div>
  );
}

export default Carousel;
