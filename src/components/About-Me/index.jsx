// importing styles for page
import "./about.css";
// exporting function to pring About me page
export default function About() {
  return (
    <section>
      <img src="./mykhaportrait.jpg" alt="portrait" className="protfolio" />
      <h2>About Me</h2>
      <p className="about">
        Welcome to my profile! I'm Mykhailo Zakharkiv, a fresh-faced programmer
        eager to make my mark in the tech industry. With a recent completion of
        a bootcamp, I'm equipped with the latest programming skills and ready to
        take on exciting challenges. Let's connect and collaborate on
        cutting-edge projects!
      </p>
    </section>
  );
}
