import "./portfolio.css";
import Card from "./ProjectCard";
export default function Portfolio() {
  return (
    <section className="wrapper ">
      <div className="container">
        <h2 className="row">Name of the Group</h2>
        <div className="row d-flex justify-content-around">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
