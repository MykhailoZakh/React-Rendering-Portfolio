import {useState} from "react";
export default function Card() {
  const [link, setLink] = useState(false);
  const [desc, setDesc] = useState(true);
  return (
    <section
      className="card text-center col-sm-12 col-md-12 col-lg-5 mb-4 mx-1 my-3 "
      style={{backgroundImage: 'url("public/contactBG.jpg")'}}
    >
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <button type="button" className="btn btn-dark">
              Description
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                setLink(!link);
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
      <article
        className=" d-flex flex-column justify-content-between gap-5 "
        style={{visibility: link ? "visible" : "hidden"}}
      >
        <div className="card-body ">
          <h2 className="">Project Name</h2>
          <p className="">Small Description</p>
        </div>
        <div className="card-footer">
          <img
            src="public\github.svg"
            className="me-3 rounded-circle git-link "
          />
        </div>
      </article>
    </section>
  );
}
