import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import Swal from "sweetalert2";

const Campaign = () => {
    const{ user } = useContext(AuthContext)
   const handleAddCampaign = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;
    const lastDate = form.lastDate.value;
    const Max = form.Max.value;
    const total = form.total.value;
    const discription = form.discription.value;
    const longDescription = form.longDescription.value;
    const email = user.email;
    const petCampaign = { name, image, lastDate, Max, discription, longDescription, total, email };
    console.log(petCampaign);

    fetch('http://localhost:5000/campaign', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(petCampaign),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            // Handle successful response
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, Add Donetion Campaign!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Added!",
                            text: "Your Pet has been Added.",
                            icon: "success"
                        });
                    }
                });
            }
        })
        .catch((error) => {
            console.error('Fetch error:', error.message);
        });
   }

    return (
        <div className="flex">
        <img src="https://i.ibb.co/BfG4H0J/Screenshot-2023-11-29-185145.png" alt="" className="hidden lg:block h-[600px]" />
        <section className=" p-6 mx-auto bg-white rounded-md shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

            <form onSubmit={handleAddCampaign}> 
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700" >Pet Name</label>
                        <input
                            type="text"
                            name="name"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700" >Last Date</label>
                        <input
                            name="lastDate"
                            type="date"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700" >Maximum Donation</label>
                        <input
                            type="text"
                            name="Max"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700" >Donated Amount</label>
                        <input
                            name="total"
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                </div>
                <div>
                    <label className="text-gray-700">Pet Image</label>
                    <input
                        type="text"
                        name="image"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
            
                <div>
                    <textarea
                        className="border pt-2 pl-2 border-gray-700  mt-3 rounded"
                        id="petDescription"
                        rows="2"
                        cols="50"
                        name="discription"
                        required
                        placeholder="Enter a short description or note about the pet..."
                    />
                </div>
                <div>
                    <textarea
                        className="border pt-2 pl-2 border-gray-700  mt-3 rounded"
                        id="longDescription"
                        name="longDescription"
                        required
                        rows="4"
                        cols="50"
                        placeholder="Write detailed information about the pet here..."
                    />
                </div>
                <div className="flex justify-end mt-6">
                    <button className="btn btn-info">Add Campaign</button>
                </div>
            </form>
        </section>
    </div>
    );
};

export default Campaign;