import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaBowlFood, FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { BiChat } from "react-icons/bi";


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
            <h3 className="text-xl font-bold font-paragraph text-slate-600"><span className="text-black">Hi, Welcome Back, </span>
                {
                    user?.displayName ? user.displayName : null
                }
            </h3>

            <div className="mx-auto my-10">
                <div className="stats stats-vertical lg:stats-horizontal shadow gap-5">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUserFriends className="text-3xl font-bold"></FaUserFriends>
                        </div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value">10</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaBowlFood className="text-3xl font-bold"></FaBowlFood>
                        </div>
                        <div className="stat-title">Menu</div>
                        <div className="stat-value">77</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaMoneyBillTrendUp className="text-3xl font-bold"></FaMoneyBillTrendUp>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">$1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <BiChat className="text-3xl font-bold"></BiChat>
                        </div>
                        <div className="stat-title">Total Order</div>
                        <div className="stat-value">600</div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AdminHome;