import { FaTrash } from "react-icons/fa6";

import useMenu from "../../../Hooks/useMenu";
import { FaUserEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });

    }

    return (
        <div>
            <div>
                <h3 className="text-lg font-heading font-semibold text-slate-500 text-center mt-5
                "></h3>

                <h3 className="text-3xl font-bold font-paragraph  my-7 text-center text-">MANAGE ITEMS</h3>
            </div>



            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="font-paragraph font-bold text-lg">
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>

                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-lg font-paragraph font-bold">
                                    {item.name}
                                </td>
                                <td className="text-lg font-paragraph font-bold">{item.price}</td>
                                <th>
                                    <Link to={`/dashboard/updateItem/${item._id}`} >
                                        <button
                                            onClick={() => handleUpdateItem(item)}
                                            className="btn btn-ghost text-xl ">
                                            <FaUserEdit></FaUserEdit>
                                        </button>
                                    </Link>
                                </th>
                                <th>
                                    <button
                                        onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost text-lg text-red-600">
                                        <FaTrash></FaTrash>
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItem;