import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => {
  return (
    <>
      HOLA
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <Field type="email" name="email" placeholder="johndoe@gmail.com"/>
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="password"/>
            <ErrorMessage name="password" component="div" />
            <button>Ingresar</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
