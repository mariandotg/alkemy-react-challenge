import { useEffect, useContext } from "react";
import { getMenu } from "../services/menu";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import { Context } from "../App";

const Home = () => {
  const { setMenu } = useContext(Context);

  useEffect(() => {
    const response = getMenu()
      .then((res) => setMenu([...res.results]))
      .catch((error) => console.log(error));
    return response;
  }, []);

  return (
    <>
      <SearchBar />
      <Menu />
    </>
  );
};

export default Home;
