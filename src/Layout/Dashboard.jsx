import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaCalendarCheck, FaHome, FaList, FaMoneyBill, FaShoppingCart, FaStar, FaThList, FaUsers, FaUtensils } from "react-icons/fa";

const Dashboard = () => {
    // todo: get is admin value from database
    const isAdmin = true;
    return (
        <div className="flex bg-[#f2ece0]">

            {/* dashboard sidebar */}
            {/* dedicated dashboard that can only used by user  */}
            <div className="w-80 min-h-screen bg-[#3c220c]">
                <ul className="menu py-10 px-6 space-y-7">

                    <li><NavLink to='/'>
                        <img src="https://i.ibb.co/WKhJqH9/Logo.png" className="w-3/4 md:w-1/2 mx-auto" alt="Tks Bistro" />
                    </NavLink>
                    </li>

                    {
                        isAdmin ?

                            // this for dedicated to admin
                            <>


                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                    <NavLink to='/dashboard/adminHome'>
                                        <FaHome></FaHome>
                                        ADMIN HOME</NavLink>
                                </li>

                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                    <NavLink to='/dashboard/addItems'>
                                        <FaUtensils></FaUtensils>
                                        ADD ITEMS</NavLink>
                                </li>

                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                    <NavLink to='/dashboard/manageItems'>
                                        <FaThList></FaThList>
                                        MANAGE ITEMS</NavLink>
                                </li>

                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                    <NavLink to='/dashboard/manageBookings'>
                                        <FaBook></FaBook>
                                        MANAGE BOOKINGS</NavLink>
                                </li>

                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                    <NavLink to='/dashboard/allUsers'>
                                        <FaUsers></FaUsers>
                                        ALL USERS</NavLink>
                                </li>
                            </>

                            :
                            // this is for user
                            <>

                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                    <NavLink to='/dashboard/userHome'>
                                        <FaHome></FaHome>
                                        USER HOME</NavLink>
                                </li>

                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                    <NavLink to='/dashboard/reservation'>
                                        <FaCalendar></FaCalendar>
                                        RESERVATION</NavLink>
                                </li>

                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                    <NavLink to='/dashboard/paymentHistory'>
                                        <FaMoneyBill></FaMoneyBill>
                                        PAYMENT HISTORY</NavLink>
                                </li>

                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                    <NavLink to='/dashboard/myCart'>
                                        <FaShoppingCart></FaShoppingCart>
                                        MY CART</NavLink>
                                </li>

                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                    <NavLink to='/dashboard/addReview'>
                                        <FaStar></FaStar>
                                        ADD REVIEW</NavLink>
                                </li>

                                <li className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                                    <NavLink to='/dashboard/myBooking'>
                                        <FaCalendarCheck></FaCalendarCheck>
                                        MY BOOKING</NavLink>
                                </li>
                            </>
                    }

                    <div className="divider divider-neutral"></div>
                    {/* shared dashBoard */}
                    <li
                        className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            HOME</NavLink>
                    </li>

                    <li
                        className=" text-lg xl:text-xl text-[#f2ece0]  font-normal font-heading py-2 px-3 md:p-0 ">
                        <NavLink to='/menu'>
                            <FaList></FaList>
                            MENU</NavLink>
                    </li>

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;