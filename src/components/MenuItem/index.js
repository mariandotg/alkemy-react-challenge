import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";

import { Context } from "../../App";

const MenuItem = ({ menuItem }) => {
  const [detailIsOpened, setDetailIsOpened] = useState(false);
  const { menu, handleRemove, handleAdd } = useContext(Context);
  const isInTheMenu = menu.some((item) => item.id === menuItem.id);
  return (
    <Col
      className="p-3"
      lg="6"
      onClick={() => setDetailIsOpened(!detailIsOpened)}
    >
      <Row className="g-0 p-3 border rounded-2 border-secondary">
        <Col className="g-0" xs={4} md={5} lg={3}>
          <Row className="g-0">
            <Image src={menuItem.image} alt={menuItem.title} fluid />
          </Row>
        </Col>
        <Col className="ps-3 pe-3 g-0" xs={8} md={7} lg={9}>
          <h4 className="mb-0">
            {menuItem.title}{" "}
            {menuItem.vegan && <Badge bg="success">VEGAN</Badge>}
          </h4>
          <div className="my-1">
            <p className="mb-0">Porciones: {menuItem.servings}</p>
            {detailIsOpened && (
              <>
                <p className="mb-0">
                  Precio por porción:{" "}
                  {menuItem.pricePerServing.toFixed(2)} USD
                </p>
                <p className="mb-0">
                  Precio:{" "}
                  {(menuItem.pricePerServing * menuItem.servings).toFixed(2)}{" "}
                  USD
                </p>
                <p className="mb-0">Health Score: {menuItem.healthScore}</p>
                <p className="mb-0">
                  Tiempo de preparación: {menuItem.readyInMinutes} minutos
                </p>
              </>
            )}
          </div>
        </Col>
        <Col className="d-grid mt-3 g-0" xs={4} md={5} lg={3}>
          {isInTheMenu === false ? (
            <Button onClick={(e) => handleAdd(e, menuItem)} variant="primary">
              Add to the menu
            </Button>
          ) : (
            <Button onClick={(e) => handleRemove(e, menuItem)} variant="danger">
              Delete from the menu
            </Button>
          )}
        </Col>
      </Row>
    </Col>
  );
};

export default MenuItem;
