export default function LinkDescription({
  isDescription,
  gitLink,
  languages,
  smallDesc,
}) {
  const imageArr = languages.map((img) => (
    <img
      key={Math.floor(Math.random() * 1000)}
      src={`/public/projectData/languagesIcons/${img}`}
      className="me-3 img-arr "
    />
  ));
  if (!isDescription) {
    return (
      <article className=" d-flex flex-column  gap-5 ">
        <div className="card-body "></div>
        <div className="card-footer">
          <h3 className="h4">GitHub link:</h3>
          <a href={gitLink}>
            <img
              src="/public/github.svg"
              className="me-3 rounded-circle git-link "
            />
          </a>
        </div>
      </article>
    );
  } else {
    return (
      <article className=" d-flex flex-column   ">
        <div className="card-body "></div>
        <div className="card-footer">
          <p className="small-desc">{smallDesc}</p>
          <h4 className="h4">Languages used:</h4>
          <ul className="h4">{imageArr}</ul>
        </div>
      </article>
    );
  }
}
