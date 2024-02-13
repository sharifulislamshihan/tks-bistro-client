import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const Login = () => {
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
                    <form className="card-body">
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