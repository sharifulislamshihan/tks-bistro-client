import { FaTrash } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    //using reduce funtion to sumup the price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const axiosSecure = useAxiosSecure()

    // to delete order food
    const handleDelete = id => {
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
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
        <div className="mt-20">
            <h3 className="text-4xl font-heading text-center font font-bold">Welcome To TKS Bistro</h3>
            <h3 className="font-paragraph text-xl text-center font bold mt-4">Order Your Food and Enjoy</h3>
            <div className="flex justify-evenly mt-16 mb-20 items-center">
                <h2 className="text-xl text-black">Items : <span className="font-bold"> {cart.length}</span></h2>

                <h2 className="text-xl text-black">Total Price: <span className="font-bold">{totalPrice.toFixed(2)}</span></h2>

                <button className="btn btn-primary">Pay</button>
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
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>

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
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost text-lg">
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

export default Cart;