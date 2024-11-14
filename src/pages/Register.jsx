import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const photo = e.target.photo.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log({ name, photo, email, password });
    createNewUser(email, password);
  };

  return (
    <div className="min-h-[calc(100vh-72px)] flex justify-center items-center">
      <div className=" bg-base-100 w-full max-w-lg shrink-0 p-8 rounded-md">
        {/* Form Heading Text */}
        <h2 className="font-semibold text-2xl py-6 text-center">
          Register your account
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Your Name
              </span>
            </label>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered bg-gray-200"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Photo URL
              </span>
            </label>
            {/* Photo URL */}
            <input
              type="name"
              name="photo"
              placeholder="Enter your Photo url"
              className="input input-bordered bg-gray-200"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
        </form>
        <p className="text-center mt-6 font-semibold">
          Already Have An Account?
          <Link to={"/auth/login"} className="ml-2 text-red-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
