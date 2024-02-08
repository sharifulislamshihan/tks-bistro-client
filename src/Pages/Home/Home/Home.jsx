import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Consulting from "../Consulting/Consulting";
import EventPackage from "../EventPackage/EventPackage";
import Menu from "../Menu/Menu";
import Reviews from "../Reviews/Reviews";
import SublimeSection from "../SublimeSection/SublimeSection";


const Home = () => {
    return (
        <div className="bg-[#F2ECE0]">
            {/* helmet */}
            <Helmet>
                <title>TKS Bistro</title>
            </Helmet>


            <Banner></Banner>
            <div className="mx-2">
                <Card></Card>
                <SublimeSection></SublimeSection>
                <Consulting></Consulting>
                <EventPackage></EventPackage>
                <Menu></Menu>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;