// importing style.css
import "./portfolio.css";
// importing rendering divs and data for projects
import data from "../../../public/projectData/projects";
import Group from "./Group";
// function to print Portfolio page
export default function Portfolio() {
  const groupsArr = data.map((group) => (
    <Group
      key={group.key}
      groupName={group.groupName}
      projectArr={group.projectArr}
    />
  ));
  return (
    <section className="wrapper ">
      <h2>Portfolio</h2>
      {groupsArr}
    </section>
  );
}
