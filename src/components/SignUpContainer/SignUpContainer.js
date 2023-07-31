import './SignUpContainer.css';
import { useState } from 'react';
import { Titulo, SectionForm, Formulario, LabelStyle, Terminos, BotonStyle, Boton, MensajeExito, MensajeError } from '../FormularioContainer/FormularioContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import InputContainer from '../InputContainer/InputContainer';

const SignUpContainer = () => {
  const [firstName, setFirstName] = useState({ valor: '', valido: null });
  const [lastName, setLastName] = useState({ valor: '', valido: null });
  const [email, setEmail] = useState({ valor: '', valido: null });
  const [password, setPassword] = useState({ valor: '', valido: null });
  const [confirmPassword, setConfirmPassword] = useState({ valor: '', valido: null });
  const [age, setAge] = useState({ valor: '', valido: null });
  const [address, setAddress] = useState({ valor: '', valido: null });
  const [cellPhone, setCellphone] = useState({ valor: '', valido: null });
  const [terminos, setTerminos] = useState(false);
  const [formularioCorrecto, setFormularioCorrecto] = useState(null)
  const expresiones = {
    firstName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    cellPhone: /^\d{7,14}$/, // 7 a 14 numeros.
    address: /^[a-zA-ZÀ-ÿ0-9.\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    age: /^\d{1,3}$/, // 1 a 3 numeros.
  };
  const validarpassword = () => {
    if (password.valor.length > 0) {
      if (password.valor !== confirmPassword.valor) {
        setConfirmPassword((prevState) => {
          return { ...prevState, valido: 'false' }
        })
      } else {
        setConfirmPassword((prevState) => {
          return { ...prevState, valido: 'true' }
        })
      }
    }
  };
  const mayorEdad = () => {
    if (age.valor < 18) {
      setAge((prevState) => {
        return { ...prevState, valido: 'false' }
      })
    } else {
      setAge((prevState) => {
        return { ...prevState, valido: 'true' }
      })
    }
  };
  const onChangeTerminos = (e) => {
    setTerminos(e.target.checked)
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      firstName.valido === 'true' &&
      lastName.valido === 'true' &&
      age.valido === 'true' &&
      email.valido === 'true' &&
      password.valido === 'true' &&
      confirmPassword.valido === 'true' &&
      address.valido === 'true' &&
      cellPhone.valido === 'true' &&
      terminos
    ) {
      setFormularioCorrecto(true);
      setFirstName({ valor: '', valido: null });
      setLastName({ valor: '', valido: null });
      setAge({ valor: '', valido: null });
      setEmail({ valor: '', valido: null });
      setPassword({ valor: '', valido: null });
      setConfirmPassword({ valor: '', valido: null });
      setAddress({ valor: '', valido: null });
      setCellphone({ valor: '', valido: null });
      setTerminos(false)
    } else {
      setFormularioCorrecto(false);
    }
  };

  return (
    <div>
      <SectionForm>
        <Titulo>Complete el formulario para regitrarse</Titulo>
        <Formulario action='POST' className='formStyle' onSubmit={onSubmit}>
          <InputContainer
            type='text'
            label='Nombre'
            placeholder='Juan Jose'
            name='firstName'
            id='firstName'
            error='El nombre solo puede tener letras y espacios'
            expresionRegular={expresiones.firstName}
            estado={firstName}
            cambiarEstado={setFirstName}
          />
          <InputContainer
            type='text'
            label='lastName'
            placeholder='Perez'
            name='lastName'
            id='lastName'
            error='El lastName solo puede tener letras y espacios'
            expresionRegular={expresiones.lastName}
            estado={lastName}
            cambiarEstado={setLastName}
          />
          <InputContainer
            type='text'
            label='Edad'
            placeholder='18'
            name='age'
            id='age'
            error='Debe ser mayor de 18 años'
            expresionRegular={expresiones.age}
            estado={age}
            cambiarEstado={setAge}
            funcion={mayorEdad}
          />
          <InputContainer
            type='email'
            label='Correo electronico'
            placeholder='juanjperez@correo.com'
            name='email'
            id='email'
            error='El email solo debe tener letras, numeros, puntos, guiones y guion bajo'
            expresionRegular={expresiones.email}
            estado={email}
            cambiarEstado={setEmail}
          />
          <InputContainer
            type='password'
            label='Contraseña'
            placeholder='1234'
            name='password'
            id='password'
            error='La contraseña debe tener de 4 a 12 digitos'
            expresionRegular={expresiones.password}
            estado={password}
            cambiarEstado={setPassword}
          />
          <InputContainer
            type='password'
            label='Repita contraseña'
            placeholder='1234'
            name='confirmPassword'
            id='confirmPassword'
            error='Las contraseñas deben ser iguales'
            estado={confirmPassword}
            cambiarEstado={setConfirmPassword}
            funcion={validarpassword}
          />
          <InputContainer
            type='text'
            label='Direccion'
            placeholder='Av. Juan B Justo 2249'
            name='address'
            id='address'
            error='La direccion solo puede tener letras, numeros y puntos'
            expresionRegular={expresiones.address}
            estado={address}
            cambiarEstado={setAddress}
          />
          <InputContainer
            type='text'
            label='Telefono'
            placeholder='3511111111'
            name='cellPhone'
            id='cellPhone'
            error='El telefono debe tener entre 7 y 14 numeros'
            expresionRegular={expresiones.cellPhone}
            estado={cellPhone}
            cambiarEstado={setCellphone}
          />
          <Terminos>
            <LabelStyle>
              <input type='checkbox' name='terminos' id='terminos' checked={terminos} onChange={onChangeTerminos} />
              Acepto los terminos y condiciones
            </LabelStyle>
          </Terminos>
          {formularioCorrecto === false && <MensajeError>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor completa el formulario correctamente
          </MensajeError>}
          <BotonStyle>
            <Boton type='submit'>Registrarse</Boton>
            {formularioCorrecto === true && <MensajeExito>Registro exitoso</MensajeExito>}
          </BotonStyle>
        </Formulario>
      </SectionForm>
    </div >
  )
};

export default SignUpContainer;