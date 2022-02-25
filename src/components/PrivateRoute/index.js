import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, redirectPath = "login" }) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
