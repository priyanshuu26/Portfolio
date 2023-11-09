import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_0lodq9r',
        'template_f7uay2g',
        form.current,
        '9URKqJHzE4SSCcau5'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('thanks for getting connencted');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div id="stars" />
      <section className="contact" id="contact">
        <div className="contact-text">
          <h2>
            Contact <span>Me!</span>
          </h2>
          <h4>If You Have Any Project In Your Mind.</h4>
          <p>
            I"m a Front-end Developer as well as UI/UX designer- creating bold &
            brave interface designs for companies all across the world..
          </p>
          <div className="list">
            <li>
              <a aria-label="contact" href="/#" />
              +91 6232802607
            </li>
            <li>
              <a aria-label="emial" href="/#" />
              buley2607@gmail.com
            </li>
          </div>
          <div className="contact-icons">
            <a aria-label="git" href="https://github.com/" rel="noopener">
              <i className="bx bxl-github " />
            </a>
            <a aria-label="emial" href="/#">
              <i className="bx bxl-gmail " />
            </a>
            <a
              aria-label="linkedin"
              href="https://www.linkedin.com/in/priyanshu-buley-16467727b/"
              rel="noopener"
            >
              <i className="bx bxl-linkedin " />
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="name"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email Address "
              required
            />
            <input
              type="number"
              name="user_number"
              placeholder="Your Mobile Number"
              required
            />
            <textarea
              name="message"
              cols="35"
              rows="10"
              placeholder="How Can I Help You"
            />
            <input type="submit" value="Send" className="submit" required />
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
