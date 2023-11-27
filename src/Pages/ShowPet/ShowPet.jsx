import { useEffect, useState } from "react";
import PetCard from "./petCard";

const ShowPet = () => {
    const [pets, setPets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const petsPerPage = 6;

    useEffect(() => {
        fetch("http://localhost:5000/pet")
            .then((res) => res.json())
            .then((data) => setPets(data));
    }, [])

    const indexOfLastProduct = currentPage * petsPerPage;
    const indexOffFirstProduct = indexOfLastProduct - petsPerPage;
    const currentPets = pets.slice(indexOffFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const nextPage = () => {
        if (currentPage < Math.ceil(pets.length / petsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    console.log(pets)
    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 w-11/12 mx-auto">
                <h1 className="text-center text-3xl text-violet-900 font-bold my-7">Pets Available for Adoption Nearby</h1>
                <div className="mx-auto ml-0 lg:ml-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {
                            currentPets.map((pet) => (
                                <PetCard key={pet._id} pet={pet}></PetCard>
                            ))
                        }
                    </div>
                    <ul className="pagination flex justify-center gap-3 mx-auto text-center mt-8 mb-3">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button
                                className="page-link btn btn-info text-white font-semibold text-center"
                                onClick={prevPage}>Previous
                            </button>
                        </li>
                        {Array(Math.ceil(pets.length / petsPerPage))
                            .fill()
                            .map((_, i) => (
                                <li
                                    key={i}
                                    className={`page-item ${i + 1 === currentPage ? "activeClass" : ""}`}>
                                    <button
                                        className="page-link btn btn-info text-white font-semibold text-center"
                                        onClick={() => paginate(i + 1)}>
                                        {i + 1}
                                    </button>
                                </li>
                            ))}
                        <li
                            className={`page-item ${currentPage === Math.ceil(pets.length / petsPerPage)
                                ? "disabled"
                                : ""
                                }`}>
                            <button
                                className="page-link btn btn-info text-white font-semibold text-center"
                                onClick={nextPage}
                            > Next
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ShowPet;