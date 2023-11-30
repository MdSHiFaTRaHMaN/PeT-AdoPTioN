import { Link } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
    const { _id, name, image, Max, total, lastDate } = campaign;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-4 pt-4">
                <img src={image} alt="Shoes" className="rounded-xl h-[260px] w-[350px] bg-cover bg-center" />
            </figure>
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <h2 className="card-title">{name}</h2>
                    <h6 className="bg-purple-800 rounded-full text-white py-0.5 px-2">Last Date: {lastDate} </h6>
                </div>
                <h4 className="text-sky-950 font-bold">Maximum Donation: <span className="font-semibold ">{Max} TK</span></h4>
                <h3 className="text-sky-950 font-bold">Donated Amount: <span className="font-semibold ">{total} TK</span></h3>
                <Link to={`/Campaign/${_id}`}>
                    <div className="card-actions">
                        <button className="btn btn-primary w-full">Show Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CampaignCard;