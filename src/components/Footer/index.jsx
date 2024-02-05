import "./footer.css";
// import '../../../public'
export default function Footer() {
  return (
    <footer>
      <div className="d-flex flex-row justify-content-center ">
        <a href="https://github.com/MykhailoZakh">
          <img
            src="../../../public\github.svg"
            className="footerIco round"
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/mykhailo-zakharkiv-359832286/">
          <img src="../../../public\linkedin.svg" className="footerIco"></img>
        </a>
        <a href="https://stackoverflow.com/users/22684216/mykhailo-zakharkiv">
          <img
            src="../../../public/stack-overflow.svg"
            className="footerIco round"
          ></img>
        </a>
      </div>
    </footer>
  );
}
