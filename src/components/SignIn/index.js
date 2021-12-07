import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { publicAxios } from '../../store/utils/Axios';

import Page from '../Page';
import TextBox from '../UI/TextBox';
import Password from '../UI/Password';
import Content from '../UI/Content';
import { PrimaryButton } from '../UI/Button';
import logo from './spotify.png';

import { useSelector, useDispatch } from 'react-redux';

const getSecurity = ({ security }) => security;
const SignIn = () => {

  const [txtCorreo, setTxtCorreo] = useState("");
  const [txtPassword, setTxtPassword] = useState("");

  const security = useSelector(getSecurity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onBtnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      {
        type: "SEC_SIGNIN_FETCH",
        payload: null,
      }
    );
    publicAxios.post(
      '/api/sec/signin',
      {
        email: txtCorreo,
        pswd: txtPassword,
      }
    )
      .then(
        ({data}) => {
          console.log(data)
          dispatch(
            {
              type: "SEC_SIGNIN_SUCCESS"
            }
          );
          navigate('/login',{replace:true});
        }
      )
      .catch(
        (err) => {
          console.log(err);
          dispatch(
            {
              type: "SEC_SIGNIN_ERROR",
              payload: err,
            }
          );
        }
      );


  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.name === "txtCorreo") {
      setTxtCorreo(e.target.value);
    } else {
      setTxtPassword(e.target.value);
    }
  }
  const { hasErrors } = security;
  return (
    <Page showHeader={true} title="Crear Cuenta" showNavBar>
      <Content>
        <img src={logo} style={{width:"64px"}}/>
        <TextBox
          label="Correo Electrónico"
          value={txtCorreo}
          placeholder="Correo Electrónico Valido"
          onChange={onChangeHandler}
          name="txtCorreo"
        />
        <Password
          label="Contraseña"
          value={txtPassword}
          placeholder="Contraseña"
          onChange={onChangeHandler}
          name="txtPassword"
        />
        <div style={{ width: "100%", padding: '0.5em', marginTop: '1em' }}>
          <PrimaryButton onClick={onBtnClick}>Crear Cuenta</PrimaryButton>
        </div>
        {
          (hasErrors && (
            <div style={{ width: "100%", padding: '0.5em', marginTop: '1em', color:'#F00' }}>
              Error al crear su cuenta, intente nuevamente.
            </div>
          ))
        }
      </Content>
    </Page>
  );
}

export default SignIn
