import { useState, useEffect } from "react";
import MenuItem from "../MenuItem";

const Menu = ({ menu, setMenu }) => {
  const [healthScoreAvg, setHealthScoreAvg] = useState(0);
  const [timeAvg, setTimeAvg] = useState(0);
  const [menuPrice, setMenuPrice] = useState(0);

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
        return sum + person.pricePerServing;
      }, 0)
    );
  }, [menu]);

  function handleRemove(e, menuItem) {
    e.stopPropagation();
    setMenu((prevMenu) => prevMenu.filter((item) => item.id !== menuItem.id))
  }

  return (
    <>
      {menu.length > 0 ? (
        <>
          {menu.map((res) => {
            return <MenuItem key={res.id} menuItem={res} handleRemove={handleRemove} />;
          })}
          <p>Average Health Score: {healthScoreAvg}</p>
          <p>Average Time (minutes): {timeAvg}</p>
          <p>Menu price: {menuPrice}</p>
        </>
      ) : <p>loading...</p>}
    </>
  );
};

export default Menu;
