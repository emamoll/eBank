import './FormularioContainer.css';
import style, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colores = {
  borde: '#0075FF',
  error: '#BB2929',
  exito: '#1ED12D'
};

const Titulo = style.h1`
  margin-bottom: 10px;
  margin-top: -40px
`

const Formulario = style.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  };
`;

const SectionForm = style.section`
  max-width: 600px;
  width: 90%;
  margin: auto;
  padding: 40px;
  @media (max-width: 800px) {
    max-width: 400px;
    width: 100%;
  };
`;

const LabelStyle = style.label`
  display: block;
  padding: 10px;
  min-width: 40px;
  cursor:pointer;

  ${props => props.valido === 'false' && css`
    color: ${colores.error}
  `}
`;

const DivInput = style.div`
  position: relative;
  z-index: 90;
`;

const InputStyle = style.input`
  width: 85%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 0;
  transition: .3s ease all;
  border:  3px solid transparent;

  @media (max-width: 800px) {
    width: 90%
  };

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4)
  }

  ${props => props.valido === 'true' && css`
    border:  3px solid transparent;
  `}

  ${props => props.valido === 'false' && css`
    border:  3px solid ${colores.error} !important;
  `}
`;

const LeyendaError = style.p`
  font-size: 12px;
  margin: 0;
  color: ${colores.error};
  display: none;

  ${props => props.valido === 'true' && css`
    display: none
  `}

  ${props => props.valido === 'false' && css`
    display: block
  `}
`;

const IconoValidacion = style(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0

  ${props => props.valido === 'false' && css`
    opacity: 1;
    color: ${colores.error}
  `}

  ${props => props.valido === 'true' && css`
  opacity: 1;
  color: ${colores.exito}
`}
`;

const Terminos = style.div`
  grid-column: span 2;
  input {
    margin-right: 10px;
  }
  @media(max-width: 800px){
    grid-column: span 1
  }
`;
const BotonStyle = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
  @media(max-width: 800px){
    grid-column: span 1
  }
`;

const Boton = style.button`
  height: 45px;
  line-height: 45px;
  width: 30%;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: .1s ease all;

  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

const MensajeExito = style.p`
  font-size: 14px;
  color: ${colores.exito};
`;

const MensajeError = style.div`
  height: 45px;
  line-height: 45px;
  background: #F66060;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;

  p {
    margin:  0
  }

  b{
    margin-left: 10px
  }
  @media(max-width: 800px){
    grid-column: span 1
  }
`;


export {
  Titulo,
  SectionForm, 
  Formulario, 
  LabelStyle, 
  DivInput, 
  InputStyle, 
  LeyendaError, 
  IconoValidacion, 
  Terminos, 
  BotonStyle, 
  Boton, 
  MensajeExito, 
  MensajeError
};