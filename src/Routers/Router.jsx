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
import BirdCategory from "../Pages/PetCategory/BirdCategory/BirdCategory";
import DonationCampaign from "../Components/DonationCampaign/DonationCampaign";
import Campaign from "../DashBoard/AddDonationCampaign/Campaign";
import CampaignDetails from "../Components/DonationCampaign/CampaignDetails/CampaignDetails";
import MyDonetion from "../DashBoard/MyDonetion/MyDonetion";
import MyDonetionCampaign from "../DashBoard/MyDonetionCampaign/MyDonetionCampaign";
import UpdateCampaign from "../Components/UpdateCampaign/UpdateCampaign";
import PrivetRoute from "./PrivetRoute";
import AdoptRequest from "../DashBoard/AdoptRequest/AdoptRequest";
import AlUserInfo from "../Components/AdminDashboard/AlUserInfo/AlUserInfo";
import AllPetPost from "../Components/AdminDashboard/AllPetPost/AllPetPost";
import AlpostCampaign from "../Components/AdminDashboard/AlPostCampaign/AlpostCampaign";

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
                element: <PrivetRoute><PetDetails></PetDetails></PrivetRoute>,
                loader: () => fetch(`https://final-projact-server.vercel.app/pet`)
            },
            {
                path: '/petList',
                element: <PrivetRoute><PetList></PetList></PrivetRoute>,
                loader: () => fetch(`https://final-projact-server.vercel.app/pet`)
            },
            {
                path: '/dog',
                element: <PrivetRoute><DogCategory></DogCategory></PrivetRoute>
            },
            {
                path: '/cat',
                element: <PrivetRoute><CatCategory></CatCategory></PrivetRoute>
            },
            {
                path: '/rabbit',
                element: <PrivetRoute><RabbitCategory></RabbitCategory></PrivetRoute>
            },
            {
                path: '/bird',
                element: <PrivetRoute><BirdCategory></BirdCategory></PrivetRoute>
            },
            {
                path: '/Campaign',
                element: <PrivetRoute><DonationCampaign></DonationCampaign></PrivetRoute>
            },
            {
                path: '/Campaign/:id',
                element:<PrivetRoute> <CampaignDetails></CampaignDetails></PrivetRoute>,
                loader: () => fetch(`https://final-projact-server.vercel.app/campaign`)
            }
        ]
    },
    {
        path: 'dashBoard',
        element: <PrivetRoute><DashBoardLayout></DashBoardLayout></PrivetRoute>,
        children: [
            {
                path: "myPet",
                element: <PrivetRoute><MyAddedPet></MyAddedPet></PrivetRoute>
            },
            {
                path: "addToPet",
                element: <PrivetRoute><AddToPet></AddToPet></PrivetRoute>
            },
            {
                path: 'updatePet/:id',
                element: <PrivetRoute><UpdatePet></UpdatePet></PrivetRoute>,
                loader: ({params}) => fetch(`https://final-projact-server.vercel.app/pet/${params.id}`)
            },
            {
                path: 'createCampaign',
                element: <PrivetRoute><Campaign></Campaign></PrivetRoute>
            },
            {
                path:'myDonetion',
                element: <PrivetRoute><MyDonetion></MyDonetion></PrivetRoute>
            },
            {
                path: 'myCampaignPost',
                element: <PrivetRoute><MyDonetionCampaign></MyDonetionCampaign></PrivetRoute>
            },
            {
                path: 'CampaignPost/:id',
                element: <PrivetRoute><UpdateCampaign></UpdateCampaign></PrivetRoute>,
                loader: ({params}) => fetch(`https://final-projact-server.vercel.app/campaign/${params.id}`)
            },
            {
                path: 'AdoptRequest',
                element: <PrivetRoute><AdoptRequest></AdoptRequest></PrivetRoute>
            },
            {
                path: 'userInfo',
                element: <PrivetRoute><AlUserInfo></AlUserInfo></PrivetRoute>,
            },
            {
                path: 'allPostedPet',
                element:<PrivetRoute><AllPetPost></AllPetPost></PrivetRoute>,
            },
            {
                path: 'allPostedCampaign',
                element: <PrivetRoute><AlpostCampaign></AlpostCampaign></PrivetRoute>
            }
        ]
    }
])

export default Router;