
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const ReviewsSlider = () => {
    return (
        <div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='py-4'>
                    {/* slide 1 */}
                    <div>
                        <div className='avatar'>
                            <div className='w-24 rounded-full'>
                                <img className='w-4 h-4 rounded ' src="https://i.ibb.co/4s7nFqT/image.png" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className='text-base font-paragraph text-slate-500 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam sapiente rem saepe fuga sequi iure reprehenderit fugit corporis optio.</p>
                        </div>
                        <div>
                            <h3 className='text-base text-center text-blue-500 hover:text-blue-700 hover:underline py-4'>Kainath karina</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Slide 2  */}
                    <div>
                        <div className='avatar'>
                            <div className='w-24 rounded-full'>
                                <img className='w-4 h-4 rounded ' src="https://i.ibb.co/q15b8VG/image.png" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className='text-base font-paragraph text-slate-500 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam sapiente rem saepe fuga sequi iure reprehenderit fugit corporis optio.</p>
                        </div>
                        <div>
                            <h3 className='text-base text-center text-blue-500 hover:text-blue-700 hover:underline py-4'>Kainath karina</h3>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    {/* Slide 3 */}

                    <div>
                        <div className='avatar'>
                            <div className='w-24 rounded-full'>
                                <img className='w-4 h-4 rounded ' src="https://i.ibb.co/R9q7grm/image.png" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className='text-base font-paragraph text-slate-500 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam sapiente rem saepe fuga sequi iure reprehenderit fugit corporis optio.</p>
                        </div>
                        <div>
                            <h3 className='text-base text-center text-blue-500 hover:text-blue-700 hover:underline py-4'>Kainath karina</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Slide 4 */}
                    <div>
                        <div className='avatar'>
                            <div className='w-24 rounded-full'>
                                <img className='w-4 h-4 rounded ' src="https://i.ibb.co/4s7nFqT/image.png" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className='text-base font-paragraph text-slate-500 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam sapiente rem saepe fuga sequi iure reprehenderit fugit corporis optio.</p>
                        </div>
                        <div>
                            <h3 className='text-base text-center text-blue-500 hover:text-blue-700 hover:underline py-4'>Kainath karina</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Slide 5 */}
                    <div>
                        <div className='avatar'>
                            <div className='w-24 rounded-full'>
                                <img className='w-4 h-4 rounded ' src="https://i.ibb.co/4s7nFqT/image.png" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className='text-base font-paragraph text-slate-500 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam sapiente rem saepe fuga sequi iure reprehenderit fugit corporis optio.</p>
                        </div>
                        <div>
                            <h3 className='text-base text-center text-blue-500 hover:text-blue-700 hover:underline py-4'>Kainath karina</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Slide 6 */}
                    <div>
                        <div className='avatar'>
                            <div className='w-24 rounded-full'>
                                <img className='w-4 h-4 rounded ' src="https://i.ibb.co/4s7nFqT/image.png" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className='text-base font-paragraph text-slate-500 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam sapiente rem saepe fuga sequi iure reprehenderit fugit corporis optio.</p>
                        </div>
                        <div>
                            <h3 className='text-base text-center text-blue-500 hover:text-blue-700 hover:underline py-4'>Kainath karina</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Slide 7 */}
                    <div>
                        <div className='avatar'>
                            <div className='w-24 rounded-full'>
                                <img className='w-4 h-4 rounded ' src="https://i.ibb.co/4s7nFqT/image.png" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className='text-base font-paragraph text-slate-500 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam sapiente rem saepe fuga sequi iure reprehenderit fugit corporis optio.</p>
                        </div>
                        <div>
                            <h3 className='text-base text-center text-blue-500 hover:text-blue-700 hover:underline py-4'>Kainath karina</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Slide 8 */}
                    <div>
                        <div className='avatar'>
                            <div className='w-24 rounded-full'>
                                <img className='w-4 h-4 rounded ' src="https://i.ibb.co/4s7nFqT/image.png" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className='text-base font-paragraph text-slate-500 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam sapiente rem saepe fuga sequi iure reprehenderit fugit corporis optio.</p>
                        </div>
                        <div>
                            <h3 className='text-base text-center text-blue-500 hover:text-blue-700 hover:underline py-4'>Kainath karina</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Slide 9 */}
                    <div>
                        <div className='avatar'>
                            <div className='w-24 rounded-full'>
                                <img className='w-4 h-4 rounded ' src="https://i.ibb.co/4s7nFqT/image.png" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className='text-base font-paragraph text-slate-500 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam sapiente rem saepe fuga sequi iure reprehenderit fugit corporis optio.</p>
                        </div>
                        <div>
                            <h3 className='text-base text-center text-blue-500 hover:text-blue-700 hover:underline py-4'>Kainath karina</h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default ReviewsSlider;