import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
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
            }

        ])
    }
])