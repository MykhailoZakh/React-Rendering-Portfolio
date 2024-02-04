import Card from "./ProjectCard";
// function to export group of the cards
export default function Group({groupName, projectArr}) {
  // maping new array to send card with all info of 1 project
  const pArr = projectArr.map((project) => (
    <Card
      key={project.key}
      bgImage={project.bgImage}
      gitLink={project.gitLink}
      languages={project.languages}
      name={project.name}
      smallDesc={project.smallDesc}
    />
  ));
  return (
    <div className="container">
      <h2 className="row">{groupName}</h2>
      <div className="row d-flex justify-content-around">{pArr}</div>
    </div>
  );
}
