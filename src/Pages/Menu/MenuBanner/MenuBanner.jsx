
const MenuBanner = () => {
    return (
        <div className="pt-2 px-2">
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-128 overflow-hidden">
                <img
                    src="https://i.ibb.co/Jq2YCJK/consulting.jpg"
                    alt="Banner Image"
                    className="object-cover w-full h-full"
                />
                {/* Overlay with dark color */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="absolute top-0 inset-0 flex items-center justify-center lg:justify-start lg:px-40 xl:px-80">

                    <div className=" text-left text-[#f2ece0]">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-4">MENU</h1>
                        <p className="text-sm sm:text-base font-paragraph font-medium">HOME / MENU</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBanner;