import { useState } from "react";

const RequestTable = ({ request, handleDelete }) => {
    const [isAccepted, setIsAccepted] = useState(false);

    const handleAccept = () => {
        setIsAccepted(true);
    };
    const { _id, adopterEmail, userName, number, address, image, category, color, name } = request;
    return (
        <tr className="bg-white">

            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">

                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-24 h-36 rounded" src={image} alt="" />
                        <div>
                            <h2 className=" text-gray-800 font-bold ">{name}</h2>
                            <p className="text-sm font-normal text-gray-600 dark:text-gray-400"></p>
                            <h6 className="text-red-400 font-bold text-lx">{category}</h6>
                            <h6 className="text-fuchsia-900 font-bold text-lx">{color}</h6>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-4 py-4 text-2xl font-semibold text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <p className="px-3 py-1 text-xs text-purple-800 rounded-full ">{userName}</p>
                <p className="px-3 py-1 text-xs text-purple-800 rounded-full ">{number}</p>
                <p className="px-3 py-1 text-xs text-purple-800 rounded-ful ">{adopterEmail} Year Old</p>
            </td>

            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <p className="px-3 py-3 text-xs text-white rounded-full dark:bg-green-600 bg-pink-100/60">{address}</p>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <p className="px-3 py-1 text-xs text-white rounded-full dark:bg-indigo-800 bg-indigo-100/60">{color}</p>

                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    <button
                        onClick={() => handleDelete(_id)}
                        className="text-gray-500 btn btn-error transition-colors duration-200 dark:hover:text-white dark:text-pink-800 hover:text-red-900 focus:outline-none">
                        Reject
                    </button>
                    <button
                        onClick={handleAccept}
                        className={`px-6 py-[14px] tracking-wide capitalize transition-colors duration-300 transform rounded-md focus:outline-none ${isAccepted
                                ? 'bg-green-500 text-white hover:bg-green-400'
                                : 'bg-blue-600 text-white hover:bg-blue-500'
                            }`}
                    >
                        {isAccepted ? 'Accepted' : 'Accept'}
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default RequestTable;