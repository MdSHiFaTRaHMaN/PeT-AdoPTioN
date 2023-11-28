import { Link } from "react-router-dom";

const PetTable = ({ pet, serialNumber, handleDelete }) => {
    const { image, name, age, location, category, color, currentDateTime, gender, _id } = pet;
    return (
        <tr className="bg-white">
            <td>
                <span className="text-white px-2 py-1 ml-3 rounded-full bg-black">{serialNumber}</span>
            </td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">

                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-24 h-36 rounded" src={image} alt="" />
                        <div>
                            <h2 className=" text-gray-800 font-bold ">{name}</h2>
                            <p className="text-sm font-normal text-gray-600 dark:text-gray-400"></p>
                            <h6 className="text-red-400 font-bold text-lx">{category}</h6>
                            <h6 className="text-fuchsia-900 font-bold text-lx">{gender}</h6>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <p className="px-3 py-3 text-xs text-white rounded-full dark:bg-gray-800 bg-blue-100/60">{age} Year Old</p>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <p className="px-3 py-3 text-xs text-white rounded-full dark:bg-gray-800 bg-blue-100/60">{currentDateTime} </p>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <p className="px-3 py-3 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">{location}</p>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <p className="px-3 py-1 text-xs text-white rounded-full dark:bg-gray-800 bg-indigo-100/60">{color}</p>

                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    <Link to={`/updatePet/${_id}`}>
                        <button className="text-gray-500 transition-colors duration-200  dark:text-blue-700 hover:text-purple-950 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-pink-800 hover:text-red-900 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default PetTable;