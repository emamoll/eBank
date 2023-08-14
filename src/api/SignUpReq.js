import axios from 'axios';

export const SignUpReq = async (users) => {
  await axios.post('http://localhost:8080/api/auth/signup', users)
};