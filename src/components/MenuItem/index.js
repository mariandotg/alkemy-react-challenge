import { useState } from "react";

const MenuItem = ({ menuItem }) => {
  const [detailIsOpened, setDetailIsOpened] = useState(false);

  return (
    <>
      <div onClick={() => setDetailIsOpened(!detailIsOpened)}>
        <h4>{menuItem.title}</h4>
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
        <button>Delete</button>
      </div>
    </>
  );
};
//addRecipeInformation
export default MenuItem;
