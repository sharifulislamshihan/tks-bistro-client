import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BiCoinStack, BiMessageSquare, BiMessageSquareCheck, BiSolidCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import AdminRevenueChart from "./AdminRevenueChart";
import AdminOrderSummery from "./AdminOrderSummery";



const AdminHome = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    return (
        <div>
            <h3 className="text-xl font-bold font-paragraph text-slate-600 text-center"><span className="text-black">Hi, Welcome Back ADMIN </span>
                {
                    user?.displayName ? user.displayName : null
                }
            </h3>

            <div className=" my-10 flex justify-center w-full">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                    <div className="flex gap-10 bg-white px-10 py-7 rounded-lg">
                        <div>
                            <h3 className="text-lg font-normal font-heading">Total Menus</h3>
                            <p className="text-3xl font-bold font-paragraph">653</p>
                        </div>
                        <div className="my-auto ">
                            <BiSolidCategory className="text-4xl text-blue-500" />
                        </div>
                    </div>

                    <div className="flex gap-10 bg-white px-10 py-7 rounded-lg">
                        <div>
                            <h3 className="text-lg font-normal font-heading">Total Revenue</h3>
                            <p className="text-3xl font-bold font-paragraph">$57038</p>
                        </div>
                        <div className="my-auto">
                            <BiCoinStack className="text-4xl text-blue-500" />
                        </div>
                    </div>

                    <div className="flex gap-10 bg-white px-10 py-7 rounded-lg">
                        <div>
                            <h3 className="text-lg font-normal font-heading">Total Order</h3>
                            <p className="text-3xl font-bold font-paragraph">5984</p>
                        </div>
                        <div className="btn btn-ghost my-auto">
                            <BiMessageSquareCheck className="text-4xl text-blue-500" />
                        </div>
                    </div>

                    <div className="flex gap-10 bg-white px-10 py-7 rounded-lg">
                        <div>
                            <h3 className="text-lg font-normal font-heading">Total Customer</h3>
                            <p className="text-3xl font-bold font-paragraph">12003</p>
                        </div>
                        <div className="btn btn-ghost my-auto">
                            <FaUsers className="text-4xl text-blue-500" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-1 md:mx-5 xl:mx-40">
                <div className="bg-white rounded-lg shadow-xl">
                    <AdminRevenueChart></AdminRevenueChart>
                </div>

                <div className="bg-white rounded-lg shadow-xl">
                    <AdminOrderSummery></AdminOrderSummery>
                </div>
            </div>
        </div>

    );
};

export default AdminHome;