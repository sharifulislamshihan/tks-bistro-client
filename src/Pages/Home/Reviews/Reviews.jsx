import ReviewsSlider from "./ReviewsSlider";


const Reviews = () => {
    return (
        <div className="py-20 xl:pt-32">
            <h3 className=' text-4xl xl:text-6xl font-heading font-extrabold text-center text-[#41444B]'>What Customers Are Saying <br />About Us</h3>

            <p className="text-base xl:text-normal font-paragraph font-normal text-center text-[#41444B] my-16">We pride ourselves on what our happy <br />clients say.</p>

            <div className="mx-5 md:mx-20 xl:mx-72">
                <ReviewsSlider></ReviewsSlider>
            </div>
        </div>
    );
};

export default Reviews;