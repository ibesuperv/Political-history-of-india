import emailjs from '@emailjs/browser';
import './footer.css';
import { useRef, useState } from 'react';

function Footer() {
  const form = useRef();
  const [uemail, setUemail] = useState('');
  const [uname, setUname] = useState('');
  const [msg, setMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_crg67oq",
      "template_mnf9zj8",
      {
        from_email: uemail,
        from_name: uname,
        message: msg,
      },{
        publicKey:"EW117FJmLisdVGUTk"
      }
    ).then(
      () => {
        alert('SUCCESS!');
      },
      (error) => {
        alert('FAILED...', error.text);
      }
    );
  };

  return (
    <div className="footer">
      <div className="container-footer">
        <p className='share'>Share your Thoughts....</p>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <input onChange={(e) => setUname(e.target.value)} value={uname} type="text" name="user_name" className='uname' placeholder='Enter your name' required />
          <input onChange={(e) => setUemail(e.target.value)} value={uemail} type="email" name="user_email" className='uemail' placeholder='Enter your email' required />
          <textarea onChange={(e) => setMsg(e.target.value)} value={msg} name="message" className='utexts' placeholder='Share thoughts' required />
          <div className="line"></div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
