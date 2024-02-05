import SublimeSectionContent from "./SublimeSectionContent";
import SublimeSectionPhoto from "./SublimeSectionPhoto";


const SublimeSection = () => {
    return (

        // whole sublime section
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 md:mt-40 pb-40">
            
            <div>
                {/* sublime photo */}
                <SublimeSectionPhoto></SublimeSectionPhoto>
            </div>

            <div>
                {/* sublime content */}
                <SublimeSectionContent></SublimeSectionContent>
            </div>
        </div>
    );
};

export default SublimeSection;