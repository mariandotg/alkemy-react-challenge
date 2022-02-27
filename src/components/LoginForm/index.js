import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import swal from "sweetalert";
import { postAuthCredentials } from "../../services/auth";

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
  const [error, setError] = useState({});
  const { setUser } = useContext(AuthContext);
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
        onSubmit={(values) => {
          const response = postAuthCredentials(values)
            .then((res) => {
              const token = res.token;
              localStorage.setItem("alkemy_token", token);
              setUser({
                email: values.email,
                password: values.password,
              });
              navigate("/");
            })
            .catch((error) => {
              new Error(error);
              setError(error);
            });
          return response;
        }}
      >
        {({ errors, dirty, isSubmitting }) => (
          <Form>
            <Field type="text" name="email" placeholder="johndoe@gmail.com" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={!dirty || isSubmitting}>
              Ingresar
            </button>
            {error && <p>{error.data}</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
