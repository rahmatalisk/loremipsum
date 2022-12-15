import React from 'react';
import wearerightimg from "../../../assets/Group 65.svg"


const WeAreHere = () => {
    return (
        <div className='py-[20px] md:py-[50px] '>
            <div className="container we-are-here ">
                <div className='flex gap-y-[20px] flex-col md:flex-row items-center md:gap-x-[68px] lg:pl-[66px]'>
                    <div className='lg:max-w-[421px]'>
                        <h3 className='font-[700] text-[16px] sm:text-[18px] md:text-[24px] text-[#FF3E54] leading-[20px]'>\ We Are Here \</h3>
                        <h3 className='font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[48px] text-[#0E1F51] mt-[10px] mb-[20px]'>Better Insights For
                            Business Growth</h3>
                            <button className='text-[16px] md:text-[20px] leading-[26px] font-[500] text-white pr-[17px] pl-[16px] py-[8px] md:pl-[32px] md:pr-[34px] md:py-[17px] rounded-[5px] bg-[#FF3E54]'>View More</button>
                    </div>

                    <div className='lg:w-[600px] '>
                        <img className='' src={wearerightimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeAreHere;