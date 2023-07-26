import { useRef, useEffect, useState } from 'react';
import '../styles/lightmode/nota.css'

const Nota = () => {

  const textareaRef = useRef(null);
  const [fontSize, setFontSize] = useState(22);

  useEffect(() => {
    // Enfocar el textarea al montar el componente
    textareaRef.current.focus();
  }, []);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto'; // Restablecer la altura para recalcularla en función del contenido
    textarea.style.height = `${textarea.scrollHeight}px`; // Ajustar la altura según el contenido
    // Ajustar la altura del contenedor padre (#content) según la altura del textarea
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value)
    const textarea = textareaRef.current;
    textarea.style.height = 'auto'; // Restablecer la altura para recalcularla en función del contenido
    textarea.style.height = `${textarea.scrollHeight}px`; // Ajustar la altura según el contenido
    // Ajustar la altura del contenedor padre (#content) según la altura del textarea
  }

  return (
    <div id='content'>
      <textarea style={{fontSize: `${fontSize}px`}} ref={textareaRef} onChange={handleInput} placeholder='Escribe algo'></textarea>
      <div id="options">
        <select className='option' id="font-size-select" name="font-size" onChange={handleFontSizeChange}>
          <option value="6">6 px</option>
          <option value="8">8 px</option>
          <option value="10">10 px</option>
          <option value="12">12 px</option>
          <option value="14">14 px</option>
          <option value="16">16 px</option>
          <option value="18">18 px</option>
          <option value="20">20 px</option>
          <option value="22">22 px</option>
          <option value="24">24 px</option>
          <option value="26">26 px</option>
          <option value="28">28 px</option>
          <option value="30">30 px</option>
          <option value="32">32 px</option>
          <option value="34">34 px</option>
          <option value="36">36 px</option>
          <option value="38">38 px</option>
          <option value="40">40 px</option>
          <option value="42">42 px</option>
          <option value="44">44 px</option>
          <option value="46">46 px</option>
          <option value="48">48 px</option>
        </select>
      </div>
    </div>
  )
}

export default Nota