import { useState } from "react";

const MenuItem = ({ menuItem }) => {
    const [detailIsOpened, setDetailIsOpened] = useState(false);

  return (
    <>
      <h4>{menuItem.title}</h4>
      <img src={menuItem.image} alt={menuItem.title} />
      <p>vegan: {`${menuItem.vegan}`}</p>
      <p>gluten: {`${menuItem.glutenFree}`}</p>
      <p>porciones: {`${menuItem.servings}`}</p>
      {detailIsOpened && <p>Detalle</p>}
    </>
  );
};
//addRecipeInformation
export default MenuItem;
