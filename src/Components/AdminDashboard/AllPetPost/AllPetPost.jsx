import { useEffect } from "react";
import { useState } from "react";
import PostCard from "./PostCard";
import Swal from "sweetalert2";

const AllPetPost = () => {
    const [allPost, setAllPost] = useState([]);
    useEffect(() => {
        fetch("https://pet-adopt-server.onrender.com/pet")
            .then(res => res.json())
            .then(data => setAllPost(data));
    }, [])
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://pet-adopt-server.onrender.com/pet/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = allPost.filter(borrow => borrow._id !== id);
                            setAllPost(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div>
            <section className=" w-[1200px]">
                <h2 className="text-3xl text-purple-600 font-bold text-center">Your Added Pets Total: {allPost.length}</h2>
                <section className="container px-4 mx-auto min-h-screen" >

                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden shadow-xl md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-white">
                                            <tr>
                                                <th className="text-black pl-3">
                                                    #
                                                </th>
                                                <th scope="col" className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-black">
                                                    <div className="flex items-center gap-x-3">
                                                        <span>Image</span>
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-black">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Pet Age</span>

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                                                            <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                                        </svg>
                                                    </button>
                                                </th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-black">Post Date & Time</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-black">Location</th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-black">Color</th>

                                                <th scope="col" className="relative py-3.5 px-4">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 ">
                                            {
                                                allPost.map((post, index) => <PostCard
                                                    key={post._id}
                                                    serialNumber={index + 1}
                                                    post={post}
                                                    handleDelete={handleDelete}
                                                ></PostCard>)
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

export default AllPetPost;