import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCalendarCheck, FaHome, FaMoneyBill, FaShoppingCart, FaStar } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="bg-[#f2ece0]">
            {/* dashboard sidebar */}
            <div className="w-80 min-h-full bg-orange-400">
                <ul className="menu py-10 px-6 space-y-7">
                    <li className=" text-lg xl:text-xl text-black  font-normal font-heading py-2 px-3 md:p-0 ">
                        <NavLink to='/dashboard/userHome'>
                        <FaHome></FaHome>
                        USER HOME</NavLink>
                        </li>

                        <li className=" text-lg xl:text-xl text-black  font-normal font-heading py-2 px-3 md:p-0 ">
                        <NavLink to='/dashboard/reservation'>
                        <FaCalendar></FaCalendar>
                        RESERVATION</NavLink>
                        </li>

                        <li className=" text-lg xl:text-xl text-black  font-normal font-heading py-2 px-3 md:p-0 ">
                        <NavLink to='/dashboard/paymentHistory'>
                        <FaMoneyBill></FaMoneyBill>
                        PAYMENT HISTORY</NavLink>
                        </li>

                        <li className=" text-lg xl:text-xl text-black  font-normal font-heading py-2 px-3 md:p-0 ">
                        <NavLink to='/dashboard/myCart'>
                        <FaShoppingCart></FaShoppingCart>
                        MY CART</NavLink>
                        </li>

                        <li className=" text-lg xl:text-xl text-black  font-normal font-heading py-2 px-3 md:p-0 ">
                        <NavLink to='/dashboard/addReview'>
                        <FaStar></FaStar>
                        ADD REVIEW</NavLink>
                        </li>

                        <li className=" text-lg xl:text-xl text-black  font-normal font-heading py-2 px-3 md:p-0 ">
                        <NavLink to='/dashboard/myBooking'>
                        <FaCalendarCheck></FaCalendarCheck>
                        MY BOOKING</NavLink>
                        </li>                                                

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;