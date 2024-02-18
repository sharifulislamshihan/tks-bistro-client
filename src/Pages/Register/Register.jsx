import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const PhotoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = {
            name: name,
            photoUrl: PhotoUrl,
            email: email,
            password: password
        }

        console.log(user);

        // password validation
        // if (password.length < 6) {
        //     const Toast = Swal.mixin({
        //         toast: true,
        //         position: "top-end",
        //         showConfirmButton: false,
        //         timer: 2000,
        //         timerProgressBar: true,
        //         didOpen: (toast) => {
        //             toast.onmouseenter = Swal.stopTimer;
        //             toast.onmouseleave = Swal.resumeTimer;
        //         }
        //     });
        //     Toast.fire({
        //         icon: "error",
        //         title: "Password should be atleast 6 characters"
        //     });
        //     return;
        // }
        // !/^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/.test(password)
        // else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(password)) {
        //     const Toast = Swal.mixin({
        //         toast: true,
        //         position: "top-end",
        //         showConfirmButton: false,
        //         timer: 2000,
        //         timerProgressBar: true,
        //         didOpen: (toast) => {
        //             toast.onmouseenter = Swal.stopTimer;
        //             toast.onmouseleave = Swal.resumeTimer;
        //         }
        //     });
        //     Toast.fire({
        //         icon: "error",
        //         title: "Password must contain atleast one capital letter and one special character"
        //     });
        //     return;
        // }


        // creating user
        createUser(email, password)
            .then(res => {

                // create user in the database
                const userInfo = {
                    name: name,
                    email: email,
                    password: password
                }
                // console.log(userInfo);
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        // console.log(res);
                        if (res.data.insertedId) {
                            form.reset();
                            Swal.fire("Account has been created.");
                            navigate('/');
                        }
                    })
            })
            // new user has been created
            .catch(error => {
                console.error(error);
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage);

                if (errorCode === 'auth/email-already-in-use') {
                    Swal.fire('Error', 'Email is already in use.', 'error');
                } else if (errorCode === 'auth/invalid-email') {
                    Swal.fire('Error', 'Invalid email address.', 'error');
                } else if (errorCode === 'auth/weak-password') {
                    Swal.fire('Error', 'Password is too weak. It should be at least 6 characters.', 'error');
                } else {
                    Swal.fire('Error', 'An error occurred during registration.', 'error');
                }
            })
        console.log(name, email, password);
        form.reset();

    }
    return (
        <div className="hero min-h-screen bg-[#F2ECE0] ">
            {/* helmet */}
            <Helmet>
                <title>Register: TKS Bistro</title>
            </Helmet>

            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 ">
                {/* login form image */}
                <div className="order-last lg:order-first">
                    <img src="https://i.ibb.co/QPnbDxY/authentication2.png" alt="authentication2" />
                </div>


                {/* login form */}
                <div className="card shrink-0 w-full max-w-sm shadow-2xl mx-auto mt-20 mb-32">
                    <h3 className="text-3xl font-semibold text-center pt-10">Sign Up</h3>
                    <form onSubmit={handleRegister} className="card-body">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-heading">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>


                        {/* PhotoUrl */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-heading">PhotoUrl</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="Photo Url" className="input input-bordered" required />
                        </div>

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-heading">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-heading">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            <input className="btn btn-outline border-[#F4D699] hover:border-[#F4D699] bg-[#F4D699] hover:bg-[#F4D699]  text-center text-base lg:text-lg font-body text-black hover:text-black my-5 lg:my-3" type="submit" value="Sign Up" />
                        </div>


                        <p className="font-paragraph text-sm">Already have an account? <Link to='/login' className="text-blue-500">Login</Link></p>

                        <p className="text-center text-sm font-paragraph mt-4">or Sign up with</p>
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

export default Register;
