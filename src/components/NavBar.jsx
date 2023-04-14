import { Link } from "react-router-dom";

function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ position: "absolute", bottom: 100, left: 0, right: 0 }}>
      <nav>
        <div>
          <Link to="/">Aarón Barcos</Link>
          <div style={{}}>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <li>
                <button onClick={() => scrollToSection("about")}>About</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")}>Projects</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("technologies")}>Technologies</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
