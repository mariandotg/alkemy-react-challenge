import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const user = false;
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute user={user} />}>
          <Route path="/" element={<div>home</div>} />
          <Route path="dashboard" element={<div>dashboard</div>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<div>error 404</div>}/>
      </Routes>
    </>
  );
};

export default App;
