import "./resume.css";
export default function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <object className="pdf" type="application/pdf" data="./resume.pdf">
        <p>
          This browser does not support PDFs. Please download the PDF to view
          <a href="./resume.pdf" download="Mykhailo-Profile">
            Download PDF
          </a>
        </p>
      </object>
    </section>
  );
}
