import { useState } from "react";
import { MdAddAPhoto, MdColorLens } from "react-icons/md";
import { TbCalendarTime, TbWritingSign } from "react-icons/tb";
import Select from 'react-select';
import Swal from "sweetalert2";
import { FaTransgenderAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import moment from "moment/moment";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;
const AddToPet = () => {
    const { user } = useContext(AuthContext);
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

    const handleAddPet = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const age = form.age.value;
        const location = form.location.value;
        const category = form.category.value;
        const discription = form.discription.value;
        const longDescription = form.longDescription.value;
        const color = form.color.value;
        const gender = form.gender.value;
        const email = user.email;
        const displayName = user.displayName;
        const currentDateTime = moment().format('MMMM Do YYYY, h:mm a');
        const petDetails = { name, image, age, location, category, discription, longDescription, color, gender, email, displayName, currentDateTime };
        console.log(petDetails);

        fetch('http://localhost:5000/pet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(petDetails),
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
                        confirmButtonText: "Yes, Add Book!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Added!",
                                text: "Your Book has been Added.",
                                icon: "success"
                            });
                        }
                    });
                }
            })
            .catch((error) => {
                // Handle network errors or errors in the response
                console.error('Fetch error:', error.message);
            });

    }

    return (
        <div className="flex">
            <div>
                <img src="https://i.ibb.co/WxDx79V/Screenshot-2023-11-29-002434.png" alt="" />
            </div>
            <section className="bg-white ml-0 lg:ml-">
                <div className="container  flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form className="w-full  max-w-md" onSubmit={handleAddPet}>
                        <div className="flex items-center justify-center mt-6">
                            <a className="w-2/3 pb-4 font-semibold text-3xl text-center text-blue-900 capitalize border-b border-teal-900">
                                Add To Pet
                            </a>
                        </div>

                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 ml-4 items-center mt-2 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <TbWritingSign></TbWritingSign>
                                </svg>
                            </span>

                            <input type="text"
                                name="name"
                                required
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:text-gray-700 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Enter PetName..." />
                        </div>
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 ml-4 items-center mt-2 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <MdAddAPhoto></MdAddAPhoto>
                                </svg>
                            </span>

                            <input type="text"
                                name="image"
                                required
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:text-gray-700 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Photo Url.." />
                        </div>

                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 ml-4 items-center mt-2 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <TbCalendarTime />                                </svg>
                            </span>

                            <input type="number"
                                name="age"
                                required
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:text-gray-700 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Pet Age..." />
                        </div>
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <MdColorLens></MdColorLens>
                            </span>
                            <Select
                                className="w-full"
                                id="petColor"
                                name="color"
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
                                    defaultValue="default"
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
                                cols="48"
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
                                cols="48"
                                placeholder="Write detailed information about the pet here..."
                            />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Add Pet
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddToPet;