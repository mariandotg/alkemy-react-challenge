import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../App";
import { getMenu } from "../services/menu";
import MenuItem from "../components/MenuItem"
import Menu from "../components/Menu";

const Home = () => {
  const [menu, setMenu] = useState([]);

  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(menu.length !== 0) return console.log("do not fetch")
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=4&diet=vegan&addRecipeInformation=true&addRecipeNutrition=true`
        );
        setMenu([...response.data.results])
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        Home {isAuthenticated === true ? <p>CONTEXTO ACTIVO</p> : <p>CONTEXTO DESACTIVADO</p>}
      </div>
      <Menu menu={menu}/>
    </>
  );
};

export default Home;
