import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import BookingsDetails from "../Pages/CategoryItem/BookingsDetails/BookingsDetails";
import Items from "../Pages/CategoryItem/Items/Items";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Payment from "../Pages/Payment/Payment";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:categoryName',
                element: <Items></Items>,
                loader: ({ params }) => fetch(`https://hero-hotel-server.vercel.app/category?categoryName=${params.categoryName}`)
            },
            {
                path: '/booking/:id',
                element: <PrivateRoute><BookingsDetails></BookingsDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://hero-hotel-server.vercel.app/booking/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/mybooking',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path:'/payment/:id',
                element:<PrivateRoute><Payment></Payment></PrivateRoute>,
                loader:({params})=>fetch(`https://hero-hotel-server.vercel.app/payment/${params.id}`)
            }

        ])
    }
])