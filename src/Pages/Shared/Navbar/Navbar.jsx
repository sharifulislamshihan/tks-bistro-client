import { Link, NavLink } from "react-router-dom";
import './active.css';

const Navbar = () => {

    const NavLinks = <>

        <NavLink to='/' activeClassName="active">
            <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0"><a>HOME</a></li>
        </NavLink>
        <NavLink to='' activeClassName="active">
            <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0"><a>MENU</a></li>
        </NavLink>
        <NavLink to='' activeClassName="active">
            <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0"><a>SERVICES</a></li>
        </NavLink>
        <NavLink to='/'>
            <img src="https://i.ibb.co/LSJtGrZ/Logo.png" className="w-3/4 md:w-1/2 mx-auto hidden md:block" alt="Tks Bistro" />
        </NavLink>
        <NavLink to='' activeClassName="active">
            <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>PRIVATE CHEF</a></li>
        </NavLink>
        <NavLink to='' activeClassName="active">
            <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>FEATURES</a></li>
        </NavLink>

        <NavLink to='' activeClassName="active">
            <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>CONTACT US</a></li>
        </NavLink>
    </>

    return (
        <div className=" navbar h-56 bg-cover bg-no-repeat bg-center w-full" style={{
            backgroundImage: `url(https://i.ibb.co/HXj3k2M/black-cracked-textured-wall-background.jpg)`
        }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-yellow-700 bg-opacity-5"></div>


            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#e3c777]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1e1d22] rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>

               <img className="w-40 lg:hidden" src="https://i.ibb.co/LSJtGrZ/Logo.png" alt="" />

            </div>
            <div className="navbar-center">
                <div className="hidden lg:block">
                    <ul className="menu menu-horizontal items-center lg:pl-10 space-x-16">
                        {NavLinks}
                    </ul>
                </div>

            </div>

            {/* https://i.ibb.co/z5K8XCk/image.png */}
            <div className="navbar-end pr-3 md:pr-10 lg:pr-20">

                <Link to=''>
                    <h3 className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 ">LOGIN</h3>
                </Link>

                {/* profile pic for dropdown */}
                {/* <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1"><img className="w-10 md:w-12 h-10 md:h-12 rounded-full" src="https://i.ibb.co/z5K8XCk/image.png" alt="" /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div> */}

            </div>
        </div>
    );
};

export default Navbar;