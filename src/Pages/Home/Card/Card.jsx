
const Card = () => {


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-2 mb-2 ">

            {/* 1 */}
            <div className="relative transition-transform duration-300 transform hover:scale-110">

                <img
                    src="https://i.ibb.co/6NcYvfn/dessert-bg.jpg"
                    alt="Your Image"
                    className="w-full h-auto"
                    style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className=" p-8 text-white text-center">
                        <h1 className="text-base font-heading md:text-3xl lg:text-2xl xl:text-4xl  font-bold mb-4">
                            Catering Service
                        </h1>
                        <p className="text-xs font-paragraph xl:text-base mb-2 md:mb-4">
                            Would not you like to be a <br /> guest at your own party
                        </p>
                        <button className="btn bg-[#B49EBF] hover:bg-[#B49EBF] text-white btn-sm md:btn-md px-4 md:px-12 xl:my-3 rounded-full">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>




            {/* 2 */}
            <div className="relative transition-transform duration-300 transform hover:scale-110">
                <img
                    src="https://i.ibb.co/6NcYvfn/dessert-bg.jpg"
                    alt="Your Image"
                    className="w-full h-auto"
                    style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className=" p-8 text-white text-center">
                        <h1 className="text-base font-heading md:text-3xl lg:text-2xl xl:text-4xl  font-bold mb-4 ">
                            Table Ready Meals
                        </h1>
                        <p className="text-xs font-paragraph xl:text-base mb-2 md:mb-4">
                            Are you too busy to <br /> cook?
                        </p>
                        <button className="btn bg-[#B49EBF] hover:bg-[#B49EBF] text-white btn-sm md:btn-md px-4 md:px-12 xl:my-3 rounded-full">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>



            {/* 3 */}
            <div className="relative transition-transform duration-300 transform hover:scale-110">
                <img
                    src="https://i.ibb.co/6NcYvfn/dessert-bg.jpg"
                    alt="Your Image"
                    className="w-full h-auto"
                    style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className=" p-8 text-white text-center">
                        <h1 className="text-base font-heading md:text-3xl lg:text-2xl xl:text-4xl  font-bold mb-4">
                            Sample Menus
                        </h1>
                        <p className="text-xs font-paragraph xl:text-base mb-2 md:mb-4">
                            Look Through our Latest <br /> Menu
                        </p>
                        <button className="btn bg-[#B49EBF] hover:bg-[#B49EBF] text-white btn-sm md:btn-md px-4 md:px-12 xl:my-3 rounded-full">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;