import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-spinner text-info ml-96 mt-64 loading-lg"></span>
    }

    if(user?.email){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivetRoute;