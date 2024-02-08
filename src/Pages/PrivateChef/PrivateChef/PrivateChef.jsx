import { Helmet } from "react-helmet-async";
import PrivateChefBanner from "../PrivateChefBanner/PrivateChefBanner";


const PrivateChef = () => {
    return (
        <div className="bg-[#F2ECE0]">

             {/* helmet */}
             <Helmet>
                <title>Private Chef: TKS Bistro</title>
            </Helmet>


            <PrivateChefBanner></PrivateChefBanner>

        </div>
    );
};

export default PrivateChef;