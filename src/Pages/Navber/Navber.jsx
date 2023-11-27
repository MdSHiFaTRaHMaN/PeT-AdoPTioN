import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Authprovider";
import { useContext } from "react";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="navber">
            <div className="navbar bg-transparent bg-fuchsia-950 rounded-b-3xl shadow-2xl text-black px:0 lg:px-32">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-white rounded-box w-72">
                            <NavLink to='/'><a>Home</a></NavLink>
                            <NavLink to='/petList'><a>Pet Listing</a></NavLink>
                            <NavLink to='/allBooks'><a>DonationCampaigns</a></NavLink>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img src="https://i.ibb.co/qpW9HhV/Screenshot-2023-11-25-003802-removebg-preview.png" className='w-[76px]' alt="" />
                        <a className="normal-case text-teal-300 font-bold text-2xl">Pet adoption!</a>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal text-xl text-white gap-5 px-1 items-center">
                        <NavLink to='/'><a>Home</a></NavLink>
                        <NavLink to='/petList'><a>Pet Listing</a></NavLink>
                        <NavLink to='/allBooks'><a>DonationCampaigns</a></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div className="avatar m-1" tabIndex={0}>
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src='https://i.ibb.co/C9GVgbx/Screenshot-2023-11-26-112111.png' />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <a className="flex items-center pt-2 text-sm text-gray-600 transition-colors duration-300 transform hover:bg-gray-10">
                                        <img className="flex-shrink-0 object-cover rounded-full w-9 h-9" src="https://i.ibb.co/C9GVgbx/Screenshot-2023-11-26-112111.png" alt="jane avatar" />
                                        <div className="mx-1">
                                            <h1 className="text-sm font-semibold text-gray-700">{user?.displayName}</h1>
                                            <p className="text-sm text-gray-500">{user?.email}</p>
                                        </div>
                                        <div className="divider"></div>
                                    </a>
                                    <Link to="/dashboard/myPet">
                                        <a className="flex items-center ml-2 p-3 text-sm  text-blue-900 capitalize transition-colors duration-300 transform hover:bg-gray-300 hover:rounded-xl">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                                                    stroke="currentColor"  />
                                            </svg>
                                            <span className="mx-1 font-semibold">
                                                DeshBoard
                                            </span>
                                        </a>
                                    </Link>
                                    {/* <li><a>DeshBoard</a></li> */}
                                    <a onClick={handleSignOut} className="flex items-center p-3 text-sm  text-blue-900 capitalize transition-colors duration-300 transform hover:bg-gray-300 hover:rounded-xl">
                                        <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
                                        </svg>
                                        <span className="mx-1 font-semibold">
                                            Sign Out
                                        </span>
                                    </a>
                                </ul>
                            </div>
                            :
                            <Link to="/login">
                                <button className="btn text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 ml-1 lg:ml-40">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;