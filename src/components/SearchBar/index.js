import { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { getSearchByQuery } from "../../services/search";
import MenuItem from "../MenuItem";
import swal from "sweetalert";

const SearchBar = () => {
  const [searchResults, setSearchResults] = useState([]);

  const validate = (values) => {
    const errors = {};
    if (values.searchQuery.length <= 2) {
      errors.searchQuery = "Necesitas incluir más palabras en tu busqueda";
    }
    return errors;
  };

  const onSubmit = (values) => {
    const query = values.searchQuery.replaceAll(" ", "+");
    console.log(query);
    const response = getSearchByQuery(query)
      .then((res) => {
        console.log(res);
        setSearchResults([...res.results]);
      })
      .catch((error) => {
        swal({
          title: "Error",
          text: `${error}`,
          icon: "warning",
          button: "Ok",
        })
      });
    return response;
  };

  return (
    <>
      <Container fluid="md">
        <Formik
          initialValues={{
            searchQuery: "",
          }}
          validate={validate}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <Row className="d-flex justify-content-center g-0">
                <Form.Group as={Col} className="g-0 p-3" xs="8" md="9">
                  <Form.Control
                    type="text"
                    name="searchQuery"
                    value={formik.values.searchQuery}
                    onChange={formik.handleChange}
                    placeholder="Search recipes"
                  />
                  <ErrorMessage className="mt-3" name="searchQuery" component="div" />
                </Form.Group>
                <Col className="g-0 p-3" xs="4" md="3">
                  <Button className="w-100" type="submit">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
        {searchResults && (
          <Row className="justify-content-md-center">
            {searchResults.map((res) => {
              return <MenuItem key={res.id} menuItem={res} />;
            })}
          </Row>
        )}
      </Container>
    </>
  );
};

export default SearchBar;
