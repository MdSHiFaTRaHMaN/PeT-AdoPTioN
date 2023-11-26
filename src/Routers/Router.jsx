import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import DashBoardLayout from "../Layouts/DashBoardLayout";


const Router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }

        ]
    },
    {
        path: 'dashboard',
        element: <DashBoardLayout></DashBoardLayout>
    }
])

export default Router;