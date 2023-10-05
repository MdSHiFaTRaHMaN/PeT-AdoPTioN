import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navber from "../Shared/Navber/Navber";
import RigthSideNav from "../Shared/RightSideNav/RigthSideNav";
import BrekingNews from "./BrekingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrekingNews></BrekingNews>
            <Navber></Navber>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2">
                    <h1>I am a Home News Coming Soon</h1>
                </div>
                <div>
                <RigthSideNav></RigthSideNav>

                </div>
            </div>
        </div>
    );
};

export default Home;