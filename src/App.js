import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";

export const Context = createContext({});

const App = () => {
  const [user, setUser] = useState({});
  const [menu, setMenu] = useState([]);

  function handleRemove(e, menuItem) {
    e.stopPropagation();
    setMenu((prevMenu) => prevMenu.filter((item) => item.id !== menuItem.id));
  }

  function handleAdd(e, menuItem) {
    e.stopPropagation();
    if (menu.length >= 4) return console.log("solo puedes tener 4 platos en el menu");
    setMenu((prevMenu) => [...prevMenu, menuItem]);
  }

  const global = {
    user,
    setUser,
    menu,
    setMenu,
    handleRemove,
    handleAdd,
  };

  return (
    <>
      <Context.Provider value={global}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </Context.Provider>
    </>
  );
};

export default App;
