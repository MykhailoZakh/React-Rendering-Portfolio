// importing styles for resume page
import "./resume.css";
// function to print pdf obj to resume page
export default function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      {/* pdf obj */}
      <object className="pdf" type="application/pdf" data="./resume.pdf">
        <img src="./resume.jpg" className="pdf-img" />
        <p className="d-flex justify-content-around ">
          <a href="./resume.pdf" download="Mykhailo-Profile" className="dowPdf">
            Download PDF 📑
          </a>
        </p>
      </object>
    </section>
  );
}
