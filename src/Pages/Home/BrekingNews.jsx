import Marquee from "react-fast-marquee";

const BrekingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaknews News</button>
            <Marquee>
             I can be a React component, multiple React components, or just some text.
           </Marquee>
        </div>
    );
};

export default BrekingNews;