import React from 'react';

const WhatWeDo = () => {
    return (
        <div className='bg-[#F7F7F7] py-[50px] md:py-[100px] '>

            <div className="container">
                <div className="flex flex-col md:flex-row gap-[30px] ">
                    <div className='lg:w-[555px] lg:h-[414px]'>
                        <img className=' w-full' src="https://i.ibb.co/ZL36CTr/Mask-group.png" alt="" />
                    </div>
                    <div className='md:w-1/2'>
                        <h3 className='font-[700] text-[16px] sm:text-[18px] md:text-[24px] text-[#FF3E54] leading-[20px]'>\ What We Do \</h3>
                        <h3 className='font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#0E1F51] mt-[10px] md:mb-[30px] lg:leading-[58px]'>We Develope Product That People Love to Use.</h3>
                        <p className='font-[500] text-[14px] md:text-[16px] text-black leading-[22px] md:leading-[27px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[30px]'>
                            <div className='bg-white py-[15px] pl-[15px] rounded-[18px] flex gap-[15px] items-center mt-[15px] md:mt-[30px]'>
                                <div className='w-[50px] h-[50px]  md:w-[70px] md:h-[70px] rounded-[10px] bg-[#ff3e5413]  flex justify-center items-center'>
                                    <img src="https://i.ibb.co/n1gfNrY/Black-5.png" alt="Black" border="0" className='w-[40px] h-[40px] ' />
                                </div>

                                <div>

                                    <p className='font-[700] text-[14px] md:text-[16px] leading-[20px]  text-[#FF3E54] mb-[10px]'>Our Vision</p>
                                    <p className='font-[500] text-[14px] md:text-[16px] leading-[16px]  text-[#0E1F51]'>It is a long esta <br /> -blished fact that</p>
                                </div>
                            </div>
                            <div className='bg-white py-[15px] pl-[15px] rounded-[18px] flex gap-[15px] items-center mt-[15px] md:mt-[30px]'>
                                <div className='w-[50px] h-[50px]  md:w-[70px] md:h-[70px] rounded-[10px] bg-[#ff3e5413]  flex justify-center items-center'>
                                    <img src="https://i.ibb.co/pnW7fSM/Black-6.png" alt="Black" border="0" className='w-[40px] h-[40px] ' />
                                </div>

                                <div>

                                    <p className='font-[700] text-[14px] md:text-[16px] leading-[20px]  text-[#FF3E54] mb-[10px]'>Our Goal</p>
                                    <p className='font-[500] text-[14px] md:text-[16px] leading-[16px]  text-[#0E1F51]'>It is a long esta <br /> -blished fact that</p>
                                </div>
                            </div>

                            


                        </div>
                        <button className='text-[16px] leading-[26px] font-[500] text-white px-[24px] py-[12px] rounded-[5px] bg-[#FF3E54] mt-[30px]'>View More</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;