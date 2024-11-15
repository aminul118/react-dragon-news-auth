import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return <Loading/>; // You can replace this with a spinner or any loader component
  }

  if (user) {
    return children;
  }

  return <Navigate to="/auth/login" replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
