import axios from 'axios';

export const SignUpReq = async (users) => {
  try {
    await axios.post('http://localhost:8080/api/auth/signup', users)
      .then((response) => {
        if (response.data) {
          console.log('registrado');
        } else {
          console.log('No se registro');
        }
      })
  } catch (error) {
    console.log('Error');
    console.log(error);
  };
};