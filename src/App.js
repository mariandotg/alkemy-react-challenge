import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";

export const AuthContext = createContext({});

const App = () => {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [user, setUser] = useState({});
  const global = {
    user,
    setUser,
    isAuthenticated,
    setAuthentication,
  }
  return (
    <>
    <AuthContext.Provider value={global}>
      <Routes>
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />}/>
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthContext.Provider>
    </>
  );
};

export default App;
