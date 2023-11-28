import { Link } from "react-router-dom";

const PetCategory = () => {
    return (
        <section className="text-gray-600 body-font w-11/12 mx-auto">
        <div className="container px-5 py-7 mx-auto">
            <div className="flex flex-wrap  text-center">
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full h-28">
                    <Link to='/dog'>
                        <div className="px-4 py-6 bg-white rounded-lg shadow-xl shadow-slate-400">
                            <img src="https://i.ibb.co/ZMW1Y8N/Screenshot-2023-11-25-022538-removebg-preview.png" alt="" className="w-20 h-24 mx-auto" />
                            <h2 className="title-font font-medium text text-3xl text-gray-900">DOGS</h2>
                        </div>
                    </Link>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <Link to='/cat'>
                        <div className="shadow-xl shadow-slate-400 bg-white px-4 py-6 rounded-lg">
                            <img src="https://i.ibb.co/pvxwW3m/Screenshot-2023-11-25-023051-removebg-preview.png" alt="" className="w-20 h-24 mx-auto" />
                            <h2 className="title-font font-medium text-3xl text-gray-900">CATS</h2>
                        </div>
                    </Link>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <Link to='/rabbit'>
                        <div className="shadow-xl shadow-slate-400 bg-white px-4 py-6 rounded-lg">
                            <img src="https://i.ibb.co/26CS7Lv/Screenshot-2023-11-29-015052-removebg-preview.png" alt="" className="w-20 h-24 mx-auto" />
                            <h2 className="title-font font-medium text-3xl text-gray-900">RABBITS</h2>
                        </div>
                    </Link>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <Link to='/drama'>
                        <div className="px-4 shadow-xl shadow-slate-400 bg-white py-6 rounded-lg">
                            <img src="https://i.ibb.co/KbRCpdZ/Screenshot-2023-11-29-015406-removebg-preview.png" alt="" className="w-20 h-24 mx-auto" />
                            <h2 className="title-font font-medium text-3xl text-gray-900">BIRDS</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
        // <div>
        //     <section className="text-gray-600 body-font mx-32">
        //         <div className="container px-5 py-24 mx-auto">
        //             <div className="grid lg:flex -m-4 text-center">
        //                 <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
        //                     <div className="border-2 px-4 py-6 rounded-lg shadow bg-white">
        //                         <img src="https://i.ibb.co/ZMW1Y8N/Screenshot-2023-11-25-022538-removebg-preview.png" alt="" className="w-32 h-32 mx-auto" />
        //                         <h2 className="title-font font-medium text text-gray-900">DOG</h2>
        //                     </div>
        //                 </div>
        //                 <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        //                     <div className="border-2 px-4 py-6 rounded-lg shadow-2xl bg-white">
        //                         <img src="https://i.ibb.co/pvxwW3m/Screenshot-2023-11-25-023051-removebg-preview.png" alt="" className="w-32 h-32 mx-auto" />
        //                         <h2 className="title-font font-medium text-3xl text-gray-900">CAT</h2>
        //                     </div>
        //                 </div>
        //                 <div className="p-4 md:w-1/4 sm:w-1/2 w-full" onClick={() => document.getElementById('my_modal_3').showModal()}>
        //                     <div className="border-2 px-4 py-6 rounded-lg shadow-2xl bg-white">
        //                         <img src="https://i.ibb.co/N2BsTX2/Screenshot-2023-11-25-023617-removebg-preview.png" alt="" className="w-32 h-32 mx-auto" />
        //                         <h2 className="title-font font-medium text-3xl text-gray-900">Other Pet</h2>
        //                     </div>
        //                 </div>
        //                 <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        //                     <div className="border-2 px-4 py-6 rounded-lg shadow-2xl bg-white">
        //                         <img src="https://i.ibb.co/hWszXDS/pet-house-removebg-preview.png" alt="" className="w-32 h-32 mx-auto" />
        //                         <h2 className="title-font font-medium text-3xl text-gray-900">Services</h2>
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* You can open the modal using document.getElementById('ID').showModal() method */}
        //             {/* <button className="btn" >open modal</button> */}
        //             <dialog id="my_modal_3" className="modal">
        //                 <div className="modal-box w-7/12 max-w-5xl">
        //                     <form method="dialog">
        //                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        //                     </form>
        //                     <div className="flex flex-wrap -m-4 text-center my-auto">
        //                         <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        //                             <div className="border-2 px-4 py-6 rounded-lg shadow-2xl bg-white">
        //                                 <img src="https://i.ibb.co/NZh6jR0/rabbit-removebg-preview.png" alt="" className="w-32 h-32 mx-auto" />
        //                                 <h2 className="title-font font-medium text-3xl text-gray-900">RABBIT</h2>
        //                             </div>
        //                         </div>
        //                         <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        //                             <div className="border-2 px-4 py-6 rounded-lg shadow-2xl bg-white">
        //                                 <img src="https://i.ibb.co/54nLWk0/Screenshot-2023-11-25-030848-removebg-preview.png" alt="" className="w-32 h-32 mx-auto" />
        //                                 <h2 className="title-font font-medium text-3xl text-gray-900">BIRD</h2>
        //                             </div>
        //                         </div>
        //                         <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        //                             <div className="border-2 px-4 py-6 rounded-lg shadow-2xl bg-white">
        //                                 <img src="https://i.ibb.co/HptZx4K/Screenshot-2023-11-25-031220-removebg-preview.png" alt="" className="w-32 h-32 mx-auto" />
        //                                 <h2 className="title-font font-medium text-3xl text-gray-900">HORSES</h2>
        //                             </div>
        //                         </div>
        //                     </div>
                            

        //                 </div>
        //             </dialog>
                   
        //         </div>
        //     </section>
        // </div>
    );
};

export default PetCategory;