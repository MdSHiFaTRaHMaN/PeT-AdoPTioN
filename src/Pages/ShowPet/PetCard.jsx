import { MdLocationOn, } from "react-icons/md";
import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
    const { name, image, location, age, _id } = pet;
    console.log(_id)
    return (
        <div>
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg ">
                <img className="object-cover p-3 rounded-lg object-center w-full h-64" src={image} alt="avatar" />
                <div className="px-6 py-4">
                    <h1 className="text-xl ml-1 font-semibold text-gray-800 dark:text-black">{name}</h1>
                    <div className="flex gap-1 items-center text-slate-800 font-extrabold">
                        <img src="https://i.ibb.co/z8H2ZsJ/Screenshot-2023-11-28-002702-removebg-preview.png" className="w-5" />
                        <span className="text-cyan-700"> Age:  </span>
                        <h4 className="text-black font-semibold"> {age} Years Old</h4>
                    </div>
                    <div className="flex justify-between -ml-1">
                        <div className="flex items-center">
                            <MdLocationOn className="text-blue-700 text-2xl"></MdLocationOn>
                            <h3>{location}</h3>
                        </div>
                        <Link to={`petDetails/${_id}`}>
                            <button className="py-2 px-4 bg-sky-500 rounded-lg text-white border-sky-500"
                            >Show Details</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PetCard;