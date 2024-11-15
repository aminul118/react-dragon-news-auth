import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../pages/Loading";
const Navbar = () => {
  const { user, handleSignOut, loader } = useContext(AuthContext);
  // console.log(user);
  if (loader) {
    return <Loading />;
  }
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <p className="font-semibold">{user.email}</p>
      </div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          <img src={userIcon} alt="" />
        </div>

        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-neutral rounded-none"
          >
            Log out
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
