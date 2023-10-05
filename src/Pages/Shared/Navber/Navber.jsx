import { Link, NavLink } from "react-router-dom";
import User from '../../../assets/user.png'

const Navber = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center list-none">
      <li className="mr-5 hover:text-gray-900"><NavLink to='/'>Home</NavLink> </li>
      <li className="mr-5 hover:text-gray-900"><NavLink to='/about'>About</NavLink></li>
      <li className="mr-5 hover:text-gray-900"><NavLink to='/career'>Career</NavLink></li>
    </nav>
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={User} />
        </div>
      </label>
    <Link to='/login'>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Login
      </button>
    </Link>
  </div>
</header>
        </div>
    );
};

export default Navber;