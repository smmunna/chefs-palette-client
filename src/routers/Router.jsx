import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import User from "../components/User/User";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Error from "../components/Error/Error";
import ChefRecipe from "../components/ChefRecipe/ChefRecipe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('https://chefs-palette-server.vercel.app/chefs/all')
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/user",
                element: <User />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/chefrecipe/:id",
                element: <ChefRecipe />,
                loader: ({ params }) => fetch(`https://chefs-palette-server.vercel.app/chefs/chef/${params.id}`)

            },
            {
                path: "*",
                element: <Error />
            }
        ]
    },
]);

export default router;
