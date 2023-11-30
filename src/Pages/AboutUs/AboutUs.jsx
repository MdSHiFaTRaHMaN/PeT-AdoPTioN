
const AboutUs = () => {
    return (
        <div className="w-10/12 mx-auto my-10 rounded-xl">
            <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/gRWmQ4q/Screenshot-2023-11-30-171404.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Adopet Pet</h1>
                        <p className="mb-5">Massage is a great modality to use with your pet. One of the most valuable assets of animal massage is overall balance and wellbeing. Regular massage helps to increase in blood and lymph circulation and enhancement of muscle tone and flexibility.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;