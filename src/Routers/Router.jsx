import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import AddToPet from "../DashBoard/AddToPet/AddToPet";
import MyAddedPet from "../DashBoard/MyAddedPet/MyAddedPet";
import PetDetails from "../Components/PetDetails/PetDetails";
import PetList from "../Components/PetList/PetList";
import DogCategory from "../Pages/PetCategory/DogCategory/DogCategory";
import CatCategory from "../Pages/PetCategory/CatCategory/CatCategory";
import RabbitCategory from "../Pages/PetCategory/RabbitCategory/RabbitCategory";
import UpdatePet from "../Components/UpdatePet/UpdatePet"

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
            },
            {
                path: '/petList',
                element: <PetList></PetList>,
                loader: () => fetch(`http://localhost:5000/pet`)
            },
            {
                path: '/dog',
                element: <DogCategory></DogCategory>
            },
            {
                path: '/cat',
                element: <CatCategory></CatCategory>
            },
            {
                path: '/rabbit',
                element: <RabbitCategory></RabbitCategory>
            },
            {
                path: '/updatePet/:id',
                element: <UpdatePet></UpdatePet>,
                loader: ({params}) => fetch(`http://localhost:5000/pet/${params.id}`)
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