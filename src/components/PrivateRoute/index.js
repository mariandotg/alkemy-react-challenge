import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ redirectPath = "login" }) => {
  if (!localStorage.getItem("alkemy_token")) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
