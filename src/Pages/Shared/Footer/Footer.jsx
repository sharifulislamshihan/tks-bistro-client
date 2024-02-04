import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>

            {/* https://i.ibb.co/k6pXpQw/black-marble-texture-footer-background.jpg */}

            <footer className=" relative bg-cover bg-center min-h-screen" style={{
                backgroundImage: `url(https://i.ibb.co/HXj3k2M/black-cracked-textured-wall-background.jpg)`
            }} >
                {/* <div className="absolute inset-0 bg-yellow-700 bg-opacity-5"></div> */}
                <div className="mx-auto w-full p-4 py-6 lg:py-8">
                    <div className="justify-between">

                        {/* name and the email input field */}
                        <div className="text-center mt-32">
                            <h3 className="self-center text-6xl mb-1 font-heading font-bold whitespace-nowrap text-[#f2ece0]">Newsletter</h3>
                            <h2 className="self-center text-base mb-7 font-paragraph font-normal text-[#f2ece0]">Subscribe to our mailing list</h2>



                            <div className="flex flex-col md:flex-row justify-center mb-6">

                                <form>
                                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email</label>
                                    <div className="relative">
                                        <input type="email" id="search" className="block w-full md:w-96 py-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-[#f4d699] focus:border-[#f4d699] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" />

                                        <button type="submit" className="text-black font-heading font-medium my-auto absolute top-0 -end-2 bottom-0 bg-[#f4d699] hover:bg-[#f4d699] focus:ring-4 focus:outline-none focus:ring-[#f4d699]  rounded-full text-lg px-6 md:px-12 py-4 dark:bg-[#f4d699] dark:hover:bg-[#f4d699] dark:focus:ring-[#f4d699]">Sign Up</button>
                                    </div>
                                </form>

                            </div>


                            <div className="grid grid-cols-1 my-32 mx-auto lg:mx-60 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-6">
                                <div>
                                    <h2 className="mb-10 text-lg font-semibold font-heading text-white uppercase dark:text-white">MENU</h2>
                                    <div className="text-slate-400 font-paragraph text-base text-center dark:text-white font-medium">
                                        <Link>
                                            <h3 className=" my-3 hover:text-yellow-200 ">Private Chef</h3>
                                        </Link>
                                        <Link>
                                            <h3 className="mb-3 hover:text-yellow-200">Catering</h3>
                                        </Link>
                                        <Link>
                                            <h3 className="mb-3 hover:text-yellow-200">Menu</h3>
                                        </Link>
                                        <Link>
                                            <h3 className="mb-3 hover:text-yellow-200">About</h3>
                                        </Link>
                                    </div>
                                </div>


                                <div>
                                    <h2 className="mb-10 text-lg font-semibold font-heading text-white uppercase dark:text-white">CATERING</h2>
                                    <div className="text-slate-400 font-paragraph text-base text-center dark:text-white font-medium">
                                        <Link>
                                            <h3 className=" my-3 hover:text-yellow-200 ">Corporate Events</h3>
                                        </Link>
                                        <Link>
                                            <h3 className="mb-3 hover:text-yellow-200">Weddings And Galas</h3>
                                        </Link>
                                        <Link>
                                            <h3 className="mb-3 hover:text-yellow-200">Special Events</h3>
                                        </Link>
                                        <Link>
                                            <h3 className="mb-3 hover:text-yellow-200">Cooking Classes</h3>
                                        </Link>
                                    </div>
                                </div>


                                <div>
                                    <h2 className="mb-10 text-lg font-semibold font-heading text-white uppercase dark:text-white">CONTACTS</h2>
                                    <div className="text-slate-400 font-paragraph text-base text-center dark:text-white font-medium">
                                        <Link>
                                            <h3 className=" my-3 hover:text-yellow-200 ">1122 Potter Rd, Antelope</h3>
                                        </Link>

                                        <h3 className="mb-3 hover:text-yellow-200">sharifulislamshihan@gmail.com</h3>


                                        <h3 className="mb-3 hover:text-yellow-200">+8801783762684</h3>


                                    </div>
                                </div>


                                <div>
                                    <h2 className="mb-10 text-lg font-semibold font-heading text-white uppercase dark:text-white">SOCIAL</h2>
                                    <div className="text-slate-400 font-paragraph text-base text-center dark:text-white font-medium">
                                        <Link>
                                            <h3 className=" my-3 hover:text-yellow-200 ">Facebook</h3>
                                        </Link>
                                        <Link>
                                            <h3 className="mb-3 hover:text-yellow-200">Instagram</h3>
                                        </Link>
                                        <Link>
                                            <h3 className="mb-3 hover:text-yellow-200">LinkedIn</h3>
                                        </Link>
                                        <Link>
                                            <h3 className="mb-3 hover:text-yellow-200">Github</h3>
                                        </Link>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <hr className="my-6 border-gray-200 mx-auto dark:border-gray-700 lg:my-8" />
                        <div className="text-center">
                            <span className="text-sm text-gray-500 text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">TKS BISTRO™</a>. All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </footer>

        </div >
    );
};

export default Footer;