import "./resume.css";
export default function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <object className="pdf" type="application/pdf" data="./resume.pdf">
        <p>
          <img src="./resume.jpg" className="pdf-img" />
          <p className="d-flex justify-content-around ">
            <a
              href="./resume.pdf"
              download="Mykhailo-Profile"
              className="dowPdf"
            >
              Download PDF 📑
            </a>
          </p>
        </p>
      </object>
    </section>
  );
}
