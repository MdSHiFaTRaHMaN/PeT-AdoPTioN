
const MyDonetionTable = ({ donetion, handleDelete }) => {
    const { name, image, _id, total } = donetion;
    return (
        <tr className="bg-white">
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">

                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-24 h-36 rounded" src={image} alt="" />
                    </div>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <p className="px-3 py-3 text-xs text-white rounded-full dark:bg-purple-800 bg-blue-100/60">{name}</p>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <p className="px-3 py-3 text-xs text-white rounded-full dark:bg-blue-800 bg-blue-100/60">{total} Taka Only</p>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    <button
                    className="btn btn-outline btn-error"
                    onClick={() => handleDelete(_id)}
                    >
                        Refund
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default MyDonetionTable;