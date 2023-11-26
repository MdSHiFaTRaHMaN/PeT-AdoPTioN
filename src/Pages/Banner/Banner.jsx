import P1 from "../../assets/p1.png"
import P2 from "../../assets/p2.png"
import './Banner.css'
const Banner = () => {
    return (
        <section className="text-gray-600 mt-7 bg-gray-100 rounded shadow-xl pb-32 body-font mx-32 backGround">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:w-3/5 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-5xl  mb-4 font-extrabold text-gray-900">Adopt a pet <br /> <span className="text-red-400">gain a friend</span>
                    </h1>
                    <p className="mb-8 mt-4 text-gray-600 leading-relaxed">Pet adoption is the process of transferring responsibility for a
                     pet that was previously owned by another party. Common sources for adoptable pets are animal shelters,
                      . Some organizations give adopters ownership of the pet, while others
                       use a guardianship model wherein the organization retains some control over the animal future use or care.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More</button>
                    </div>
                </div>
                <div className="lg:w-3/5 md:w-1/2 w-5/6">
                    <div className="lg:w-3/5 md:w-1/2 w-5/6 ml-32 relative">
                        <div className="absolute hidden lg:block">
                            <img src={P1} alt="" className="w-72 h-72 absolute -mt-32 ml-32 border-[13px] shadow-2xl" />
                            <img src={P2} alt="" className="w-72 h-72 mt-12 border-[13px] shadow-2xl" />
                        </div>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default Banner;