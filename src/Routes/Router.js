import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import BookingsDetails from "../Pages/CategoryItem/BookingsDetails/BookingsDetails";
import Items from "../Pages/CategoryItem/Items/Items";
import Home from "../Pages/HomePage/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:categoryName',
                element:<Items></Items>,
                loader:({params})=>fetch(`http://localhost:5000/category?categoryName=${params.categoryName}`)
            },
            {
                path:'/booking/:id',
                element:<BookingsDetails></BookingsDetails>,
                loader:({params})=>fetch(`http://localhost:5000/booking/${params.id}`)
            }

        ])
    }
])