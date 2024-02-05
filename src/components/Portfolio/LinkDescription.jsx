// function to print Description or Link inside the Card element
export default function LinkDescription({
  isDescription,
  gitLink,
  languages,
  smallDesc,
}) {
  const imageArr = languages.map((img) => (
    <img
      key={Math.floor(Math.random() * 1000)}
      src={`./projectData/languagesIcons/${img}`}
      className="me-3 img-arr "
    />
  ));
  // logic to chose wich info to print
  if (!isDescription) {
    return (
      <article className=" d-flex flex-column  gap-5 ">
        <div className="card-body "></div>
        <div className="card-footer">
          <h3 className="h4">GitHub link:</h3>
          <a href={gitLink}>
            <img src="./github.svg" className="me-3 rounded-circle git-link " />
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
