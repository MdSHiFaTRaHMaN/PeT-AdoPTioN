const PetArticel = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="grid lg:grid-cols-2 gap-7">
            <div className="w-full pt-3 mt-16 bg-white rounded-lg shadow-lg">
                <div className="px-3">
                    <img src="https://i.ibb.co/Kx32d24/full-shot-woman-cute-dog.jpg" alt="" className="w-full h-[400px] bg-cover bg-center " />
                </div>
                <div className="flex justify-center -mt-16 md:justify-center">
                    <img className="object-cover w-20 mt-5 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://i.ibb.co/VDkXHyL/Screenshot-2023-11-25-183315.png"/>
                </div>

                <h2 className="mt-2 text-xl font-semibold text-center text-gray-800 md:mt-0">Dog Adoption Articles</h2>

                <p className="mt-2 text-sm text-gray-60 text-center">Learn more about caring for your new dog</p>

                <div className="flex justify-end mt-4">
                    <button className="w-full btn  btn-outline btn-primary rounded-b-lg">Read More</button>
                </div>
            </div>
            <div className="w-full pt-3 mt-16 bg-white rounded-lg shadow-lg">
                <div className=" px-3">
                    <img src="https://i.ibb.co/XjwH1f0/Screenshot-2023-11-25-043554.png" alt="" className="w-full h-[400px] bg-cover bg-center " />
                </div>
                <div className="flex justify-center -mt-16 md:justify-center">
                    <img className="object-cover w-20 mt-5 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://i.ibb.co/sbHJ3hw/Screenshot-2023-11-25-183346.png"/>
                </div>

                <h2 className="mt-2 text-xl font-semibold text-center text-gray-800 md:mt-0">Cat Adoption Articles</h2>

                <p className="mt-2 text-sm text-gray-60 text-center">Helpful insghts on what to expect!</p>

                <div className="flex justify-end mt-4">
                <button className="w-full btn  btn-outline btn-primary rounded-b-lg">Read More</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PetArticel;