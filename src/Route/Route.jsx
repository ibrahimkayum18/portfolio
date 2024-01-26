import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const Route = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children: [
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/projects',
                element:<Projects />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/contact',
                element:<Contact />
            }
        ]
    }
])

export default Route;