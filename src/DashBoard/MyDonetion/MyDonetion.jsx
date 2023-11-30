import { useContext, useEffect } from "react";
import { useState } from "react";
import MyDonetionTable from "./MyDonetionTable";
import { AuthContext } from "../../AuthProvider/Authprovider";
import Swal from "sweetalert2";

const MyDonetion = () => {
    const [myDonetion, setMyDonetion] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetch("https://final-projact-server.vercel.app/myCampaign")
            .then(res => res.json())
            .then(data => setMyDonetion(data));
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
             if(result.isConfirmed){
                fetch(`https://final-projact-server.vercel.app/myCampaign/${id}`, {
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
                            const remaining = myDonetion.filter(borrow => borrow._id !== id);
                            setMyDonetion(remaining);
                        }
                    }) 
             }
        });
    }
    const myDonetionPost = myDonetion.filter(donet => donet.userEmail === user.email);
    console.log(myDonetionPost)
    return (
        <div>
            <section className=" w-[700px]">
                <h2 className="text-3xl text-purple-600 font-bold text-center">My Donetions: {myDonetionPost.length}</h2>
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
                                                        <span>Pet Name</span>
                                                    </button>
                                                </th>


                                                <th scope="col" className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-black">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Doneted Amount</span>
                                                    </button>
                                                </th>

                                                <th scope="col" className="relative py-3.5 px-4">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 ">
                                            {
                                                myDonetionPost.map(donetion => <MyDonetionTable
                                                    key={donetion._id}
                                                    donetion={donetion}
                                                    handleDelete={handleDelete}
                                                ></MyDonetionTable>)
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

export default MyDonetion;