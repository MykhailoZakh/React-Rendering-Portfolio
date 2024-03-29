import "./footer.css";

// function to add footer to all screens
export default function Footer() {
  return (
    <footer>
      <div className="d-flex flex-row justify-content-center ">
        <a href="https://github.com/MykhailoZakh">
          <img src="./github.svg" className="footerIco round"></img>
        </a>
        <a href="https://www.linkedin.com/in/mykhailo-zakharkiv-359832286/">
          <img src="./linkedin.svg" className="footerIco"></img>
        </a>
        <a href="https://stackoverflow.com/users/22684216/mykhailo-zakharkiv">
          <img src="./stack-overflow.svg" className="footerIco round"></img>
        </a>
      </div>
    </footer>
  );
}
