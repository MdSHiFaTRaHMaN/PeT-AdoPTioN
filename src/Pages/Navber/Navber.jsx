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
            <div className="navbar bg-transparent bg-white shadow-2xl text-black px:0 lg:px-32">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black  rounded-box w-72">
                            <NavLink to='/'><a>Home</a></NavLink>
                            <NavLink to='/addBooks'><a>Pet Listing</a></NavLink>
                            <NavLink to='/allBooks'><a>DonationCampaigns</a></NavLink>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img src="https://i.ibb.co/qpW9HhV/Screenshot-2023-11-25-003802-removebg-preview.png" className='w-[76px]' alt="" />
                        <a className="normal-case text-sky-600 font-bold text-2xl">Pet adoption!</a>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal text-xl gap-5 px-1 items-center">
                        <NavLink to='/'><a>Home</a></NavLink>
                        <NavLink to='/addBooks'><a>Pet Listing</a></NavLink>
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
                                    <div className="ml-4">
                                    <h3>{user?.displayName}</h3>
                                    <h3>{user?.email}</h3>
                                    <div className="divider"></div>
                                    </div>
                                    <li><a>DeshBoard</a></li>
                                    <li><a onClick={handleSignOut}>LogOut</a></li>
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