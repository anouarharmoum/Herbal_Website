 import Navbar from "../Compenants/Navbar"
 import Footer from "../Compenants/Footer"
import { Outlet } from "react-router-dom"
 export default function Layout(){

    return(
        <>
        <Navbar/>
         <main>
            <Outlet/>
         </main>
        <Footer/>
        </>
    )
 }