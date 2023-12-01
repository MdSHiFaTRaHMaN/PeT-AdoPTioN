import { useContext } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Authprovider";
import Swal from "sweetalert2";

const PetDetails = () => {
    const petDetails = useLoaderData();
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const idInt = id;
    const pet = petDetails.find((details) => details._id === idInt);
    const { email, name, image, color, age, gender, location, category, discription, longDescription } = pet;
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleAdoptUser = e => {
        e.preventDefault();
        const form = e.target;

        const adopterEmail = user.email;
        const userName = user.displayName;
        const number = form.number.value;
        const address = form.address.value;

        const addToAdopt = {email, adopterEmail,userName, number, address, image, category, color,name}
        console.log(addToAdopt)
        fetch('https://pet-adopt-server.onrender.com/request', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(addToAdopt)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              setIsOpen(false);
        })
    }
    return (
        <section className="">
            <div className="container px-6 py-10 w-10/12 mx-auto">
                <div className="lg:-mx-6 lg:flex lg:items-center">
                    <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={image} alt="" />

                    <div className="w-full ml-0 mt-5 lg:mt-0 lg:ml-28 max-w-sm px-4 py-3 bg-white rounded-md shadow-md">
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-light text-gray-800 ">{name}</span>
                            <span className="px-3 py-1 text-sm text-green-500 uppercase bg-gray-200 rounded-full">Available to Adopt</span>
                        </div>
                        <h5 className="text-sm">A B O U T</h5>
                        <div className="overflow-x-auto mt-3">
                            <table className="table border-none">
                                {/* head */}
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>Colour</td>
                                        <td>{color}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>Age</td>
                                        <td>{age} year old</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>Gender</td>
                                        <td>{gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Location</td>
                                        <td>{location}</td>
                                    </tr>
                                    <tr>
                                        <td>Category</td>
                                        <td>{category}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button onClick={() => setIsOpen(true)} className="btn bg-purple-900 text-white hover:bg-purple-700 w-full">Apply To Adopt</button>
                    </div>
                </div>
                <div className="mt-10 bg-white p-5 rounded">
                    <h1 className="text-3xl font-bold text-purple-700">Discriptions</h1>
                    <h4 className="my-3 font-semibold">{discription}</h4>
                    <p> {longDescription}</p>
                    <div className="divider"></div>
                    <h2 className="text-xl font-semibold text-blue-700 my-4">Favourite Things</h2>
                    <div className="grid lg:flex gap-4">
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>Playing with Toys</span>
                        </div>
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>Cuddles on Sofa</span>
                        </div>
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>Scratches</span>
                        </div>
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>Laser Pointer Chase</span>
                        </div>
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>Climbing</span>
                        </div>
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>Pouncing</span>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h2 className="text-xl font-semibold text-blue-700 my-4">Detailed Information</h2>
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>House trained</span>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h2 className="text-xl font-semibold text-blue-700 my-4">Home Requirements</h2>
                        <div className="gap-6 grid lg:flex">
                            <div>
                                <h6>Minimum age of children</h6>
                                <span>5</span>
                            </div>
                            <div>
                                <h6>Can they live with dogs?</h6>
                                <span className="text-xs">Can live with a dog</span>
                            </div>
                            <div>
                                <h6>Can they live with cats?</h6>
                                <span className="text-xs">Can live with a cat</span>
                            </div>
                            <div className="flex items-center gap-1 ">
                                <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                                <span>Must have someone home a lot</span>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <h2 className="text-xl font-semibold text-black my-4">Known Health Issues</h2>
                </div>
            </div>
            <div className="relative flex justify-center">

                {isOpen && (
                    <div
                        className="fixed inset-0 z-10 overflow-y-auto"
                        aria-labelledby="modal-title"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
                                &#8203;
                            </span>

                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                                <h2>Enter Your Infomation</h2>
                                <form className="mt-4" onSubmit={handleAdoptUser}>
                                    <div>
                                        <label htmlFor="emails-list" className="text-sm text-gray-700 ">
                                            Your Name
                                        </label>

                                        <label className="block mt-3" htmlFor="email">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={user?.displayName}
                                                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="emails-list" className="text-sm text-gray-700">
                                            Email address
                                        </label>

                                        <label className="block mt-3" htmlFor="email">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={user.email}
                                                placeholder="user@email.xyz"
                                                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="emails-list" className="text-sm text-gray-700 ">
                                            Phone Number
                                        </label>

                                        <label className="block mt-3" htmlFor="email">
                                            <input
                                                type="text"
                                                name="number"
                                                placeholder="0170011-2233"
                                                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="emails-list" className="text-sm text-gray-700">
                                           Your Parmanant Address
                                        </label>

                                        <label className="block mt-3" htmlFor="email">
                                            <input
                                                type="text"
                                                name="address"
                                                placeholder="Your Home Address..."
                                                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
                                            />
                                        </label>
                                    </div>
                                    <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2  hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                        >
                                            Send invites
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PetDetails;