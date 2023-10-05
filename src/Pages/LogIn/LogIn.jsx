import { Link } from "react-router-dom";
import Social from "../../Shere/Social";
import { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState(false)
  const [error, setError] = useState('')
  const handleLogin=()=>{

  }
  console.log(email, password, check)
  return (
    <div>
      <div className=" w-full max-w-xl mx-auto min-h-screen mb-16 ">
        <div className="pt-28">
          <div className="  w-full max-w-lg mx-auto rounded-md border-2  bg-base-100">
            <div className="text-center">
              <h1 className="text-3xl font-bold mt-6">Login now!</h1>
            </div>
            <form className="card-body max-w-lg  ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={e=>{setEmail(e.target.value)}}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={e=>{setPassword(e.target.value)}}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div className="flex justify-between">
                  <div className="flex items-center gap-2 text-base font-medium">
                    <input onClick={(e)=>{setCheck(e.target.checked)}} type="checkbox" name="" id="" />
                    Remember Me
                  </div>
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt text-yellow-400 text-base font-medium link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleLogin} className="btn btn-primary">Login</button>
              </div>
              <p className="text-center text-base font-medium">
                Do not have an account?{" "}
                <Link to={'/register'} className="text-yellow-400 hover:text-blue-950 underline">
                  {" "}
                  Create an account
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

export default LogIn;
