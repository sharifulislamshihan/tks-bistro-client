/* eslint-disable react/prop-types */

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="flex flex-col xl:flex-row xl:justify-center mx-3 xl:mx-20 my-5">
            <div className="avatar flex justify-center xl:justify-start my-auto">
                <div className="w-60 xl:w-28 rounded">
                    <img src={image} />
                </div>
            </div>

            <div className=" text-center xl:text-left flex flex-col  mx-5 my-auto">
                <h3 className="text-2xl font-semibold font-heading text-[#41444B] hover:text-[#B49EBF] my-2">{name}<span className="text-lg font-normal"></span></h3>
                <p className="text-base font-body font-normal text-slate-500 mr-6">{recipe}</p>
            </div>
            <div className="flex flex-col my-auto gap-4 justify-end px-5">
                <h3 className="text-2xl font-extrabold font-heading text-[#41444B] hover:text-[#B49EBF]">${price}</h3>
                <button className="btn btn-outline border-[#B49EBF] text-[#B49EBF] hover:text-white hover:bg-[#B49EBF] hover:border-[#B49EBF]  mx-auto px-8 text-sm">Order Now</button>
            </div>
        </div>
    );
};

export default MenuItem;