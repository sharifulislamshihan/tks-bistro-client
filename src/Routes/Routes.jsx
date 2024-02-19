import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Services from "../Pages/Services/Services/Services";
import PrivateChef from "../Pages/PrivateChef/PrivateChef/PrivateChef";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "../Routes/PrivateRoute"
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";



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
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },

            // Admin Routes
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'addItems',
                element: <AddItems></AddItems>
            },
            {
                path: 'manageItems',
                element: <ManageItem></ManageItem>
            },
            {
                path: 'manageBookings',
                element: <ManageBookings></ManageBookings>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            }
        ]
    }

]);