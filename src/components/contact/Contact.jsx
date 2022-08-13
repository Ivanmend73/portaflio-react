import "./contact.css";
import Phone from "../../img/phone.png";
//import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e0ot4ar",
        "template_8y30xkf",
        formRef.current,
        "MBcfimDGujLOzgosR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">CONTACTAME</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +51 924 885 615
            </div>

            <div className="c-info-item">
              <img className="c-icon" src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="" />
              ivan6361e@gmail.com
            </div>

            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Peru-Lima
            </div>

            <div className="c-info-item">
              <img className="c-icon" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                <a href="https://github.com/Ivanmend73" target="_blank" style={{backgroundColor: darkMode && "#222", color: darkMode && "#fff"}} id="github" >Github</a>
            </div>

          </div>
        </div>
        <div className="c-right">
          <p className="c-desc" style={{fontSize:"1.2rem"}}>
            <b>Ponerse en contacto. Siempre disponible para trabajar independientemente si surge el proyecto adecuado.</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nombre" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Tema" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Mensaje" name="message" />
            <button type="submit" value="Send">Enviar</button>
            {done && "Gracias..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
