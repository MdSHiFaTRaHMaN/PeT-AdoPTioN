import Banner from "../Banner/Banner";
import PetArticel from "../PetArticel/PetArticel";
import PetCategory from "../PetCategory/PetCategory";
import ShowPet from "../ShowPet/ShowPet";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PetCategory></PetCategory>
            <ShowPet></ShowPet>
            <PetArticel></PetArticel>
        </div>
    );
};

export default Home;