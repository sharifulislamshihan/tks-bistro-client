import { useEffect, useState } from "react";
import Reviews from "../../Home/Reviews/Reviews";
import MenuBanner from "../MenuBanner/MenuBanner";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {

    const [menu, setMenu] = useState([]);
    // fetching data from locally
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            // filtering populer item from menu
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
        console.log(menu);

    },[menu])
    return (
        <div className="bg-[#F2ECE0]">

            {/* banner section of menu */}
            <MenuBanner></MenuBanner>

            {/* Menu content */}
            <div className="text-center pb-20">
                <h3 className=" text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-[#41444B] mt-28 xl:mt-40 mb-20" >MENU</h3>

                <p className="text-sm text-slate-500 font-paragraph font-normal lg:text-lg mb-14 mx-11">Browse our traditional menus or let us <br />create something new for you.</p>

                <div className="flex flex-wrap gap-4 justify-center mx-20 pt-10">
                    <button className="btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph ">Dinner Menu</button>

                    <button className="btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph ">Brunch Menu</button>

                    <button className="btn bg-[#B49EBF] px-10 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph ">Vegan and Gulten Free Menu</button>
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-2 mx-40 mt-40">
                    {
                        menu.map(item => <MenuItem
                        key={item._id}
                        item ={item}
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