import { NavLink } from "react-router-dom";


const Header = () => {

    const NavLinks = <>

        <NavLink to='/' activeclassName="active">
            <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0"><a>HOME</a></li>
        </NavLink>
        <NavLink to='' activeclassName="active">
            <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0"><a>MENU</a></li>
        </NavLink>
        <NavLink to='' activeclassName="active">
            <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0"><a>SERVICES</a></li>
        </NavLink>
        <NavLink to='/'>
            <img src="https://i.ibb.co/WKhJqH9/Logo.png" className="w-3/4 md:w-1/2 mx-auto hidden lg:block" alt="Tks Bistro" />
        </NavLink>
        <NavLink to='' activeclassName="active">
            <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>PRIVATE CHEF</a></li>
        </NavLink>
        <NavLink to='' activeclassName="active">
            <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>FEATURES</a></li>
        </NavLink>

        <NavLink to='' activeclassName="active">
            <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>CONTACT US</a></li>
        </NavLink>
    </>

    //     {/* <nav classNameName="h-56 bg-cover bg-no-repeat bg-center w-full" style={{
    //     backgroundImage: `url(https://i.ibb.co/HXj3k2M/black-cracked-textured-wall-background.jpg)`
    // }}>
    //     {/* Overlay */}
    //     <div classNameName="absolute inset-0 bg-yellow-700 bg-opacity-5"></div> 
    //     </nav >

    return (
        <div className="relative bg-cover bg-no-repeat bg-center w-full" style={{
            backgroundImage: `url(https://i.ibb.co/HXj3k2M/black-cracked-textured-wall-background.jpg)`
        }}>
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-yellow-700 bg-opacity-5 z-10"></div> */}
            <nav className="h-72 md:h-80 bg-cover bg-no-repeat bg-center w-full" style={{
                backgroundImage: `url(https://i.ibb.co/HXj3k2M/black-cracked-textured-wall-background.jpg)`
            }}>

                <div className="max-w-screen-xl flex flex-col items-center justify-between lg:hidden mx-auto p-4">


                    {/* logo we will only use it in tab and mobile */}
                    <a href="" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                        <img src="https://i.ibb.co/WKhJqH9/Logo.png" className="w-1/3 lg:hidden" alt="Tks Bistro logo" />
                    </a>
                </div>

                <div className="flex justify-center flex-col items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">

                    {/* get Started button for md and small device */}
                    <div className="text-center lg:hidden my-3">
                        <button type="button" className="btn text-black bg-[#f4d699] font-heading font-bold rounded-lg text-sm px-4 py-2 text-center">Get started</button>
                    </div>

                    {/* dropDown form mid and small device */}
                    <div className="dropdown mx-auto">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-[#f4d699] text-black rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>

                </div>


                {/* menu bar in large device */}

                <div className="items-center justify-center xl:gap-36 hidden w-full lg:flex flex-row lg:w-auto lg:order-1" id="navbar-cta">
                        <ul className="flex flex-row items-center xl:pl-40  font-medium p-4 space-x-3 xl:space-x-10">
                            <NavLink to='/' activeclassName="active">
                                <li className=" text-base xl:text-xl text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading"><a>HOME</a></li>
                            </NavLink>
                            <NavLink to='' activeclassName="active">
                                <li className=" text-base xl:text-xl text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading"><a>MENU</a></li>
                            </NavLink>
                            <NavLink to='' activeclassName="active">
                                <li className=" text-base xl:text-xl text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading"><a>SERVICES</a></li>
                            </NavLink>
                            <NavLink to='/'>
                                <img src="https://i.ibb.co/LSJtGrZ/Logo.png" className="w-72 mx-5 hidden lg:block" alt="Tks Bistro" />
                            </NavLink>
                            <NavLink to='' activeclassName="active">
                                <li className=" text-base xl:text-xl text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading"><a>PRIVATE CHEF</a></li>
                            </NavLink>
                            <NavLink to='' activeclassName="active">
                                <li className=" text-base xl:text-xl text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading"><a>LOG IN</a></li>
                            </NavLink>

                            <NavLink to='' activeclassName="active">
                                <li className=" text-base xl:text-xl text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading "><a>CONTACT US</a></li>
                            </NavLink>
                        </ul>

                    {/* get started button in lg device */}
                    {/* <div className="hidden lg:flex mx-20">
                        <button type="button" className="btn lg:btn-md text-black bg-[#f4d699] font-heading  font-bold rounded-lg text-sm px-4 py-2 text-center">Get started</button>
                    </div> */}
                </div>


            </nav>


        </div >
    );
};

export default Header;