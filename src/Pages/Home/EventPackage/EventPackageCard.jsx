

const EventPackageCard = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 xl:gap-10 mx-10 md:mx-32 xl:mx-80">


            {/* 1 */}
            <div className="card shadow-xl relative transition-transform transform hover:-translate-y-1">
                <figure className="">
                    <img src="https://i.ibb.co/5c19ZJ6/slide2.jpg" alt="food" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lg lg:text-xl xl:text-2xl font-body font-bold my-5 text-[#41444B] hover:text-[#B49EBF] transition-transform hover:translate-y-1">Corporate Events</h2>
                    <div className="card-actions flex justify-center">
                        <button className="btn bg-[#B49EBF] px-7 rounded-full hover:bg-[#B49EBF] text-white font-semibold text-body ">More Info</button>
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className="card shadow-xl relative transition-transform transform hover:-translate-y-1">
                <figure className="">
                    <img src="https://i.ibb.co/J5DSR2F/slide3.jpg" alt="food" className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lg lg:text-xl xl:text-2xl font-body font-bold my-5 text-[#41444B] hover:text-[#B49EBF] transition-transform hover:translate-y-1">Weddings <br />And Galas</h2>
                    <div className="card-actions flex justify-center">
                        <button className="btn bg-[#B49EBF] px-7 rounded-full hover:bg-[#B49EBF] text-white font-semibold text-body ">More Info</button>
                    </div>
                </div>
            </div>


            {/* 3 */}
            <div className="card shadow-xl relative transition-transform transform hover:-translate-y-1">
                <figure className="">
                    <img src="https://i.ibb.co/qdWcj5R/slide4.jpg" alt="food" className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lg lg:text-xl xl:text-2xl font-body font-bold my-5 text-[#41444B] hover:text-[#B49EBF] transition-transform hover:translate-y-1">Special Events</h2>
                    <div className="card-actions flex justify-center">
                        <button className="btn bg-[#B49EBF] px-7 rounded-full hover:bg-[#B49EBF] text-white font-semibold text-body ">More Info</button>
                    </div>
                </div>
            </div>


            {/* 4 */}
            <div className="card shadow-xl relative transition-transform transform hover:-translate-y-1">
                <figure className="">
                    <img src="https://i.ibb.co/5c19ZJ6/slide2.jpg" alt="food" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lg lg:text-xl xl:text-2xl font-body font-bold my-5 text-[#41444B] hover:text-[#B49EBF] transition-transform hover:translate-y-1">Cooking Classes</h2>
                    <div className="card-actions flex justify-center">
                        <button className="btn bg-[#B49EBF] px-7 rounded-full hover:bg-[#B49EBF] text-white font-semibold text-body ">More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPackageCard;