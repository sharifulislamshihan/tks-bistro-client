
const Consulting = () => {
    return (
        <div className="relative">

            <img
                className="w-full"
                src="https://i.ibb.co/Jq2YCJK/consulting.jpg" alt="" />

            <div className="absolute top-10 lg:top-10 xl:top-1/3 right-20 md:right-60 xl:right-1/2 mx-40">
                <h3 className="text-[#F2ECE0] text-xl lg:text-4xl xl:text-6xl font-heading font-extrabold ">Restaurant Consulting Services</h3>
                <p className="text-[#F2ECE0] hidden lg:block lg:text-base xl:text-lg mt-7">TKS, along with his team, offers culinary and management services. We have the experience to provide concept development strategies and best practice principles in order to achieve maximum sales performance.</p>

                <button className=" btn hidden md:block btn-outline btn-[#F4D699] hover:bg-[#F4D699]  rounded-full px-20 text-center text-base lg:text-lg font-semibold font-body text-[#F4D699] hover:text-black my-5 lg:my-7">Get Started</button>
            </div>
        </div>
    );
};

export default Consulting;