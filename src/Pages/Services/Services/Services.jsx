import ServicesBanner from "../ServicesBanner/ServicesBanner";

const cardItems = [
    {
        id: 1,
        image: 'https://i.ibb.co/5c19ZJ6/slide2.jpg',
        heading: 'Corporate Events',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis doloribus quia tenetur hic ea velit beatae voluptatum aspernatur ex corporis.'

    },
    {
        id: 2,
        image: 'https://i.ibb.co/J5DSR2F/slide3.jpg',
        heading: 'Weddings And Galas',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis doloribus quia tenetur hic ea velit beatae voluptatum aspernatur ex corporis.'

    },

    {
        id: 3,
        image: 'https://i.ibb.co/qdWcj5R/slide4.jpg',
        heading: 'Special Events',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis doloribus quia tenetur hic ea velit beatae voluptatum aspernatur ex corporis.'

    },
    {
        id: 4,
        image: '',
        heading: 'Cooking Classes',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis doloribus quia tenetur hic ea velit beatae voluptatum aspernatur ex corporis.'

    },
    {
        id: 5,
        image: '',
        heading: 'Meal Preparation in Your Home',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis doloribus quia tenetur hic ea velit beatae voluptatum aspernatur ex corporis.'

    },
    {
        id: 6,
        image: '',
        heading: 'Variety of Delicious Meals',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis doloribus quia tenetur hic ea velit beatae voluptatum aspernatur ex corporis.'

    },
    {
        id: 7,
        image: '',
        heading: 'Grocery Shopping',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis doloribus quia tenetur hic ea velit beatae voluptatum aspernatur ex corporis.'

    },
    {
        id: 8,
        image: '',
        heading: 'Client Specific Menu Options',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis doloribus quia tenetur hic ea velit beatae voluptatum aspernatur ex corporis.'

    },
    {
        id: 9,
        image: '',
        heading: 'In-Home Parties',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis doloribus quia tenetur hic ea velit beatae voluptatum aspernatur ex corporis.'
    },

    // Add more data as needed
]

const Services = () => {
    return (
        <div className="bg-[#F2ECE0]">
            {/* service Banner */}
            <ServicesBanner></ServicesBanner>


            {/* Service page content */}
            <div className="text-center pb-20">
                <h3 className=" text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-[#41444B] mt-28 xl:mt-40 mb-20" >We Specialize in Intimate <br />Catering</h3>

                <p className="text-sm text-slate-500 font-paragraph font-normal lg:text-lg mb-14 mx-11">Think back to your last party. It was probably a great time <br />with amazing friends.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-10 mx-10 md:mx-32 xl:mx-96">
                    {
                        cardItems.map(cardItem => (
                            <div key={cardItem.id}>
                                <div className="card shadow-xl relative transition-transform transform hover:-translate-y-1">

                                    <img src={cardItem.image} alt="food" className="rounded-xl" />

                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-lg lg:text-xl xl:text-2xl font-body font-bold my-5 text-[#41444B] hover:text-[#B49EBF] transition-transform hover:translate-y-1">{cardItem.heading}</h2>
                                        <p className=" text-sm md:text-base font-body text-[#41444B] hover:text-[#B49EBF] pb-7">{cardItem.body}</p>
                                        <div className="card-actions flex justify-center">
                                            <button className="btn bg-[#B49EBF] px-7 rounded-full hover:bg-[#B49EBF] text-white font-semibold font-paragraph ">More Info</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;