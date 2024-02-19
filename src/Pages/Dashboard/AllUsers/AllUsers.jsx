import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    // role update
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // to delete order food
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
        <div>
            <h3 className="text-slate-800 font-heading text-4xl font-bold text-center">Hello, Admin</h3>
            <h3 className="text-slate-700 font-paragraph text-2xl font-bold text-center mt-16">Total Users: {users.length}</h3>

            <div className="mt-20">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th className="text-lg font-paragraph font-bold">{index + 1}</th>

                                    <td className="text-base font-paragraph font-semibold">
                                        {user.name}
                                    </td>

                                    <td className="text-base font-paragraph font-semibold">
                                        {user.email}
                                    </td>
                                    <td>

                                        {
                                            user.role === 'admin' ? <h3 className="text-lg font-heading">
                                                Admin
                                            </h3>
                                                :

                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="btn btn-ghost text-lg bg-orange-600 hover:bg-orange-600">
                                                    <FaUsers className="text-white"></FaUsers>
                                                </button>

                                        }
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className="btn btn-ghost text-lg">
                                            <FaTrash className="text-red-700 text-lg"></FaTrash>
                                        </button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default AllUsers;