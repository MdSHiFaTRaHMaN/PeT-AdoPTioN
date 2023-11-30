import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/Authprovider";

const UpdateCampaign = () => {
    const {user} = useContext(AuthContext)
    const petCampaign = useLoaderData();
    const { _id,name, image, lastDate, Max, discription, longDescription, total } = petCampaign;

    const handleUpdateCampaign = e => {

        e.preventDefault();
        const form = e.target;
        const email = user.email;
        const name = form.name.value;
        const image = form.image.value;
        const lastDate = form.lastDate.value;
        const Max = form.Max.value;
        const discription = form.discription.value;
        const longDescription = form.longDescription.value;
        const total = form.total.value;

        const updateCampaign = { name, email, image, lastDate, Max, total, discription, longDescription }
        console.log(updateCampaign);
        fetch(`http://localhost:5000/campaign/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCampaign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Seccess!',
                        text: 'Donetion Campaign Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'OKeY'
                    })
                }
            })
    }
    return (
        <div className="flex">
            <img src="https://i.ibb.co/BfG4H0J/Screenshot-2023-11-29-185145.png" alt="" className="hidden lg:block h-[600px]" />
            <section className=" p-6 mx-auto bg-white rounded-md shadow-md">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                <form onSubmit={handleUpdateCampaign}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700" >Pet Name</label>
                            <input
                                defaultValue={name}
                                type="text"
                                name="name"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700" >Last Date</label>
                            <input
                                name="lastDate"
                                defaultValue={lastDate}
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
                                defaultValue={Max}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700" >Donated Amount</label>
                            <input
                                name="total"
                                type="text"
                                defaultValue={total}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>
                    <div>
                        <label className="text-gray-700">Pet Image</label>
                        <input
                            type="text"
                            defaultValue={image}
                            name="image"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <textarea
                            className="border pt-2 pl-2 border-gray-700  mt-3 rounded"
                            id="petDescription"
                            rows="2"
                            cols="50"
                            defaultValue={discription}
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
                            defaultValue={longDescription}
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

export default UpdateCampaign;