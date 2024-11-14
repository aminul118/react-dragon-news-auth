import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { singInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ email, password });
    singInUser(email, password);
  };
  return (
    <div className="min-h-[calc(100vh-72px)] flex justify-center items-center">
      <div className=" bg-base-100 w-full max-w-lg shrink-0 p-8 rounded-md">
        <h2 className="font-semibold text-2xl py-6 text-center">
          Login your account
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Email</span>
            </label>
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered bg-gray-200"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Password</span>
            </label>
            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered bg-gray-200"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
        </form>
        <p className="text-center mt-6 font-semibold">
          Dont’t Have An Account ?
          <Link to={"/auth/register"} className="ml-2 text-red-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
