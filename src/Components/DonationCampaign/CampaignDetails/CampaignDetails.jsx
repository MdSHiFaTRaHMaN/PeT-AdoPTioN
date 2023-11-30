import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/Authprovider";

const CampaignDetails = () => {
    const {user} = useContext(AuthContext);
    const campaignDetails = useLoaderData();
    const { id } = useParams();
    const idInt = id;
    const campaign = campaignDetails.find((details) => details._id === idInt);
    const { name, image, Max, total, lastDate, discription, longDescription,email } = campaign;

    const handlePayment = () =>{
        const userEmail = user.email;
        const myDonetion = {name,image,total,userEmail,email};
        console.log(myDonetion)
        fetch('https://final-projact-server.vercel.app/myCampaign', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(myDonetion)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <section className=" w-10/12 mx-auto">
                <div className="relative flex">
                    <div className="min-h-screen lg:w-1/3"></div>
                    <div className="hidden w-3/4 min-h-screen bg-white lg:block"></div>

                    <div
                        className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
                            Love knows not its <span className="text-blue-500"> own depth </span> <br /> until the hour of separation.
                        </h1>

                        <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                            <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src={image} alt="" />

                            <div className="mt-8 lg:px-10 lg:mt-0">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-2xl font-semibold text-gray-800 ">
                                        {name}
                                    </h1>
                                    <h2 className="bg-purple-800 text-white py-0.5 px-2 rounded-full">Last Date: {lastDate}</h2>
                                </div>

                                <p className="max-w-lg mt-6 text-gray-900 ">
                                    {discription}
                                </p>
                                <p className="max-w-lg mt-6 text-gray-500">
                                    {longDescription}
                                </p>

                                <h3 className="mt-6 text-lg font-bold text-blue-500">Maximum Donation: {Max} TK</h3>
                                <p className="text-gray-600 font-semibold ">Doneted Amount: {total} TK</p>
                                <button className="btn btn-secondary mt-4" onClick={() => document.getElementById('my_modal_3').showModal()}>Donate now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <form>
                        <div className="w-full mx-auto rounded-lg bg-white p-5 text-gray-700" style={{ maxWidth: "600px" }}>
                            <div className="w-full pt-1 pb-2 mt-5">
                                <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                                    <img src="https://i.ibb.co/KwY2xDH/Screenshot-2023-11-30-000348-removebg-preview.png" alt="" />
                                </div>
                            </div>
                            <div className="mb-5">
                                <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
                            </div>
                            <div className="mb-3 flex -mx-2">
                                {/* Radio buttons for card types */}
                            </div>
                            <div className="mb-3">
                                <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                                <div>
                                    <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="SHiFaT RaHMaN" type="text" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div>
                                    <label className="block text-sm text-gray-800">Card Number</label>

                                    <div className="relative flex items-center mt-2">
                                        <span className="absolute">
                                            <svg className="mx-3" width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.179 11.8294C9.99493 12.8275 8.45902 13.43 6.78069 13.43C3.03582 13.43 0 10.4303 0 6.72997C0 3.02966 3.03582 0.0299683 6.78069 0.0299683C8.45902 0.0299683 9.99493 0.632466 11.179 1.63051C12.363 0.632466 13.8989 0.0299683 15.5773 0.0299683C19.3221 0.0299683 22.358 3.02966 22.358 6.72997C22.358 10.4303 19.3221 13.43 15.5773 13.43C13.8989 13.43 12.363 12.8275 11.179 11.8294Z" fill="#ED0006" />
                                                <path d="M11.1792 11.8294C12.6371 10.6005 13.5616 8.77192 13.5616 6.72997C13.5616 4.68801 12.6371 2.85941 11.1792 1.63051C12.3632 0.632465 13.8992 0.0299683 15.5775 0.0299683C19.3224 0.0299683 22.3582 3.02966 22.3582 6.72997C22.3582 10.4303 19.3224 13.43 15.5775 13.43C13.8992 13.43 12.3632 12.8275 11.1792 11.8294Z" fill="#F9A000" />
                                                <path d="M11.1788 11.8294C12.6367 10.6005 13.5611 8.77193 13.5611 6.72999C13.5611 4.68805 12.6367 2.85946 11.1788 1.63055C9.72084 2.85946 8.79639 4.68805 8.79639 6.72999C8.79639 8.77193 9.72084 10.6005 11.1788 11.8294Z" fill="#FF5E00" />
                                            </svg>

                                        </span>

                                        <input type="text" placeholder="5555555555554444" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5   focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 -mx-2 flex items-end">
                                {/* Expiration date dropdowns */}
                            </div>
                            <div className="flex gap-10">
                                <div className="mb-10">
                                    <label className="font-bold text-sm mb-2 ml-1">Security code</label>
                                    <div>
                                        <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
                                    </div>
                                </div>
                                <div className="mb-10">
                                    <label className="font-bold text-sm mb-2 ml-1">Enter Donete Amount</label>
                                        <div>
                                            <input
                                                className="w-64 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                                placeholder="0,000"
                                                type="text" />
                                        </div>
                                </div>

                            </div>
                                <div onClick={handlePayment}>
                                    <button className="block  w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                                </div>
                        </div>
                        </form>
                    </div>
                </dialog>
            </section>
        </div>
    );
};

export default CampaignDetails;