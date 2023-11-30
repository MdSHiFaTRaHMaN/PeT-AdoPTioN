import { useState } from "react";
import { FaTransgenderAlt } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Select from 'react-select';
import Swal from "sweetalert2";

const UpdatePet = () => {
    const pet = useLoaderData();
    const { _id, name, image, age, location, category, discription, color, gender, } = pet;

    console.log(pet)
    const [description, setDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [longDescription, setLongDescription] = useState('');


    const petCategories = [
        { value: 'Dog', label: 'Dog' },
        { value: 'Cat', label: 'Cat' },
        { value: 'Bird', label: 'Bird' },
        { value: 'Rabbit', label: 'Rabbit' },
    ];
    const handleCategoryChange = (selectedOption) => {
        setSelectedCategory(selectedOption);
    };
    const pickupLocations = [
        { value: 'Dhaka', label: 'Dhaka' },
        { value: 'Barisal', label: 'Barisal' },
        { value: 'Chittagong', label: 'Chittagong' },
        { value: 'Khulna', label: 'Khulna' },
        { value: 'Rajshahi', label: 'Rajshahi' },
        { value: 'Rangpur', label: 'Rangpur' },
    ];
    const handleLocationChange = (selectedOption) => {
        setSelectedLocation(selectedOption);
    };
    const genderOptions = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' },
    ];
    const handleGenderChange = (selectedOption) => {
        setSelectedGender(selectedOption);
    };
    const colorOptions = [
        { value: 'Black', label: 'Black' },
        { value: 'White', label: 'White' },
        { value: 'Brown', label: 'Brown' },
        { value: 'Gray', label: 'Gray' },
        { value: 'Cream', label: 'Cream' },
        { value: 'Calico', label: 'Calico' },
        { value: 'Tabby', label: 'Tabby' },
        { value: 'Brindle', label: 'Brindle' },
    ];
    const handleColorChange = (selectedOption) => {
        setSelectedColor(selectedOption);
    };


    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleLongDescriptionChange = (event) => {
        setLongDescription(event.target.value);
    };

    const handleUpdatePet = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const image = form.image.value;
        const age = form.age.value;
        const location = form.location.value;
        const category = form.category.value;
        const discription = form.discription.value;
        const color = form.color.value;
        const gender = form.gender.value;
        const longDescription = form.longDescription.value;

        const updatePet = { name, image, age, location, category, discription, longDescription, color, gender }
        console.log(updatePet)

        fetch(`https://final-projact-server.vercel.app/pet/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatePet)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Seccess!',
                        text: 'Book Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'OKeY'
                    })
                }
            })
    }

    return (
        <div className="flex">
            <img src="https://i.ibb.co/BPjGcLp/Screenshot-2023-11-29-164227-removebg-preview.png" alt="" className="hidden lg:block h-[600px]" />
            <section className=" p-6 mx-auto bg-white rounded-md shadow-md">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                <form onSubmit={handleUpdatePet}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700" >Pet Name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700" >Pet Age</label>
                            <input
                                name="age"
                                defaultValue={age}
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>
                    <div>
                        <label className="text-gray-700">Pet Image</label>
                        <input
                            type="text"
                            name="image"
                            defaultValue={image}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <MdColorLens></MdColorLens>
                        </span>
                        <Select
                            className="w-full"
                            id="petColor"
                            name="color"
                            defaultValue={color}
                            options={colorOptions}
                            value={selectedColor}
                            onChange={handleColorChange}
                            placeholder="Select a color"
                        />
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute text-blue-900">
                            <FaTransgenderAlt />
                        </span>
                        <Select
                            className="w-full"
                            id="petGender"
                            name="gender"
                            required
                            defaultValue={gender}
                            options={genderOptions}
                            value={selectedGender}
                            onChange={handleGenderChange}
                            placeholder="Select a gender"
                        />
                    </div>
                    <div className="flex">
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>
                            <Select
                                defaultValue={location}
                                className="w-full"
                                id="pickupLocation"
                                name="location"
                                required
                                options={pickupLocations}
                                value={selectedLocation}
                                onChange={handleLocationChange}
                                placeholder="Select a pickup location"
                            />                        </div>

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <Select
                                className="w-full"
                                id="petCategory"
                                defaultValue={category}
                                name="category"
                                required
                                options={petCategories}
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                placeholder="Select a pet category"
                            />
                        </div>
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
                            value={description}
                            onChange={handleDescriptionChange}
                            placeholder="Enter a short description or note about the pet..."
                        />
                    </div>
                    <div>
                        <textarea
                            className="border pt-2 pl-2 border-gray-700  mt-3 rounded"
                            id="longDescription"
                            name="longDescription"
                            required
                            value={longDescription}
                            onChange={handleLongDescriptionChange}
                            rows="4"
                            cols="50"
                            placeholder="Write detailed information about the pet here..."
                        />
                    </div>
                    <div className="flex justify-end mt-6">
                        <button className="btn btn-info">Update</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdatePet;