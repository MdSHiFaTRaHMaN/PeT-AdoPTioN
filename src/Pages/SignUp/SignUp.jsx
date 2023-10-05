import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import {BsArrowRight , BsGoogle, BsFacebook} from 'react-icons/bs'

const SignUp = () => {
    const handleSignUp = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        console.log(form.get('okPass'))
    }
    return (
        <div>
 
        <Navber></Navber>
               <div className="flex justify-center ">
                 <div
                     className="flex  justify-center rounded shadow max-w-7xl w-[90%]  bg-gradient-to-bl from-violet-600 via-purple-600 to-violet-500 m-4">
                                                
                     <div className="h-[90%] w-full mt-7">
                         <div className="mb-6 text-white">
                          <Link to="/login" className="flex items-center justify-end mr-8 space-x-2 hover:underline underline-offset-4">
                            <h1>Login</h1>
                            <BsArrowRight></BsArrowRight>
                          </Link> 
                        </div>
                    <div className=" flex flex-col justify-center items-center space-y-2">
                  <div>
                           <h1 className="text-xl font-semibold text-white">Here you can SignUp</h1>
                    </div>
                </div>
                <form onSubmit={handleSignUp}>
                <div className="flex flex-col justify-center items-center mt-7 space-y-2 md:space-y-3">
                    <div className="space-y-1">
                        <h1 className="text-base text-gray-200">Your Full Name</h1>
                <input type="name" placeholder="" name="name"
                            className="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"/>
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-base text-gray-200">Email</h1>
                <input type="email" placeholder="" name="email"
                            className="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"/>
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-base text-gray-200">Password</h1>
                        <input type="password" placeholder="" name="password"
                         className="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"/>
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-base text-gray-200">Confirm Password</h1>
                        <input type="password" placeholder="" name="okPass"
                         className="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"/>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <button
                        className="btn btn-secondary">SignUp
                    </button>
              </div>
                </form>
                <div className="flex justify-center text-center mx-auto gap-2 my-3">
                        <button className="btn"><BsGoogle></BsGoogle> Google</button> 
                       <button className="btn"> <BsFacebook></BsFacebook>Facebook</button>
                </div>
                           </div>
                      </div>
               </div>
        </div>
    );
};

export default SignUp;