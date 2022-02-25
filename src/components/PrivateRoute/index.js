import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ user, redirectPath = "login" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
