import { useEffect, useState } from "react";

import Reviews from "../../Home/Reviews/Reviews";
import MenuBanner from "../MenuBanner/MenuBanner";
import MenuItem from "../MenuItem/MenuItem";
import { Helmet } from "react-helmet-async";

const Menu = () => {

    const [menu, setMenu] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    console.log(selectedCategory);
    // fetching data from locally
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
            })
        console.log(menu);

    }, [menu])


    // filtering menu button click wise
    const filteredMenu = selectedCategory
        ?
        // if there is any button clicked
        menu.filter(item => {
            item.category == selectedCategory
        })
        :
        // else show all the menu
        menu

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
                        onClick={() => setSelectedCategory('popular')}
                        className="btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph ">POPULAR</button>

                    <button
                        onClick={() => setSelectedCategory('offered')}
                        className="btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph ">OFFERED</button>

                    <button
                        onClick={() => setSelectedCategory('pizza')}
                        className="btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph ">PIZZA</button>

                    <button
                        onClick={() => setSelectedCategory('salad')}
                        className="btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph ">SALAD</button>

                    <button
                        onClick={() => setSelectedCategory('dessert')}
                        className="btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph ">DESSERT</button>

                    <button
                        onClick={() => setSelectedCategory('soup')}
                        className="btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph ">SOUP</button>
                </div>



                <div className="grid grid-cols-1 xl:grid-cols-2 mx-5  md:mx-10 lg:mx-40 mt-40">
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