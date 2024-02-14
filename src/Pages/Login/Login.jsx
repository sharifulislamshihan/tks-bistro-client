import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const { signIn } = useContext(AuthContext);


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(res => {
                res.user
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });


                // Navigate after location
                //navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                // toast.error(error.message, { position: "top-right" });
                if (error.code === 'auth/invalid-email') {

                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "error",
                        title: "Invalid email."
                    });

                }
                else if (error.code === 'auth/wrong-password') {

                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "error",
                        title: "Invalid password."
                    });

                }
                else {

                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "error",
                        title: "Invalid email or password."
                    });
                }
                console.log(error);
            })
    }

return (
    <div className="hero min-h-screen bg-[#F2ECE0] ">
        {/* helmet */}
        <Helmet>
            <title>Login: TKS Bistro</title>
        </Helmet>
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 ">
            {/* login form image */}
            <div className="order-last lg:order-first">
                <img src="https://i.ibb.co/QPnbDxY/authentication2.png" alt="authentication2" />
            </div>


            {/* login form */}
            <div className="card shrink-0 w-full max-w-sm shadow-2xl mx-auto mt-20 mb-32">
                <h3 className="text-3xl font-semibold text-center pt-10">Login</h3>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-heading">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-heading">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-base font-body">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-3">
                        <input className="btn btn-outline border-[#F4D699] hover:border-[#F4D699] bg-[#F4D699] hover:bg-[#F4D699]  text-center text-base lg:text-lg font-body text-black hover:text-black my-5 lg:my-3" type="submit" value="Login" />
                    </div>


                    <p className="font-paragraph text-sm">Dont have an account? <Link to='/register' className="text-blue-500">Register with us</Link></p>

                    <div className="flex space-x-3 mx-auto mt-5">

                        {/* Login with google */}
                        <button className="btn border border-solid hover:bg-[#F4D699] font-heading text-lg"><FaGoogle className="text-xl"></FaGoogle></button>
                        {/* login with facebook */}
                        <button className="btn border border-solid hover:bg-[#F4D699] font-heading text-lg"><FaFacebook className="text-xl"></FaFacebook></button>
                        {/* login with twitter */}
                        <button className="btn border border-solid hover:bg-[#F4D699] font-heading text-lg"><FaTwitter className="text-xl"></FaTwitter></button>

                    </div>

                </form>


            </div>

        </div>
    </div>
);
};

export default Login;