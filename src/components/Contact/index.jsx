import {useState} from "react";
import "./contact.css";
export default function Contact() {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [text, setText] = useState(false);
  // function to check name has more than 3 letters
  const checkName = (e) => {
    e.preventDefault();
    if (e.target.value.length < 4) {
      setName(true);
    } else {
      setName(false);
    }
  };
  // function to check if email is correct
  const checkEmail = (e) => {
    e.preventDefault();

    const emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value);
    console.log(emailCheck);
    if (!emailCheck) {
      setEmail(true);
    } else {
      setEmail(false);
    }
  };
  const checkText = (e) => {
    e.preventDefault();
    !e.target.value ? setText(true) : setText(false);
  };
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
              onBlur={checkName}
            />
            <label className="">Your name</label>
            {name ? (
              <p className="errMsg">Name should have more then 3 letters</p>
            ) : (
              <></>
            )}
          </div>

          <div className="md-form form-floating mb-3">
            <input
              type="text"
              id="form-email"
              className="form-control"
              placeholder="email"
              onBlur={checkEmail}
            />
            <label className="">Your email</label>
            {email ? <p className="errMsg">Please add valid Email</p> : <></>}
          </div>

          <div className="md-form mb-5 form-floating mb-3">
            <textarea
              type="text"
              id="message"
              name="message"
              rows="2"
              className="form-control md-textarea "
              placeholder="massage"
              onBlur={checkText}
            ></textarea>
            <label className="">Your message</label>
            {text ? <p className="errMsg">Please add some text</p> : <></>}
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
