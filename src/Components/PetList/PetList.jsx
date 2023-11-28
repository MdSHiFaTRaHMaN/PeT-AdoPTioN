import { MdLocationOn } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { ImSearch } from "react-icons/im";

const PetList = () => {
    const allPets = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const filteredPets = allPets.filter((pet) => {
        const nameMatches = pet.name.toLowerCase().includes(searchTerm.toLowerCase());
        const categoryMatches = selectedCategory === "all" || pet.category === selectedCategory;
        return nameMatches && categoryMatches;
    });

    const petCategories = ["All", "Dog", "Cat", "Bird", "Rabbit"];

    return (
        <div>
            <div className="my-7 grid lg:flex justify-between w-10/12 mx-auto">
                <div className="relative flex items-center mt-2">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mt-2 mx-3 text-gray-400 dark:text-gray-500">
                            <ImSearch />
                        </svg>
                    </span>

                    <input type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search Pet..."
                        className="block w-[400px]  py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5   focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                <select
                    className="select select-bordered mt-4 lg:mt-0 select-info w-full max-w-xs ml-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {petCategories.map((category) => (
                        <option key={category} value={category}>
                            {category === "All" ? "All Categories" : category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid lg:grid-cols-3 gap-7 mx-auto w-10/12">
                {filteredPets.map((pet, index) => (
                    <div key={index}>
                        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg ">
                            <img
                                className="object-cover p-3 rounded-lg object-center w-full h-64"
                                src={pet.image}
                                alt="avatar"
                            />
                            <div className="px-6 py-4">
                                <h1 className="text-xl ml-1 font-semibold text-gray-800 dark:text-black">
                                    {pet.name}
                                </h1>
                                <div className="flex gap-1 items-center text-slate-800 font-extrabold">
                                    <img
                                        src="https://i.ibb.co/z8H2ZsJ/Screenshot-2023-11-28-002702-removebg-preview.png"
                                        className="w-5"
                                        alt="icon"
                                    />
                                    <span className="text-cyan-700"> Age: </span>
                                    <h4 className="text-black font-semibold">
                                        {pet.age} Years Old
                                    </h4>
                                </div>
                                <div className="flex justify-between -ml-1">
                                    <div className="flex items-center">
                                        <MdLocationOn className="text-blue-700 text-2xl" />
                                        <h3>{pet.location}</h3>
                                    </div>
                                    <Link to={`/petDetails/${pet._id}`}>
                                        <button className="py-2 px-4 bg-sky-500 rounded-lg text-white border-sky-500">
                                            Show Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PetList;
