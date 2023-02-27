import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField } from '@mui/material';

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
      
      <TextField label="Name" type="text" name="from_name" /><br /><br />
      <TextField label="E-mail" type="email" name="from_email" /><br /><br />
      <TextField label="Message" multiline name="message" /><br /><br />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs