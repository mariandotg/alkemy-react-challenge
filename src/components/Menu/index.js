import { useState, useEffect } from "react";
import MenuItem from "../MenuItem";

const Menu = ({ menu }) => {
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

  return (
    <>
      {menu.length > 0 ? (
        <>
          {menu.map((res) => {
            return <MenuItem key={res.id} menuItem={res} />;
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
