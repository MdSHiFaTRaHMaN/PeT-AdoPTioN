import { useLoaderData, useParams } from "react-router-dom";

const PetDetails = () => {
    const petDetails = useLoaderData();
    const { id } = useParams();
    const idInt = id;
    const pet = petDetails.find((details) => details._id === idInt);
    const { name, image, color, age, gender, location, category, discription } = pet;
    return (
        <section className="">
            <div className="container px-6 py-10 w-10/12 mx-auto">
                <div className="lg:-mx-6 lg:flex lg:items-center">
                    <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={image} alt="" />

                    <div className="w-full ml-0 mt-5 lg:mt-0 lg:ml-28 max-w-sm px-4 py-3 bg-white rounded-md shadow-md">
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-light text-gray-800 ">{name}</span>
                            <span className="px-3 py-1 text-sm text-green-500 uppercase bg-gray-200 rounded-full">Available to Adopt</span>
                        </div>
                        <h5 className="text-sm">A B O U T</h5>
                        <div className="overflow-x-auto mt-3">
                            <table className="table border-none">
                                {/* head */}
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>Colour</td>
                                        <td>{color}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>Age</td>
                                        <td>{age} year old</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>Gender</td>
                                        <td>{gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Location</td>
                                        <td>{location}</td>
                                    </tr>
                                    <tr>
                                        <td>Category</td>
                                        <td>{category}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className="btn bg-purple-900 text-white hover:bg-purple-700 w-full">Apply To Adopt</button>
                    </div>
                </div>
                <div className="mt-10 bg-white p-5 rounded">
                    <h1 className="text-3xl font-bold text-purple-700">Discriptions</h1>
                    <h4 className="my-3 font-semibold">{discription}</h4>
                    <p>Miny is very sweet and cuddly and absolutely loves to play. She's full of energy and would love another kitten/young cat to play with or someone home a lot. </p>
                    <div className="divider"></div>
                    <h2 className="text-xl font-semibold text-blue-700 my-4">Favourite Things</h2>
                    <div className="grid lg:flex gap-4">
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>Playing with Toys</span>
                        </div>
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>Cuddles on Sofa</span>
                        </div>
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>Scratches</span>
                        </div>
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>Laser Pointer Chase</span>
                        </div>
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>Climbing</span>
                        </div>
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>Pouncing</span>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h2 className="text-xl font-semibold text-blue-700 my-4">Detailed Information</h2>
                        <div className="flex items-center gap-1 ">
                            <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                            <span>House trained</span>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h2 className="text-xl font-semibold text-blue-700 my-4">Home Requirements</h2>
                        <div className="gap-6 grid lg:flex">
                            <div>
                                <h6>Minimum age of children</h6>
                                <span>5</span>
                            </div>
                            <div>
                                <h6>Can they live with dogs?</h6>
                                <span className="text-xs">Can live with a dog</span>
                            </div>
                            <div>
                                <h6>Can they live with cats?</h6>
                                <span className="text-xs">Can live with a cat</span>
                            </div>
                            <div className="flex items-center gap-1 ">
                                <img src="https://i.ibb.co/z2G22Rg/Screenshot-2023-11-28-024219-removebg-preview.png" alt="" className="w-4 h-4" />
                                <span>Must have someone home a lot</span>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <ul className="timeline">
  <li>
    <div className="timeline-start timeline-box">First Macintosh computer</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start timeline-box">iMac</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start timeline-box">iPod</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start timeline-box">iPhone</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start timeline-box">Apple Watch</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
  </li>
</ul>
                </div>
            </div>
        </section>
    );
};

export default PetDetails;