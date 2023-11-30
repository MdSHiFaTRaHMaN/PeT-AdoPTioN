import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";
import { FaHome, FaUser } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import './Dashbord.css';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);

    const adminUser = user.email === 'imadmin@gmail.com'
    return (
        <div className="flex">
            <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto text-black bg-white border-r rtl:border-r-0 rtl:border-l">
                {
                    adminUser ?
                        <a href="#" className="mx-auto">
                            <h1 className="text-blue-600 font-semibold text-2xl">Admin DashBoard</h1>
                        </a>
                        :
                        <a href="#" className="mx-auto">
                            <h1 className="text-blue-600 font-semibold text-2xl">User DashBoard</h1>
                        </a>
                }

                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-16 h-16 mx-2 rounded-full" src="https://i.ibb.co/C9GVgbx/Screenshot-2023-11-26-112111.png" alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800">{user?.displayName}</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600">{user?.email}</p>
                </div>


                <a className="flex items-center px-4 mt-2 -mb-7 text-black hover:bg-gray-900 hover:text-white  rounded-lg">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" />
                    </svg>
                    <NavLink to="/dashBoard/userInfo" activeClassName="activeLink">
                        <div className="flex items-center">
                            <FaUser></FaUser>
                            <span className="mx-4 font-medium">{adminUser ? <h1>All USERS</h1> : <h1>Profile</h1>}</span>
                        </div>
                    </NavLink>
                </a>
                {adminUser ?
                    <div className="flex flex-col justify-between flex-1 mt-6">
                        <nav>
                            <a className="flex items-center px-4 py-2 mt-5 text-black transition-colors duration-300 transform rounded-lg hover:bg-gray-900 hover:text-white">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" />
                                </svg>

                                <NavLink to="/dashBoard/allPostedPet" activeClassName="activeLink">
                                    <div className="flex items-center">
                                        <MdOutlineAddBox></MdOutlineAddBox>
                                        <span className="mx-4 font-medium">All Posted Pet</span>
                                    </div>
                                </NavLink>
                            </a>
                            <a className="flex items-center px-4 py-2 mt-5 text-black transition-colors duration-300 transform rounded-lg hover:bg-gray-900 hover:text-white">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" />
                                </svg>
                                <NavLink to="/dashBoard/allPostedCampaign" activeClassName="activeLink">
                                    <div className="flex items-center">
                                        <MdOutlineAddBox></MdOutlineAddBox>
                                        <span className="mx-4 font-medium">All Posted Campaign</span>
                                    </div>
                                </NavLink>
                            </a>
                            <a className="flex items-center px-4 py-2 mt-5 text-black transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" />
                                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" />
                                </svg>
                                <NavLink to="/">
                                    <div className="flex items-center">
                                        <FaHome></FaHome>
                                        <span className="mx-4 font-medium">Home</span>
                                    </div>
                                </NavLink>
                            </a>
                        </nav>
                    </div>
                    :
                    <div className="flex flex-col justify-between flex-1 mt-6">
                        <nav>
                            <a className="flex items-center px-4 py-2 text-black hover:bg-gray-900 hover:text-white  rounded-lg">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" />
                                </svg>
                                <NavLink to="/dashBoard/myPet" activeClassName="activeLink">
                                    <div className="flex items-center">
                                        <FaHome></FaHome>
                                        <span className="mx-4 font-medium">My added pets</span>
                                    </div>
                                </NavLink>
                            </a>
                            <a className="flex items-center px-4 py-2 mt-5 text-black transition-colors duration-300 transform rounded-lg hover:bg-gray-900 hover:text-white">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" />
                                </svg>

                                <NavLink to="/dashBoard/addToPet" activeClassName="activeLink">
                                    <div className="flex items-center">
                                        <MdOutlineAddBox></MdOutlineAddBox>
                                        <span className="mx-4 font-medium"> Add to Pet</span>
                                    </div>
                                </NavLink>
                            </a>
                            <a className="flex items-center px-4 py-2 mt-5 text-black transition-colors duration-300 transform rounded-lg hover:bg-gray-900 hover:text-white">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" />
                                </svg>
                                <NavLink to="/dashBoard/AdoptRequest" activeClassName="activeLink">
                                    <div className="flex items-center">
                                        <MdOutlineAddBox></MdOutlineAddBox>
                                        <span className="mx-4 font-medium">Adopt Request</span>
                                    </div>
                                </NavLink>
                            </a>
                            <a className="flex items-center px-4 py-2 mt-5 text-black transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" />
                                </svg>

                                <NavLink to="/dashBoard/createCampaign">
                                    <div className="flex items-center">
                                        <FaHome></FaHome>
                                        <span className="mx-4 font-medium"> Create Donation Campaign</span>
                                    </div>
                                </NavLink>
                            </a>
                            <a className="flex items-center px-4 py-2 mt-5 text-black transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" />
                                </svg>

                                <NavLink to="/dashBoard/myCampaignPost">
                                    <div className="flex items-center">
                                        <FaHome></FaHome>
                                        <span className="mx-4 font-medium">My Donation Campaigns</span>
                                    </div>
                                </NavLink>
                            </a>
                            <a className="flex items-center px-4 py-2 mt-5 text-black transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" />
                                </svg>

                                <NavLink to="/dashBoard/myDonetion">
                                    <div className="flex items-center">
                                        <FaHome></FaHome>
                                        <span className="mx-4 font-medium">My Donation</span>
                                    </div>
                                </NavLink>
                            </a>

                            <a className="flex items-center px-4 py-2 mt-5 text-black transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" />
                                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" />
                                </svg>
                                <NavLink to="/">
                                    <div className="flex items-center">
                                        <FaHome></FaHome>
                                        <span className="mx-4 font-medium">Home</span>
                                    </div>
                                </NavLink>
                            </a>
                        </nav>
                    </div>
                }
            </aside>
            <div className=" p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayout;