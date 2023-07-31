import React from "react";
import { LabelStyle, DivInput, InputStyle, LeyendaError, IconoValidacion } from '../FormularioContainer/FormularioContainer';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


const InputContainer = ({ type, label, placeholder, name, id, error, expresionRegular, estado, cambiarEstado, funcion }) => {
  const onChange = (e) => {
    cambiarEstado({ ...estado, valor: e.target.value })
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.valor)) {
        cambiarEstado({ ...estado, valido: 'true' });
      } else {
        cambiarEstado({ ...estado, valido: 'false' });
      };
    };

    if (funcion) {
      funcion();
    };
  };

  return (
    <div>
      <LabelStyle htmlFor={name} valido={estado.valido}>{label}</LabelStyle>
      <DivInput className='inputImagen'>
        <InputStyle
          type={type}
          name={name}
          placeholder={placeholder}
          id={id}
          value={estado.valor}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />
        <IconoValidacion
          icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
          valido={estado.valido}
        />
      </DivInput>
      <LeyendaError valido={estado.valido}>{error}</LeyendaError>
    </div>)
};

export default InputContainer;