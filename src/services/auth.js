import axios from "axios";

export const postAuthCredentials = async (values) => {
  const AUTH_URL = process.env.REACT_APP_AUTH_URL;
  return await axios
    .post(AUTH_URL, {
      email: values.email,
      password: values.password,
    })
    .then((res) => res.data);
};
