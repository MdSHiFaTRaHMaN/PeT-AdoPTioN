import AboutUs from "../AboutUs/AboutUs.Jsx";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
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
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;