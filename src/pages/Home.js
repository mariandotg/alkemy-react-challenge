import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import Menu from "../components/Menu";
import { getSearchByQuery } from "../services/search";
import { getMenu } from "../services/menu";

const validate = (values) => {
  const errors = {};
  if (!/[a-zA-Z]+\s+[a-zA-Z]+/g.test(values.searchQuery)) {
    errors.searchQuery = "please insert more words";
  }
  return errors;
};

const Home = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const response = getMenu()
      .then((res) => setMenu([...res.results]))
      .catch((error) => console.log(error));
    return response;
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          searchQuery: "",
        }}
        validate={validate}
        onSubmit={(values) => {
          const query = values.searchQuery.replaceAll(" ", "+");
          console.log(query);
          const response = getSearchByQuery(query)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
          return response;
        }}
      >
        {() => (
          <Form>
            <Field
              type="text"
              name="searchQuery"
              placeholder="Search recipes"
            />
            <ErrorMessage name="searchQuery" component="div" />
            <button type="submit">X</button>
          </Form>
        )}
      </Formik>
      <Menu menu={menu} setMenu={setMenu} />
    </>
  );
};

export default Home;
