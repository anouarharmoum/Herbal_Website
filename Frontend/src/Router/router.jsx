import {createBrowserRouter} from "react-router-dom"
import Home from "../Compenants/Home.jsx"
import Contact from "../Compenants/Contact.jsx"
import About from "../Compenants/About.jsx"
import Products from "../Compenants/Products.jsx"
import Layout from "../Layout/Layout.jsx"

const router=createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/Contact",
                element:<Contact/>,
            },
            {
                path:"/About",
                element:<About/>,
            },
            {
                path:"/Products",
                element:<Products/>,
            },            
        ]
    },


])
export default router;