import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
        ]
    }
])

export default router;