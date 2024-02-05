import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Consulting from "../Consulting/Consulting";
import SublimeSection from "../SublimeSection/SublimeSection";


const Home = () => {
    return (
        <div className="bg-[#F2ECE0]">
            <Banner></Banner>
            <div className="mx-2">
                <Card></Card>
                <SublimeSection></SublimeSection>
                <Consulting></Consulting>
            </div>
        </div>
    );
};

export default Home;