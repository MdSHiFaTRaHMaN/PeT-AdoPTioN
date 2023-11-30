import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/Authprovider";
import { useState } from "react";
import { useEffect } from "react";

const AlUserInfo = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const adminUser = user.email === 'imadmin@gmail.com'
    useEffect(() => {
        fetch("https://final-projact-server.vercel.app/allUser")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            {
                adminUser ?
                    <div className="bg-white">
                        <h1 className="text-center py-4 text-3xl font-bold text-purple-800">All Users</h1>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>

                                        <th>Image</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user =>
                                            <tr key={user._id}>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src="https://i.ibb.co/C9GVgbx/Screenshot-2023-11-26-112111.png" alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{user.displayName}</div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <th>
                                                    <button className="">{user.email}</button>
                                                </th>
                                                <th>
                                                    <button className="btn btn-outline btn-secondary">Make Admin</button>
                                                </th>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div> :
                    <div className="flex flex-col items-center p-8 ml-72 mt-28 transition-colors duration-300 transform border cursor-pointer bg-gray-200 rounded-xl hover:border-transparent group hover:bg-blue-600">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://i.ibb.co/C9GVgbx/Screenshot-2023-11-26-112111.png" alt="" />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">{user.displayName}</h1>

                        <p className="mt-2 text-gray-500 capitalize  group-hover:text-gray-300">{user.email}</p>
                    </div>
            }
        </div>
    );
};

export default AlUserInfo;