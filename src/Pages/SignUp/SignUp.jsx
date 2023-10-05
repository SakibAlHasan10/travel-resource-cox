import { useState } from "react";
import { Link } from "react-router-dom";
import Social from "../../Shere/Social";
// import useApi from "../../ContextApi/useApi";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");
  const handleLogin = () => {};
  console.log(email, password, check);
  return (
    <div>
      <div className=" w-full max-w-xl mx-auto min-h-screen mb-16 ">
        <div className="pt-28">
          <div className="  w-full max-w-lg mx-auto rounded-md border-2  bg-base-100">
            <div className="text-center">
              <h1 className="text-3xl font-bold mt-6">Create an account</h1>
            </div>
            <form className="card-body max-w-lg  ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  //   placeholder="email"
                  className="border-t-2 focus:input"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  //   placeholder="email"
                  className="border-t-2 focus:input"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username or Email</span>
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  //   placeholder="email"
                  className="border-t-2 focus:input"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  //   placeholder="password"
                  className=" focus:input border-t-2"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm password</span>
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  //   placeholder="password"
                  className=" border-t-2 focus:input"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button onClick={handleLogin} className="btn btn-primary">
                  Register
                </button>
              </div>
              <p className="text-center text-base font-medium">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-yellow-400 hover:text-blue-950 underline"
                >
                  {" "}
                  Login
                </Link>{" "}
              </p>
            </form>
          </div>
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
