import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";

const App = () => {
  const user = false;
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute user={user} />}>
          <Route path="/" element={<div>home</div>} />
          <Route path="dashboard" element={<div>dashboard</div>} />
          <Route path="*" element={<div>error 404</div>}/>
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
