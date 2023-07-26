import { useState } from 'react'
import '../styles/lightmode/cuenta.css'

const Nota = () => {

  const [nombreCuenta, setNombreCuenta] = useState('')
  const [usuarioCuenta, setUsuarioCuenta] = useState('')
  const [emailCuenta, setEmailCuenta] = useState('')
  const [contraseñaCuenta, setContraseñaCuenta] = useState('')
  const [nota, setNota] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()


  }

  return (
    <div id='content'>
      <form onSubmit={handleSubmit} id='main-form'>
        <h4>Registrar cuenta</h4>
        <input onChange={(e) => {setNombreCuenta(e.target.value)}} type="text" placeholder='Nombre (ej: Google)'/>
        <input onChange={(e) => {setUsuarioCuenta(e.target.value)}} type="text" placeholder='Usuario (opcional)'/>
        <input onChange={(e) => {setEmailCuenta(e.target.value)}} type="email" placeholder='Correo (opcional)'/>
        <div id="password-box">
          <input onChange={(e) => {setContraseñaCuenta(e.target.value)}} type="password" placeholder='••••••••' id='password-input'/>
          <i className="bi bi-eye-fill"></i>
        </div>
        <textarea onChange={(e) => {setNota(e.target.value)}} id="detalles" placeholder='Detalle / Nota (150 caracteres)' maxLength={150}></textarea>
        <div id='bottom'>
          <a>Protección de datos</a><button id='registrar-nota'>Registrar</button>
        </div>
      </form>
    </div>
  )
}

export default Nota