import {useState} from "react";
// importing functions for rendering
import Description from "./Description";
import LinkDescription from "./LinkDescription";

// Card function to print Project cards in Portfolio screen
export default function Card() {
  const [desc, setDesc] = useState(true);
  return (
    <section
      className="card text-center col-sm-12 col-md-12 col-lg-5 mb-4 mx-1 my-3 "
      style={{backgroundImage: 'url("public/contactBG.jpg")'}}
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
      <LinkDescription isDescription={desc} />
    </section>
  );
}
