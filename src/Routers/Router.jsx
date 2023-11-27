import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import AddToPet from "../DashBoard/AddToPet/AddToPet";
import MyAddedPet from "../DashBoard/MyAddedPet/MyAddedPet";
import PetDetails from "../Components/PetDetails/PetDetails";


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
            },
            {
                path: '/petDetails/:id',
                element: <PetDetails></PetDetails>,
                loader: () => fetch(`http://localhost:5000/pet`)
            }

        ]
    },
    {
        path: 'dashBoard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: "myPet",
                element: <MyAddedPet></MyAddedPet>
            },
            {
                path: "addToPet",
                element: <AddToPet></AddToPet>
            }
        ]
    }
])

export default Router;