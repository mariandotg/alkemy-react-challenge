import axios from "axios";

export const getMenu = async () => {
  return await axios
    .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=4&diet=vegan&addRecipeInformation=true`)
    .then((res) => res.data);
};
