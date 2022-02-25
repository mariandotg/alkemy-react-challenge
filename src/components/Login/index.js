import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if(values.password.length < 5 ) {
    errors.password = "La contraseña debe tener como mínimo 5 digitos"
  }
  return errors;
};

const Login = () => {
  console.log(process.env.REACT_APP_AUTH_URL)
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={validate}
        onSubmit={(values) => {
          axios.post(process.env.REACT_APP_AUTH_URL, {email: values.email, password: values.password})
          .then((res) => {
            console.log(res.data)
          })
        }}
      >
        {() => (
          <Form>
            <Field type="email" name="email" placeholder="johndoe@gmail.com" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit">Ingresar</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
