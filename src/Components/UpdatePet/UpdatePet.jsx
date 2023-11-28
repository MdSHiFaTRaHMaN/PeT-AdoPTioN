import { useLoaderData } from "react-router-dom";

const UpdatePet = () => {
    const pet = useLoaderData();
    const {name} = pet;
    return (
        <div>
            <h1 className="text-3xl text-red-600">Hello{name}</h1>
        </div>
    );
};

export default UpdatePet;