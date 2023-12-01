import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const BirdCategory = () => {
    const [totalBird, setTotalBird] = useState([]);
    useEffect(() => {
        fetch("https://pet-adopt-server.onrender.com/pet")
            .then(res => res.json())
            .then(data => setTotalBird(data))
    }, [])
    const birds = totalBird.filter(pet => pet.category === "Bird")
    return (
        <div>
             <div className="bg-white rounded-xl my-5 pb-7">
                <h1 className="text-center text-3xl mx-auto font-bold pt-7 text-blue-900">Total Post of Bird→{birds.length}</h1>
                <div className="grid px-14 my-7 mx-auto gap-9 lg:grid-cols-3">
                    {birds.map(bird => (
                        <div key={bird._id}>
                            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg ">
                                <img className="object-cover p-3 rounded-lg object-center w-full h-64" src={bird.image} alt="avatar" />
                                <div className="px-6 py-4">
                                    <h1 className="text-xl ml-1 font-semibold text-gray-800 dark:text-black">{bird.name}</h1>
                                    <div className="flex gap-1 items-center text-slate-800 font-extrabold">
                                        <img src="https://i.ibb.co/z8H2ZsJ/Screenshot-2023-11-28-002702-removebg-preview.png" className="w-5" />
                                        <span className="text-cyan-700"> Age:  </span>
                                        <h4 className="text-black font-semibold"> {bird.age} Years Old</h4>
                                    </div>
                                    <div className="flex justify-between -ml-1">
                                        <div className="flex items-center">
                                            <MdLocationOn className="text-blue-700 text-2xl"></MdLocationOn>
                                            <h3>{bird.location}</h3>
                                        </div>
                                        <Link to={`/petDetails/${bird._id}`}>
                                            <button className="py-2 px-4 bg-sky-500 rounded-lg text-white border-sky-500"
                                            >Show Details</button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BirdCategory;