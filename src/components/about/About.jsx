import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://hireline.io/blog/wp-content/uploads/2020/10/tec-programador.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mí</h1>
        <p className="a-sub" style={{paddingLeft: "20px"}}>
            Me llamo Ivan Mendoza Garcia estudiante de la carrera computacion en informatica en el instituto IDAT , tengo 19 años apasionado por la tecnologia y la programación.
        </p>
        <br/>
        <p className="a-desc">
          <b className="conocimiento">CONOCIMIENTOS:</b>
            <br/>
            <br/>
            <b>Fronted:</b>
            <br/>
              <p style={{padding: "0 10px"}}>
              Html <b>|</b>  CSS, Grid, FlexBox, Bootstrap, Tailwind, Material UI, <b>|</b> JAVASCRIPT, React, Jquery <b>|</b> Ajax, Fetch Api, Axios
              </p>
            <br/>
            <b>Backend:</b>
            <p  style={{padding: "0 10px"}}> NodeJs, Consumo de Api <b>|</b> MongoDB, PostreSQL</p>
            <br/>
            <b>Control de Versiones:</b>
            <p style={{padding: "0 10px"}}>Git, GitHub, Terminal</p>
        </p>
        <div className="a-award">
          <img src="https://www.exitopersonal.com/imagenes/como-ser-un-triunfador_x2.jpg" alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">LUCHA POR TUS SUEÑOS</h4>
            <p className="a-award-desc frase">
              Aunque te sientas perdido y sin fuerza recuerda que cada día puede ser el comienzo de algo maravilloso NO TE RINDAS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
