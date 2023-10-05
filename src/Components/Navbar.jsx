import { Link, NavLink, useLocation } from "react-router-dom";
import useApi from "../ContextApi/useApi";

const Navbar = () => {
  const { user, logOut } = useApi();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out success");
      })
      .catch((error) => console.error(error));
  };
  const navlink = (
    <>
      <NavLink to={"/news"}>
        {" "}
        <li>News</li>
      </NavLink>
      <NavLink to={"/destination"}>Destination</NavLink>
      <NavLink to={"/blog"}>Blog</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </>
  );

  const location = useLocation()
  console.log(location.pathname =="/")
  return (
    <div className="max-w-screen-xl mx-auto px-8 py-3">
      <div className="navbar ">
        <div className="navbar-start w-full md:w-2/5">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <Link to={"/"}>
            <img
              src="/logo.png"
              className="w-36 text-white bg-[#ffffff45] p-2 h-14 mr-14"
              alt="logo"
            />
          </Link>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className={`input input-bordered
              ${location.pathname !=="/" ? 'md:hidden': 'md:block' } border-1 border-white text-white bg-[#0f03035d] hidden  md:w-auto`}/>
          </div>
        </div>
        <div className="navbar-end hidden w-3/5 lg:flex">
          <ul
            className={`menu
          ${
            location.pathname!=="/"? "text-black" : "text-white"
          }  text-base font-medium menu-horizontal px-1 gap-10 mr-10`}
          >
            {navlink}
          </ul>

          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost ">
                  <div className="">
                    <span className="text-base font-bold">{user.email}</span>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  {navlink}
                  <Link>
                    <button onClick={handleLogOut} className="btn btn-sm">
                      Log Out
                    </button>
                  </Link>
                </ul>
              </div>
            </>
          ) : (
            <Link to={"/login"} className="btn bg-yellow-500 btn-sm">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
