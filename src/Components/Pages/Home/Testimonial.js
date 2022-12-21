import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

const Testimonial = () => {
    return (
        <div className='py-[50px] md:py-[100px]'>
            <div className="">
                <h3 className='font-[700] text-[16px] sm:text-[18px] md:text-[24px] text-[#FF3E54] leading-[20px] text-center'>\ From our Customers \</h3>
                <h3 className='font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#0E1F51] mt-[10px] mb-[40px] lg:leading-[40px] text-center'>Testimonials</h3>


                <div>
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                              slidesPerView: 1.5,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 1.5,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 1.90,
                              spaceBetween: 50,
                            },
                          }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className=''>
                            <div className='bg-[#F7F7F7] rounded-[10px] p-[30px] lg:max-w-[750px]'>
                                <div className='flex justify-between items-center'>
                                    <img src="https://i.ibb.co/ZLgMFDc/Ellipse-4.png" alt="" />
                                    <img src="https://i.ibb.co/B6MBNnV/image.png" alt="" />
                                </div>

                                <p className='font-[500] text-[14px] md:text-[16px] leading-[26px] mt-[40px] mb-[30px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
                                <h6 className='text-[16px] leading-[20px] font-[700] text-[#FF3E54]'>Samual Karl</h6>
                                <h6 className='text-[14px] leading-[20px] font-[500] mt-[5px]'>CEO</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div className='bg-[#F7F7F7] rounded-[10px] p-[30px] lg:max-w-[750px]'>
                                <div className='flex justify-between items-center'>
                                    <img src="https://i.ibb.co/ZLgMFDc/Ellipse-4.png" alt="" />
                                    <img src="https://i.ibb.co/B6MBNnV/image.png" alt="" />
                                </div>

                                <p className='font-[500] text-[14px] md:text-[16px] leading-[26px] mt-[40px] mb-[30px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
                                <h6 className='text-[16px] leading-[20px] font-[700] text-[#FF3E54]'>Samual Karl</h6>
                                <h6 className='text-[14px] leading-[20px] font-[500] mt-[5px]'>CEO</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div className='bg-[#F7F7F7] rounded-[10px] p-[30px] lg:max-w-[750px]'>
                                <div className='flex justify-between items-center'>
                                    <img src="https://i.ibb.co/ZLgMFDc/Ellipse-4.png" alt="" />
                                    <img src="https://i.ibb.co/B6MBNnV/image.png" alt="" />
                                </div>

                                <p className='font-[500] text-[14px] md:text-[16px] leading-[26px] mt-[40px] mb-[30px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
                                <h6 className='text-[16px] leading-[20px] font-[700] text-[#FF3E54]'>Samual Karl</h6>
                                <h6 className='text-[14px] leading-[20px] font-[500] mt-[5px]'>CEO</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div className='bg-[#F7F7F7] rounded-[10px] p-[30px] lg:max-w-[750px]'>
                                <div className='flex justify-between items-center'>
                                    <img src="https://i.ibb.co/ZLgMFDc/Ellipse-4.png" alt="" />
                                    <img src="https://i.ibb.co/B6MBNnV/image.png" alt="" />
                                </div>

                                <p className='font-[500] text-[14px] md:text-[16px] leading-[26px] mt-[40px] mb-[30px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
                                <h6 className='text-[16px] leading-[20px] font-[700] text-[#FF3E54]'>Samual Karl</h6>
                                <h6 className='text-[14px] leading-[20px] font-[500] mt-[5px]'>CEO</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div className='bg-[#F7F7F7] rounded-[10px] p-[30px] lg:max-w-[750px]'>
                                <div className='flex justify-between items-center'>
                                    <img src="https://i.ibb.co/ZLgMFDc/Ellipse-4.png" alt="" />
                                    <img src="https://i.ibb.co/B6MBNnV/image.png" alt="" />
                                </div>

                                <p className='font-[500] text-[14px] md:text-[16px] leading-[26px] mt-[40px] mb-[30px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
                                <h6 className='text-[16px] leading-[20px] font-[700] text-[#FF3E54]'>Samual Karl</h6>
                                <h6 className='text-[14px] leading-[20px] font-[500] mt-[5px]'>CEO</h6>
                            </div>
                        </SwiperSlide>
                        
                        
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;