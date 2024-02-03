export default function Card() {
  return (
    <section
      className="card text-center col-sm-12 col-md-12 col-lg-5 mb-4 mx-1 my-3"
      style={{backgroundImage: 'url("public/contactBG.jpg")'}}
    >
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <button type="button" className="btn btn-dark mx-3">
              Active
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-dark">
              Link
            </button>
          </li>
        </ul>
      </div>
      <article className="card-body"></article>
    </section>
  );
}
