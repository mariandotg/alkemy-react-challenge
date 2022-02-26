import axios from "axios";

export const getMenu = async ({number, diet}) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return await axios
    .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${number}&diet=${diet}`)
    .then((res) => res.data);
};
