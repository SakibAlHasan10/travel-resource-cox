import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navlink = <>
    <NavLink to={'/news'}>News</NavLink>
    <NavLink to={'/destination'}>Destination</NavLink>
    <NavLink to={'/blog'}>Blog</NavLink>
    <NavLink to={'/contact'}>Contact</NavLink>
    </>
  return (
    <div className="max-w-screen-xl mx-auto px-8 py-3">
      <div className="navbar ">
        <div className="navbar-start w-full md:w-2/3">
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
          <Link to={'/'}>
          <img src="/logo.png" className="w-36 text-white bg-[#ffffff45] p-2 h-14 mr-14" alt="logo" />
          </Link>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered border-1 border-white text-white bg-[#0f03035d] hidden md:block md:w-auto"
            />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu text-white text-base font-medium menu-horizontal px-1 gap-10 mr-10">
            {navlink}
          </ul>
        <div className="">
          <Link to={'/login'} className="btn bg-yellow-500 btn-sm">Log In</Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
