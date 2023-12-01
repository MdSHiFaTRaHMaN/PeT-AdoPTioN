import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import RequestTable from "./RequestTable";
import Swal from "sweetalert2";

const AdoptRequest = () => {
    const { user } = useContext(AuthContext)
    const [request, setRequest] = useState([]);
    useEffect(() => {
        fetch("https://pet-adopt-server.onrender.com/request")
            .then(res => res.json())
            .then(data => setRequest(data))
    }, []);
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Request has been Reject!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://pet-adopt-server.onrender.com/request/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Rejected!",
                                text: "User request Success.",
                                icon: "success"
                            });
                            const remaining = request.filter(borrow => borrow._id !== id);
                            setRequest(remaining);
                        }
                    })
            }
        });
    }
    const allRequest = request.filter(request => request.email === user.email);
    console.log(allRequest)
    return (
        <div>
            <section className=" w-[900px]">
                <h2 className="text-3xl text-purple-600 font-bold text-center">Your Added Pets Total: </h2>
                <section className="container px-4 mx-auto min-h-screen" >

                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden shadow-xl md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-white">
                                            <tr>
                                                <th scope="col" className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-black">
                                                    <div className="flex items-center gap-x-3">
                                                        <span>Image</span>
                                                    </div>
                                                </th>



                                                <th scope="col" className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-black">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Requester Information</span>

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                                                            <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                                        </svg>
                                                    </button>
                                                </th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-black">Location</th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-black">Color</th>

                                                <th scope="col" className="relative py-3.5 px-4">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 ">
                                            {
                                                allRequest.map(request =>
                                                    <RequestTable
                                                        key={request._id}
                                                        request={request}
                                                        handleDelete={handleDelete}
                                                    ></RequestTable>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </section>
        </div>
    );
};

export default AdoptRequest;