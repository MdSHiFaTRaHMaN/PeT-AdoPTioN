
const ShowPet = () => {
    return (

        <section className="text-gray-600 body-font w-11/12 mx-auto">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-center text-3xl text-violet-900 font-bold my-7">Pets Available for Adoption Nearby</h1>
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <img className="object-cover object-center w-full h-64" src="https://i.ibb.co/pfHHvKq/Screenshot-2023-11-25-204944.png" alt="avatar"/>
                            <div className="px-6 py-4">
                                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Patterson johnson</h1>

                                <p className="py-2 text-gray-700 dark:text-gray-400">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowPet;