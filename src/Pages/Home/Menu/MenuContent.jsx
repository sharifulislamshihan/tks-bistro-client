// react icon
import { FaBowlFood } from "react-icons/fa6";

const MenuContent = () => {
    return (
        // menu content
        <div>
            <h3 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-[#41444B] text-center lg:text-left'>Menus</h3>

            <p className='text-base xl:text-lg font-normal text-[#41444B] text-center lg:text-left my-10'>Browse our traditional menus or let us create
                something new for you.</p>

            <div className="lg:pl-10">
                <div className="flex flex-col lg:flex-row text-center lg:text-left gap-10 mb-8 ">
                    <FaBowlFood className="text-6xl mx-auto lg:mx-0 my-auto hover:text-[#B49EBF]" />
                    <div className="mx-10 lg:mx-0">
                        <h3 className="text-2xl text-[#41444B] hover:text-[#B49EBF] font-heading font-semibold mb-7">Dinner Menu</h3>
                        <p className="text-base text-[#41444B] font-paragraph font-normal">Our menu features time honored favorites that have <br />come to define the perfect Park City dining experience.</p>
                    </div>
                </div>



                <div className="flex flex-col lg:flex-row text-center lg:text-left gap-10 mb-8">
                    <FaBowlFood className="text-6xl mx-auto lg:mx-0 my-auto hover:text-[#B49EBF]" />
                    <div className="mx-10 lg:mx-0">
                        <h3 className="text-2xl text-[#41444B] hover:text-[#B49EBF] font-heading font-semibold mb-7">Brunch Menu</h3>
                        <p className="text-base text-[#41444B] font-paragraph font-normal">Savor the stuffed French toast with warm syrup or delight <br /> in a classic eggs benedict with rich hollandaise.</p>
                    </div>
                </div>



                <div className="flex flex-col lg:flex-row text-center lg:text-left gap-10 mb-8">
                    <FaBowlFood className="text-6xl mx-auto lg:mx-0 my-auto hover:text-[#B49EBF]" />
                    <div className="mx-10 lg:mx-0">
                        <h3 className="text-2xl text-[#41444B] hover:text-[#B49EBF] font-heading font-semibold mb-7">Salad Menu</h3>
                        <p className="text-base text-[#41444B] font-paragraph font-normal">100% vegan, vegetarian & gluten free cuisine from our <br /> kitchen to your table.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuContent;