import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import ViewRecipes from "../pages/ViewRecipes/ViewRecipes";
import FeaturedRecipes from "../pages/ExtraSection/featuredRecipes";
import ChefTipsAndTricks from "../pages/ExtraSection/chefTipsAndTricks";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
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
                element: <ViewRecipes></ViewRecipes>
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