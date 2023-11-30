import { useState, useEffect } from "react";
import CampaignCard from "./CampaignCard";

const DonationCampaign = () => {
    const [allCampaign, setAllCampaign] = useState([]);
    const [selectedRange, setSelectedRange] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/campaign")
            .then((res) => res.json())
            .then((data) => setAllCampaign(data));
    }, []);

    const handleFilter = (min, max) => {
        setSelectedRange({ min, max });
    };

    const filteredCampaigns = selectedRange
        ? allCampaign.filter(
            (campaign) =>
                campaign.Max >= selectedRange.min &&
                campaign.Max <= selectedRange.max
        )
        : allCampaign;

    const clearFilter = () => {
        setSelectedRange(null);
    };
    return (
        <section className="text-gray-600 body-font">
            <div className="container w-10/12 px-5 py-10 mx-auto">
                <h2 className="text-center text-purple-800 font-bold mb-6 text-3xl">
                    Posts of Donation Campaign
                </h2>
                <div className="flex justify-center space-x-4 mb-4">
                    <button onClick={clearFilter} className="btn btn-outline">
                        All
                    </button>
                    <button
                        onClick={() => handleFilter(0, 1000)}
                        className="btn btn-outline"
                    >
                        0-1000
                    </button>
                    <button
                        onClick={() => handleFilter(1001, 2000)}
                        className="btn btn-outline"
                    >
                        1001-2000
                    </button>
                    <button
                        onClick={() => handleFilter(2001, 3000)}
                        className="btn btn-outline"
                    >
                        2001-3000
                    </button>
                    <button
                        onClick={() => handleFilter(3001, 4000)}
                        className="btn btn-outline"
                    >
                        3001-4000
                    </button>
                    <button
                        onClick={() => handleFilter(4001, 5000)}
                        className="btn btn-outline"
                    >
                        4001-5000
                    </button>
                </div>
                <div className="grid lg:grid-cols-3 gap-7 mx-auto">
                    {filteredCampaigns.map((campaign) => (
                        <CampaignCard
                            key={campaign._id}
                            campaign={campaign}
                        ></CampaignCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DonationCampaign;
