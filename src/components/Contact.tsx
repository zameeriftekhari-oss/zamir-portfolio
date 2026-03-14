import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:zamir.iftekhari@gmail.com" data-cursor="disable">
                zamir.iftekhari@gmail.com
              </a>
            </p>

            <h4>Education</h4>
            <p>BA Liberal Arts</p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://www.linkedin.com/in/zamir-iftekhari-2b781a42"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/xameeeeer"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>

            <h4 style={{ marginTop: "20px" }}>WhatsApp</h4>

            <a
              href="https://wa.me/917719859366"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              India (+91-7719859366) <MdArrowOutward />
            </a>

            <a
              href="https://wa.me/971522610460"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              UAE (+971-522610460) <MdArrowOutward />
            </a>

          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Zamir Iftekhari</span>
            </h2>

            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;