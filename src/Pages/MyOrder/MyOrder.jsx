import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";

const MyOrder = () => {
    const [cart] = useCart();
    console.log(cart);
    return (
        <div className="bg-[#F2ECE0]">

            {/* helmet */}
            <Helmet>
                <title>My Order: TKS Bistro</title>
            </Helmet>

            {/* banner of my order */}

            <div className="pt-2 px-2">
                <div className="relative h-64 sm:h-72 md:h-96 lg:h-128 overflow-hidden">
                    <img
                        src="https://i.ibb.co/Jq2YCJK/consulting.jpg"
                        alt="Banner Image"
                        className="object-cover w-full h-full"
                    />
                    {/* Overlay with dark color */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="absolute top-0 inset-0 flex items-center justify-center lg:justify-start lg:px-40 xl:px-80">

                        <div className=" text-left text-[#f2ece0]">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-4">MY ORDER</h1>
                            <p className="text-sm sm:text-base font-paragraph font-medium">HOME / MY ORDER</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Hello {cart.length}</h3>
        </div>
    );
};

export default MyOrder;