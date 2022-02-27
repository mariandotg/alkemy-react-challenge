import { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../components/Menu";

const Home = () => {
  const [menu, setMenu] = useState([]);

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
      <Menu menu={menu}/>
    </>
  );
};

export default Home;
