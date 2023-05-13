import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import ViewRecipes from "../pages/ViewRecipes/ViewRecipes";
import FeaturedRecipes from "../pages/ExtraSection/featuredRecipes";
import ChefTipsAndTricks from "../pages/ExtraSection/chefTipsAndTricks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: '/viewRecipes/:chefId',
                element: <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>
                
            },
            {
                path: 'featuredRecipes',
                element: <FeaturedRecipes></FeaturedRecipes>
            },
            {
                path: 'ChefTipsAndTricks',
                element: <ChefTipsAndTricks></ChefTipsAndTricks>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])
export default router;