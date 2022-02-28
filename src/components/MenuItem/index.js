import { useState } from "react";
import Button from "react-bootstrap/Button"

const MenuItem = ({ menuItem, handleRemove }) => {
  const [detailIsOpened, setDetailIsOpened] = useState(false);

  return (
    <>
      <div onClick={() => setDetailIsOpened(!detailIsOpened)}>
        <h4>{menuItem.title}</h4>
        <p>id: {`${menuItem.id}`}</p>
        <img src={menuItem.image} alt={menuItem.title} />
        <p>vegan: {`${menuItem.vegan}`}</p>
        <p>gluten: {`${menuItem.glutenFree}`}</p>
        <p>porciones: {`${menuItem.servings}`}</p>
        {detailIsOpened && (
          <>
            <p>Health Score: {menuItem.healthScore}</p>
            <p>Preparation time: {menuItem.readyInMinutes}</p>
            <p>Price: {menuItem.pricePerServing}</p>
          </>
        )}
        <Button onClick={(e) => handleRemove(e, menuItem)}>Delete</Button>
      </div>
    </>
  );
};
//addRecipeInformation
export default MenuItem;
