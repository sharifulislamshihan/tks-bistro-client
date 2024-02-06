import EventPackageCard from "./EventPackageCard";

const EventPackage = () => {
    return (
        <div className="text-center">
            <h3 className=" text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-[#41444B] mt-28 xl:mt-40 mb-20" >We Specialize in Intimate <br />Catering</h3>

            <p className="text-sm text-slate-500 font-paragraph font-normal lg:text-lg mb-14 mx-11">Think back to your last party. It was probably a great time <br />with amazing friends.</p>

            <div>
                <EventPackageCard></EventPackageCard>
            </div>
        </div>
    );
};

export default EventPackage;