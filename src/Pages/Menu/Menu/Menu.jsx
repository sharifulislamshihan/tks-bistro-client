import { useEffect, useState } from "react";

import Reviews from "../../Home/Reviews/Reviews";
import MenuBanner from "../MenuBanner/MenuBanner";
import MenuItem from "../MenuItem/MenuItem";
import { Helmet } from "react-helmet-async";

const Menu = () => {

    const [menu, setMenu] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    //console.log(selectedCategory);
    // fetching data from locally
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
            })
        //console.log(menu);

    }, [menu])

    const handleFilterClick = (category) => {
        setSelectedCategory(category)
    }


    // filtering menu button click wise
    const filteredMenu = selectedCategory
        ?
        // if there is any button clicked
        menu.filter((item) => item.category === selectedCategory)
        :
        // else show all the menu
        menu
    //console.log(filteredMenu);


    return (
        <div className="bg-[#F2ECE0]">
            {/* helmet */}
            <Helmet>
                <title>Menu: TKS Bistro</title>
            </Helmet>

            {/* **
 *Menu
    *FOOD ITEM
    * 
    * pizza
    * salad
    * dessert
    * popular
    * soup
    * offered
    * /}

            {/* banner section of menu */}
            <MenuBanner></MenuBanner>

            {/* Menu content */}
            <div className="text-center pb-20">
                <h3 className=" text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-[#41444B] mt-28 xl:mt-40 mb-20" >MENU</h3>

                <p className="text-sm text-slate-500 font-paragraph font-normal lg:text-lg mb-14 mx-11">Browse our traditional menus or let us <br />create something new for you.</p>

                <div className="flex flex-wrap gap-4 justify-center mx-20 pt-10">
                    <button
                        onClick={() => handleFilterClick('popular')}
                        // className="btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph "
                        // dynamic class for active button
                        className={`${selectedCategory === 'popular' ?
                            'btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph'
                            :
                            'btn btn-outline border-[#B49EBF] hover:border-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-black font-semibold font-paragraph'
                            }`}
                    >POPULAR</button>

                    <button
                        onClick={() => handleFilterClick('offered')}
                        // dynamic class for active button
                        className={`${selectedCategory === 'offered' ?
                            'btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph'
                            :
                            'btn btn-outline border-[#B49EBF] hover:border-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-black font-semibold font-paragraph'
                            }`}
                    >OFFERED</button>

                    <button
                        onClick={() => handleFilterClick('pizza')}
                        // dynamic class for active button
                        className={`${selectedCategory === 'pizza' ?
                            'btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph'
                            :
                            'btn btn-outline border-[#B49EBF] hover:border-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-black font-semibold font-paragraph'
                            }`}
                    >PIZZA</button>

                    <button
                        onClick={() => handleFilterClick('salad')}
                        // dynamic class for active button
                        className={`${selectedCategory === 'salad' ?
                            'btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph'
                            :
                            'btn btn-outline border-[#B49EBF] hover:border-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-black font-semibold font-paragraph'
                            }`}
                    >SALAD</button>

                    <button
                        onClick={() => handleFilterClick('dessert')}
                        // dynamic class for active button
                        className={`${selectedCategory === 'dessert' ?
                            'btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph'
                            :
                            'btn btn-outline border-[#B49EBF] hover:border-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-black font-semibold font-paragraph'
                            }`}
                    >DESSERT</button>

                    <button
                        onClick={() => handleFilterClick('soup')}
                        // dynamic class for active button
                        className={`${selectedCategory === 'soup' ?
                            'btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph'
                            :
                            'btn btn-outline border-[#B49EBF] hover:border-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-black font-semibold font-paragraph'
                            }`}
                    >SOUP</button>

                    <button
                        onClick={() => handleFilterClick('drinks')}
                        // dynamic class for active button
                        className={`${selectedCategory === 'drinks' ?
                            'btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph'
                            :
                            'btn btn-outline border-[#B49EBF] hover:border-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-black font-semibold font-paragraph'
                            }`}
                    >DRINKS</button>
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-2 mx-5  md:mx-10 lg:mx-28 mt-40">
                    {
                        filteredMenu.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
            </div>

            {/* menu item will be here */}





            {/* review from home */}
            <Reviews></Reviews>
        </div>

    );
};

export default Menu;