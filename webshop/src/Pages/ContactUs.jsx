import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k2x4akd', 'template_ur6xe9p', form.current, '9m5HrW0meg7HA2G4M')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Sinu nimi</label><br />
      <input type="text" name="from_name" /><br />
      <label>Email</label><br />
      <input type="email" name="from_email" /><br />
      <label>Message</label><br />
      <textarea name="message" /><br />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs