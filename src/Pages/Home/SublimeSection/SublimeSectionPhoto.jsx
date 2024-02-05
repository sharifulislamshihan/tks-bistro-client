

const SublimeSectionPhoto = () => {
    return (

        // photo of sublime section
        <div className="">
            <div className="relative flex mx-5 md:pr-0 justify-end">
                <img
                    className=" w-2/3 xl:w-1/2 rounded-md transition-transform duration-300 transform hover:scale-110"
                    src="https://i.ibb.co/zGxs7CS/Part-1.jpg" alt="" />
                <div className="absolute bottom-0 left-0 lg:left-5 xl:left-60 ">
                    <img
                        className="w-2/3 rounded-lg transition-transform duration-300 transform hover:scale-110"
                        src="https://i.ibb.co/QCZnRW2/pic-for-sublime.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default SublimeSectionPhoto;