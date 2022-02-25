import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5) {
    errors.password = "La contraseña debe tener como mínimo 5 digitos";
  }
  return errors;
};

const LoginForm = () => {
  const { setUser, setAuthentication } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={validate}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={async (values) => {
          await axios
            .post(process.env.REACT_APP_AUTH_URL, {
              email: values.email,
              password: values.password,
            })
            .then((res) => {
              console.log(res.data);
              setAuthentication(true);
              setUser({
                email: values.email,
                password: values.password,
              });
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        {({ dirty, isSubmitting }) => (
          <Form>
            <Field type="text" name="email" placeholder="johndoe@gmail.com" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={!dirty || isSubmitting}>
              Ingresar
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
