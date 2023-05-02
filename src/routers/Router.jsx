import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import User from "../components/User/User";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader:()=>fetch('http://localhost:5000/chefs/all')
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/user",
                element:<User/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"*",
                element:<Error/>
            }
        ]
    },
]);

export default router;
