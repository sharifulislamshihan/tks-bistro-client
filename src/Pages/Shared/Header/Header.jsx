import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";


const Header = () => {

    // TODO: My order will be invisible if there is no cart
    // TODO: make MYCART to DASHBOARD for admin

    const { user, logOut } = useContext(AuthContext);

    const [isAdmin] = useAdmin();
    //console.log(isAdmin);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const NavLinks = <>

        <NavLink to='/' activeclassName="active">
            <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0"><a>HOME</a></li>
        </NavLink>
        <NavLink to='/menu' activeclassName="active">
            <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0"><a>MENU</a></li>
        </NavLink>
        <NavLink to='/services' activeclassName="active">
            <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0"><a>SERVICES</a></li>
        </NavLink>
        <NavLink to='/'>
            <img src="https://i.ibb.co/WKhJqH9/Logo.png" className="w-3/4 md:w-1/2 mx-auto hidden lg:block" alt="Tks Bistro" />
        </NavLink>
        <NavLink to='/privateChef' activeclassName="active">
            <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>PRIVATE CHEF</a></li>
        </NavLink>
        <NavLink to='/contactUs' activeclassName="active">
            <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>CONTACT US</a></li>
        </NavLink>


        {
            user && isAdmin && <NavLink to='/dashboard/adminHome' activeclassName="active">
                <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>DASHBOARD</a></li>
            </NavLink>
        }

        {
            user && !isAdmin && <NavLink to='/dashboard/cart' activeclassName="active">
                <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>MY ORDER</a></li>
            </NavLink>
        }

        {
            user ?
                // logout
                <NavLink onClick={handleLogOut} activeclassName="active">
                    <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>LOGOUT</a></li>
                </NavLink>
                :
                // login
                <NavLink to='/login' activeclassName="active">
                    <li className=" text-base xl:text-lg text-black text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>LOGIN</a></li>
                </NavLink>
        }
    </>

    return (

        <nav className="h-72 md:h-68 " >

            <div className="max-w-screen-xl flex flex-col items-center justify-between lg:hidden mx-auto p-4">


                {/* logo we will only use it in tab and mobile */}
                <a href="" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                    <img src="https://i.ibb.co/WKhJqH9/Logo.png" className="w-1/3 lg:hidden" alt="Tks Bistro logo" />
                </a>
            </div>

            <div className="flex justify-center flex-col items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">

                {/* get Started button for md and small device */}
                <div className="text-center lg:hidden my-3">
                    {
                        user ?
                            <>
                                <div className=" avatar">
                                    <div className=" w-16 rounded-full">
                                        {
                                            user.photoURL ?

                                                <img src={user.photoURL} />
                                                :
                                                <img src="https://i.ibb.co/bB7cpJG/image.png" alt="" />
                                        }

                                    </div>
                                </div>
                            </>
                            :
                            <>
                            </>
                    }
                </div>

                {/* dropDown form mid and small device */}
                <div className="dropdown mx-auto">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content mt-3 z-[10] mx-auto shadow bg-[#f4d699] text-black rounded-box w-44 md:w-52">
                        {NavLinks}
                    </ul>
                </div>

            </div>


            {/* menu bar in large device */}

            <div className="items-center justify-center xl:pr-24 hidden w-full lg:flex flex-row lg:w-auto lg:order-1" id="navbar-cta">
                <ul className="flex flex-row items-center xl:pl-40  font-medium p-4 space-x-3 xl:space-x-10">
                    <NavLink to='/' activeclassName="active">
                        <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading"><a>HOME</a></li>
                    </NavLink>
                    <NavLink to='/menu' activeclassName="active">
                        <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading"><a>MENU</a></li>
                    </NavLink>
                    <NavLink to='/services' activeclassName="active">
                        <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading"><a>SERVICES</a></li>
                    </NavLink>
                    <NavLink to='/'>
                        <img src="https://i.ibb.co/LSJtGrZ/Logo.png" className=" lg:w-52 xl:w-72 mx-5 hidden lg:block" alt="Tks Bistro" />
                    </NavLink>
                    <NavLink to='/privateChef' activeclassName="active">
                        <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading"><a>PRIVATE CHEF</a></li>
                    </NavLink>


                    <NavLink to='/contactUs' activeclassName="active">
                        <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading "><a>CONTACT US</a></li>
                    </NavLink>

                    {
                        user ?
                            // logout
                            <NavLink onClick={handleLogOut} to='/login' activeclassName="active">
                                <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>LOGOUT</a></li>
                            </NavLink>
                            :
                            // login
                            <NavLink to='/login' activeclassName="active">
                                <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading py-2 px-3 md:p-0 "><a>LOGIN</a></li>
                            </NavLink>
                    }
                    {/* functional dashboard and my cart */}
                    {
                        user && isAdmin && <NavLink to='/dashboard/adminHome' activeclassName="active">
                            <li className=" text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading  "><a>DASHBOARD</a></li>
                        </NavLink>
                    }

                    {
                        user && !isAdmin && <NavLink to='/dashboard/cart' activeclassName="active">
                            <li className="text-base xl:text-lg text-white text-opacity-50 hover:text-opacity-100 font-normal font-heading  "><a>MY ORDER</a></li>
                        </NavLink>
                    }
                </ul>

                {/* get started button in lg device */}



                {
                    user ?

                        <>

                            <div className="absolute xl:right-10 lg:right-5 avatar">
                                <div className=" lg:w-10 xl:w-16 rounded-full">
                                    {
                                        user.photoURL ?

                                            <img src={user.photoURL} />
                                            :
                                            <img src="https://i.ibb.co/bB7cpJG/image.png" alt="" />
                                    }

                                </div>
                            </div>
                        </>
                        :
                        <>
                        </>
                }
            </div>


        </nav>

    );
};

export default Header;