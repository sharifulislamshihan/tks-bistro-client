import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Services from "../Pages/Services/Services/Services";
import PrivateChef from "../Pages/PrivateChef/PrivateChef/PrivateChef";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ContactUs from "../Pages/ContactUs/ContuctUs/ContactUs";
import PrivateRoute from "./privateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/privateChef',
                element: <PrivateChef></PrivateChef>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            }
        ]
    }

]);