import "./contact.css";
export default function Contact() {
  return (
    <section className="form-dark bg">
      <form className="card card-image contact my-5">
        <div className=" rgba-stylish-strong py-5 px-5 z-depth-2">
          <div className="text-center">
            <h3 className=" mb-5 mt-4 font-weight-bold">
              <strong>
                Contact <span className="me">Me</span>
              </strong>
            </h3>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              id="form-name"
              className="form-control "
              placeholder="yourname"
            />
            <label className="">Your name</label>
          </div>

          <div className="md-form form-floating mb-3">
            <input
              type="text"
              id="form-email"
              className="form-control"
              placeholder="email"
            />
            <label className="">Your email</label>
          </div>

          <div className="md-form mb-5 form-floating mb-3">
            <textarea
              type="text"
              id="message"
              name="message"
              rows="2"
              className="form-control md-textarea "
              placeholder="massage"
            ></textarea>
            <label className="">Your message</label>
          </div>

          <div className="row d-flex align-items-center">
            <div className="text-center mb-3 col-md-12">
              <button
                type="button"
                className="btn btn-success btn-block btn-rounded z-depth-1 waves-effect waves-light"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
