export default function LinkDescription({isDescription}) {
  if (!isDescription) {
    return (
      <article className=" d-flex flex-column  gap-5 ">
        <div className="card-body ">
          <h2 className="">Project Name</h2>
        </div>
        <div className="card-footer">
          <img
            src="public\github.svg"
            className="me-3 rounded-circle git-link "
          />
        </div>
      </article>
    );
  } else {
    return <div></div>;
  }
}
