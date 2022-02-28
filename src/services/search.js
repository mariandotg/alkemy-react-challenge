import axios from "axios";

export const getSearchByQuery = async (query) => {
  return await axios
    .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}&addRecipeInformation=true`)
    .then((res) => res.data);
};
