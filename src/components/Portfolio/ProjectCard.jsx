import {useState} from "react";
// importing functions for rendering
import LinkDescription from "./LinkDescription";

// Card function to print Project cards in Portfolio screen
export default function Card({bgImage, gitLink, languages, name, smallDesc}) {
  const [desc, setDesc] = useState(true);
  return (
    <section
      className="card text-center col-sm-12 col-md-12 col-lg-5 mb-4 mx-1 my-3 "
      style={{backgroundImage: `url("public/projectData/bgImg/${bgImage}")`}}
    >
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                setDesc(!desc);
              }}
            >
              Description
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                setDesc(!desc);
              }}
              type="button"
              className="btn btn-dark mx-3"
            >
              Link
            </button>
          </li>
        </ul>
      </div>
      <h2 className="cardH">{name}</h2>
      <LinkDescription
        isDescription={desc}
        gitLink={gitLink}
        languages={languages}
        smallDesc={smallDesc}
      />
    </section>
  );
}
