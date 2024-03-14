import { NavLink, Outlet } from "react-router-dom";
import { FaBell, FaBook, FaCalendar, FaCalendarCheck, FaEnvelope, FaHome, FaList, FaMoneyBill, FaShoppingCart, FaStar, FaThList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";
import { Sling as Hamburger } from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'

const Dashboard = () => {
    // todo: get is admin value from database
    const [isAdmin] = useAdmin();
    // const isAdmin = true;
    //console.log(isAdmin);

    // to set the menu bar in mobile device
    var style = {
        bmBurgerButton: {
            // position: 'absolute',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px'
        },
        bmCross: {
            background: '#000000'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#6F4E37',
            padding: '1em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmOverlay: {
            background: ''
        }
    }

    return (
        // <div className="flex bg-[#f2ece0]">

        //     {/* dashboard sidebar */}
        //     {/* dedicated dashboard that can only used by user  */}
        //     <div className="w-80 min-h-screen bg-[#3c220c]">
        //         <ul className="menu py-10 px-6 space-y-7">

        //             <li><NavLink to='/'>
        //                 <img src="https://i.ibb.co/WKhJqH9/Logo.png" className="w-3/4 md:w-1/2 mx-auto" alt="Tks Bistro" />
        //             </NavLink>
        //             </li>

        //             {
        //                 isAdmin ?

        //                     // this for dedicated to admin
        //                     <div>
        //                         <div>
        //                             <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //                                 <NavLink to='/dashboard/adminHome'>
        //                                     <FaHome></FaHome>
        //                                     ADMIN HOME</NavLink>
        //                             </li>

        //                             <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //                                 <NavLink to='/dashboard/addItems'>
        //                                     <FaUtensils></FaUtensils>
        //                                     ADD ITEMS</NavLink>
        //                             </li>

        //                             <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //                                 <NavLink to='/dashboard/manageItems'>
        //                                     <FaThList></FaThList>
        //                                     MANAGE ITEMS</NavLink>
        //                             </li>

        //                             <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //                                 <NavLink to='/dashboard/manageBookings'>
        //                                     <FaBook></FaBook>
        //                                     MANAGE BOOKINGS</NavLink>
        //                             </li>

        //                             <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //                                 <NavLink to='/dashboard/allUsers'>
        //                                     <FaUsers></FaUsers>
        //                                     ALL USERS</NavLink>
        //                             </li>
        //                         </div>
        //                         <div className="navbar-start md:pl-3 xl:pl-20 2xl:pl-40">
        //                             <div className="dropdown">
        //                                 <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                                     <Hamburger color='#FFFFFF' size={18} md:size={20}></Hamburger>
        //                                 </div>
        // <Menu styles={style}>

        //     <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //         <NavLink to='/dashboard/adminHome'>
        //             <FaHome></FaHome>
        //             ADMIN HOME</NavLink>
        //     </li>

        //     <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //         <NavLink to='/dashboard/addItems'>
        //             <FaUtensils></FaUtensils>
        //             ADD ITEMS</NavLink>
        //     </li>

        //     <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //         <NavLink to='/dashboard/manageItems'>
        //             <FaThList></FaThList>
        //             MANAGE ITEMS</NavLink>
        //     </li>

        //     <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //         <NavLink to='/dashboard/manageBookings'>
        //             <FaBook></FaBook>
        //             MANAGE BOOKINGS</NavLink>
        //     </li>

        //     <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //         <NavLink to='/dashboard/allUsers'>
        //             <FaUsers></FaUsers>
        //             ALL USERS</NavLink>
        //     </li>

        // </Menu>
        //                             </div>
        //                         </div>

        //                     </div>



        //                     :
        //                     // this is for user
        //                     <>

        // <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //     <NavLink to='/dashboard/userHome'>
        //         <FaHome></FaHome>
        //         USER HOME</NavLink>
        // </li>

        // <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //     <NavLink to='/dashboard/reservation'>
        //         <FaCalendar></FaCalendar>
        //         RESERVATION</NavLink>
        // </li>

        // <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //     <NavLink to='/dashboard/paymentHistory'>
        //         <FaMoneyBill></FaMoneyBill>
        //         PAYMENT HISTORY</NavLink>
        // </li>

        // <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //     <NavLink to='/dashboard/myCart'>
        //         <FaShoppingCart></FaShoppingCart>
        //         MY CART</NavLink>
        // </li>

        // <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //     <NavLink to='/dashboard/addReview'>
        //         <FaStar></FaStar>
        //         ADD REVIEW</NavLink>
        // </li>

        // <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //     <NavLink to='/dashboard/myBooking'>
        //         <FaCalendarCheck></FaCalendarCheck>
        //         MY BOOKING</NavLink>
        // </li>
        //                     </>
        //             }

        //             <div className="divider divider-neutral"></div>
        //             {/* shared dashBoard */}
        //             <li
        //                 className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //                 <NavLink to='/'>
        //                     <FaHome></FaHome>
        //                     HOME</NavLink>
        //             </li>

        //             <li
        //                 className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
        //                 <NavLink to='/menu'>
        //                     <FaList></FaList>
        //                     MENU</NavLink>
        //             </li>
        //             <div />
        //         </ul>
        //     </div>
        //     {/* dashboard content */}
        //     <div className="flex-1 p-10">
        //         <Outlet></Outlet>
        //     </div>
        // </div>

        <div>

            <div className=" bg-[#f2ece0]">
                {/* Navbar */}
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="mx-6">
                                {/* hamburger menu */}
                                <Hamburger color='#000000' size={18} md:size={20}></Hamburger>
                            </div>

                            {/* react menu */}
                            <Menu styles={style}>

                                {
                                    isAdmin ?
                                        <>
                                            <ul className="space-y-5 pt-10">
                                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                                    <NavLink className='flex gap-3' to='/dashboard/adminHome'>
                                                        <FaHome className="mt-1"></FaHome>ADMIN HOME</NavLink>
                                                </li>

                                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                                    <NavLink className='flex gap-3' to='/dashboard/addItems'>
                                                        <FaUtensils className="mt-1"></FaUtensils>
                                                        ADD ITEMS</NavLink>
                                                </li>

                                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                                    <NavLink className='flex gap-3' to='/dashboard/manageItems'>
                                                        <FaThList className="mt-1"></FaThList>
                                                        MANAGE ITEMS</NavLink>
                                                </li>

                                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                                    <NavLink className='flex gap-3' to='/dashboard/manageBookings'>
                                                        <FaBook className="mt-1"></FaBook>
                                                        MANAGE BOOKINGS</NavLink>
                                                </li>

                                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                                    <NavLink className='flex gap-3' to='/dashboard/allUsers'>
                                                        <FaUsers className="mt-1"></FaUsers>
                                                        ALL USERS</NavLink>
                                                </li>
                                            </ul>
                                        </>

                                        :

                                        <>
                                            <ul className="space-y-5 pt-10">
                                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                                    <NavLink className='flex gap-4' to='/dashboard/userHome'>
                                                        <FaHome className='mt-1'></FaHome>
                                                        USER HOME</NavLink>
                                                </li>

                                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                                    <NavLink className='flex gap-4' to='/dashboard/reservation'>
                                                        <FaCalendar className='mt-1'></FaCalendar>
                                                        RESERVATION</NavLink>
                                                </li>

                                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                                    <NavLink className='flex gap-4' to='/dashboard/paymentHistory'>
                                                        <FaMoneyBill className='mt-1'></FaMoneyBill>
                                                        PAYMENT HISTORY</NavLink>
                                                </li>

                                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                                    <NavLink className='flex gap-4' to='/dashboard/myCart'>
                                                        <FaShoppingCart className='mt-1'></FaShoppingCart>
                                                        MY CART</NavLink>
                                                </li>

                                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                                    <NavLink className='flex gap-4' to='/dashboard/addReview'>
                                                        <FaStar className='mt-1'></FaStar>
                                                        ADD REVIEW</NavLink>
                                                </li>

                                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                                    <NavLink className='flex gap-4' to='/dashboard/myBooking'>
                                                        <FaCalendarCheck className='mt-1'></FaCalendarCheck>
                                                        MY BOOKING</NavLink>
                                                </li>
                                            </ul>
                                        </>
                                }

                            </Menu>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <NavLink to='/'>
                            <a className="text-xl font-heading">TKS BISTRO</a>
                        </NavLink>
                    </div>
                    <div className="navbar-end">

                        <div className="flex gap-4 md:gap-10 mx-1 lg:mx-10">
                            <div>
                                <div className="indicator">
                                    <span className="indicator-item badge badge-secondary">2</span>
                                </div>
                                <FaEnvelope className=" text-lg md:text-xl lg:text-2xl cursor-pointer"></FaEnvelope>
                            </div>

                            <div>
                                <div className="indicator">
                                    <span className="indicator-item badge badge-secondary">4</span>
                                </div>
                                <FaBell className="text-lg md:text-xl lg:text-2xl cursor-pointer"></FaBell>
                            </div>

                            <div className="mt-3">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                                        <li>
                                            <a className="justify-between text-lg font-semibold font-paragraph">
                                                Profile
                                            </a>
                                        </li>
                                        <li><a className="text-lg font-semibold font-paragraph">Settings</a></li>
                                        <li><a className="text-lg font-semibold font-paragraph">Logout</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=" p-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;