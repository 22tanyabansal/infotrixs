import React from "react";
import "./Contact.css";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ohl32wo",
      "template_qy02yhb",
      form.current,
      "Pemwv6hv1B9peNo62"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <center>
        <h4>Get in Touch</h4>
      </center>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailUnread className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tanyabansal2003@gmail.com</h5>
            <a href="mailto:tanyabansal2003@gmail.com" target="__blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 8439345353</h5>
            <a
              href="https://wa.me/8439345253?text=Message%20me...i%20am%20tanya%20bansal..."
              target="__blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
