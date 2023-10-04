import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Root = () => {
    return (
        <div className="">
            <div className=" absolute w-full z-50">

            <Navbar></Navbar>
            </div>
            <div className="z-0">

            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;