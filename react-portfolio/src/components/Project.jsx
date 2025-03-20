import Lang from "./Lang";

export default function Project({ title, description, languages, link }) {
  return (
    <a
      className="projectLink"
      href={link}
      target="_blank"
      style={{ maxHeight:"100%" }}
    >
      <div
        className="projects"
        style={{
          color: "black",
          backgroundColor: "lightgrey",
          fontFamily: "Windows95Font",
          paddingTop: "5px",
          borderWidth: "2px",
          borderStyle: "outset",
          borderColor: "buttonborder",
          display: "flex",
          flexDirection: "column", // Stack items vertically
          minHeight:"100%"
        }}
      >
        <p
          className="projectTitle" style={{
            marginTop: "0",
            marginBottom: "5px",
            marginLeft: "10px",
          }}
        >
          {title}
        </p>
        <p className="projectDesc"
          style={{
            marginBottom: 2,
            marginTop: "0px",
            marginLeft: "8px",
          }}
        >
          {description}
        </p>
        <div
          style={{
            marginTop:"auto",
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: "5px", // Optional: Adds a bit of space at the bottom
          }}
        >
          {languages.map((language, index) => (
            <Lang key={index} Language={language} />
          ))}
        </div>
      </div>
    </a>
  );
}
