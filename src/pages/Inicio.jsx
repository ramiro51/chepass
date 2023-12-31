import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cuenta from './Cuenta';
import '../styles/lightmode/inicio.css'



const Inicio = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked)
    console.log(isChecked)
  }

  let [tema, setTema] = useState()
  useEffect(() => {
    
    if (isChecked === false) {
      setTema('./src/styles/lightmode/inicio.css');
    } else if (isChecked === true) {
      setTema('./src/styles/darkmode/inicio.css');
    }
  }, [isChecked]);

  return (
    <div id="content">
      <main>
        <div id="color-mode-box">
        <label className="toggle-button">
            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
            <span className="slider"></span>
          </label>
        </div>
        <section id="left">
          <article>
            <h1>Hola Ramiro, bienvenido a tu ChePass</h1>
          </article>
          <article id="infoygold">
            <div id="info-chenotes">
              <a href="#">Como utilizar ChePass</a>
              <a href="#">Información y privacidad</a>
            </div>
            <div id="gold">
              <p>No te pierdas los beneficios del plan Gold de ChePass</p>
              <a href="#" id="beneficios">Ver beneficios</a>
            </div>
          </article>
        </section>
        <section id="right">
          <article id="options">
            <Link to="/cuenta">Registrar una cuenta</Link>
            <a href="#">Configuración</a>
            <div id="password-search-box">
              <input type="text" id="password-search" placeholder="nombre, email o usuario de la cuenta"/>
              <i className="bi bi-search"></i>
            </div>
          </article>
          <article id="passwords">
            <h2>Tus cuentas</h2>
            <div id="recent-passwords">
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
              <a href="#">asd@gmail.com - m•••••</a>
            </div>
          </article>
        </section>
        </main>
    </div>
  )
}

export default Inicio