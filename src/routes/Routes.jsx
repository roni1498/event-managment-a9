
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../layout/Root";
import ServiceDetails from "../Components/ServiceDetails";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AboutUs from "../Components/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/service/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: () => fetch('../service.json')
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            }
        ]
    }
])
export default router;