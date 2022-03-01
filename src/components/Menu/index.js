import { useState, useEffect, useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Context } from "../../App";
import MenuItem from "../MenuItem";

const Menu = () => {
  const [healthScoreAvg, setHealthScoreAvg] = useState(0);
  const [timeAvg, setTimeAvg] = useState(0);
  const [menuPrice, setMenuPrice] = useState(0);

  const { menu } = useContext(Context);

  useEffect(() => {
    setHealthScoreAvg(
      menu.reduce((sum, person) => {
        return sum + person.healthScore;
      }, 0) / menu.length
    );

    setTimeAvg(
      menu.reduce((sum, person) => {
        return sum + person.readyInMinutes;
      }, 0) / menu.length
    );

    setMenuPrice(
      menu.reduce((sum, person) => {
        return sum + (person.pricePerServing * person.servings);
      }, 0)
    );
  }, [menu]);

  return (
    <>
      {menu.length > 0 ? (
        <>
          <Container fluid="md">
            <h1 className="my-3" >Menu</h1>
            <Row className="d-flex justify-content-center">
            {menu.map((res) => {
              return <MenuItem key={res.id} menuItem={res} />;
            })}
            </Row>
            <p>Average Health Score: <strong>{healthScoreAvg}</strong></p>
            <p>Average Time: <strong>{timeAvg} minutes</strong></p>
            <p>Menu price: <strong>{menuPrice.toFixed(2)} USD</strong></p>
          </Container>
        </>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
};

export default Menu;
