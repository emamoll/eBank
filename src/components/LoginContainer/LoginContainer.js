import './LoginContainer.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Titulo, SectionForm, Formulario, BotonStyle, Boton, MensajeExito } from '../FormularioContainer/FormularioContainer';
import InputContainer from '../InputContainer/InputContainer';
import axios from 'axios'

const LoginContainer = () => {
  const [correo, setCorreo] = useState({ valor: '', valido: null });
  const [contrasenia, setContrasenia] = useState({ valor: '', valido: null });
  const [formularioCorrecto, setFormularioCorrecto] = useState(null)
  async function onSubmit(e) {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/', {
        correo, contrasenia
      })
    } catch (error) {
      console.log(error)
    }

    if (correo.valido === 'true' &&
      contrasenia.valido === 'true') {
      setFormularioCorrecto(true);
      setCorreo({ valor: '', valido: null });
      setContrasenia({ valor: '', valido: null });

    } else {
      setFormularioCorrecto(false);
    }
  }
  return (
    <div className='login'>
      <SectionForm>
        <Titulo>Iniciar cesion</Titulo>
        <Formulario action='POST' onSubmit={onSubmit}>
          <InputContainer
            type='email'
            label='Correo electronico'
            placeholder='juanjperez@correo.com'
            name='correoElectronico'
            id='correoElectronico'
            estado={correo}
            cambiarEstado={setCorreo}
          />
          <InputContainer
            type='password'
            label='Contraseña'
            placeholder='1234'
            name='contrasenia'
            id='contrasenia'
            estado={contrasenia}
            cambiarEstado={setContrasenia}
          />
          <BotonStyle>
            <Boton type='submit'>Registrarse</Boton>
            {formularioCorrecto === true && <MensajeExito>Cesion inciada</MensajeExito>}
          </BotonStyle>
        </Formulario>
        <Link to={'/signup'} className='link'>Todavia no tienes cuenta?, registrate</Link>
      </SectionForm>
    </div>

  )
};

export default LoginContainer