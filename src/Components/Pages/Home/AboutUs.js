import React from 'react';
import aboutusimg from '../../../assets/aboutus-left.svg'

const AboutUs = () => {
    return (
        <div className='bg-[#F7F7F7] py-[50px] md:py-[100px] relative'>
            <div className='w-[100px] md:w-[200px] md:h-[200px] h-[100px] bg-[#E7E9EE] rounded-full absolute lg:left-[420px] md:left-[200px] left-[50px] z-[-100] top-[-50px] md:top-[-100px]'>

            </div>
            <div className="container">
                <div className="flex flex-col md:flex-row gap-[30px] ">
                    <div className='lg:w-[555px] lg:h-[414px]'>
                        <img className='lg:h-[414px] w-full' src={aboutusimg} alt="" />
                    </div>
                    <div className='md:w-1/2'>
                        <h3 className='font-[700] text-[16px] sm:text-[18px] md:text-[24px] text-[#FF3E54] leading-[20px]'>\ About Us \</h3>
                        <h3 className='font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#0E1F51] mt-[10px] md:mb-[30px] lg:leading-[58px]'>One of the Fastest Way to Business Growth</h3>
                        <p className='font-[500] text-[14px] md:text-[16px] text-black leading-[22px] md:leading-[27px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>

                        <div className='bg-white py-[15px] pl-[15px] rounded-[18px] flex gap-[15px] items-center mt-[15px] md:mt-[30px]'>
                            <div className='w-[50px] h-[50px]  md:w-[70px] md:h-[70px] rounded-[10px] bg-[#F7F7F7] flex justify-center items-center'>
                            <img src="https://i.ibb.co/SXYrSQj/Black.png" alt="Black" border="0"/>
                            </div>

                            <div>
                            <h3 className='font-[700] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#0E1F51] lg:leading-[20px]'>Get Instant Professional Advice</h3>
                            <p className='font-[500] text-[14px] md:text-[16px] leading-[16px] md:mt-[15px]'>Ready to Help : <span className='text-[#FF3E54] font-[700]'>+1 356 678 7897</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;