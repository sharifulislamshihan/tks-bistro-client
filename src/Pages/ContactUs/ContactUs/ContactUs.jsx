import { Helmet } from "react-helmet-async";
import ContactUsBanner from "../ContactUsBanner/ContactUsBanner";


const ContactUs = () => {
    return (
        <div className="bg-[#F2ECE0]">
            {/* helmet */}
            <Helmet>
                <title>Contact Us: TKS Bistro</title>
            </Helmet>
            <ContactUsBanner></ContactUsBanner>

        </div>
    );
};

export default ContactUs;