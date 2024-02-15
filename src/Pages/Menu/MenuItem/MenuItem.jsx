/* eslint-disable react/prop-types */


import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    // use of custom hooks
    const { user } = useAuth();
    const navigate = useNavigate();


    const handleAddToCart = food => {
        if (user && user.email) {
            // TODO: send cart to the database
        }
        else {
            // or alert
            Swal.fire({
                title: "Your are not logged in",
                text: "Please login to order Food",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    //    send user to the login page
                    navigate('/login')

                    // to open the top of the page at first
                    window.scrollTo(0, 0);
                }
            });
        }
    }
    return (
        <div className="flex flex-col xl:flex-row xl:justify-center mx-3 xl:mx-20 my-5">
            <div className="avatar flex justify-center xl:justify-start my-auto">
                <div className="w-60 xl:w-28 rounded">
                    <img src={image} />
                </div>
            </div>

            <div className=" text-center xl:text-left flex flex-col  mx-5 my-auto">
                <h3 className="text-2xl font-semibold font-heading text-[#41444B] hover:text-[#B49EBF] my-5 lg:my-2">{name}<span className="text-lg font-normal"></span></h3>
                <p className="text-base font-body font-normal text-slate-500 lg:mr-6 md:mx-28 my-5 lg:my-0 lg:mx-0">{recipe}</p>
            </div>
            <div className="flex flex-col my-auto gap-4 justify-end px-5">
                <h3 className="text-2xl font-extrabold font-heading text-[#41444B] hover:text-[#B49EBF]">${price}</h3>
                <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-outline border-[#B49EBF] text-[#B49EBF] hover:text-white hover:bg-[#B49EBF] hover:border-[#B49EBF]  mx-auto px-8 text-sm">Order Now</button>
            </div>
        </div>
    );
};

export default MenuItem;