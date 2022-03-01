import { Formik, ErrorMessage } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
  const { setUser } = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      <Container fluid="md">
        <h1 className="my-3">Login</h1>
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
                swal({
                  title: "Error",
                  text: "Credenciales inválidas",
                  icon: "warning",
                  button: "Ok",
                })
              });
            return response;
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="johndoe@gmail.com"
                />
                <ErrorMessage name="email" component="div" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="password"
                />
                <ErrorMessage name="password" component="div" />
              </Form.Group>

              <Button
                type="submit"
                disabled={!formik.dirty || formik.isSubmitting}
              >
                Ingresar
              </Button>
              
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default LoginForm;
