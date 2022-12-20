import React from 'react';



const WeAreHere = () => {
    return (
        <div className='py-[20px] md:py-[50px] we-are-half-circle'>
            <div className="container we-are-here  ">
                <div className='flex gap-y-[20px] flex-col md:flex-row items-center md:gap-x-[68px] lg:pl-[66px]'>
                    <div className='lg:max-w-[421px]'>
                        <h3 className='font-[700] text-[16px] sm:text-[18px] md:text-[24px] text-[#FF3E54] leading-[20px]'>\ We Are Here \</h3>
                        <h3 className='font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[48px] text-[#0E1F51] mt-[10px] mb-[20px] lg:leading-[58px]'>Better Insights For
                            Business Growth</h3>
                            <button className='text-[16px] md:text-[20px] leading-[26px] font-[500] text-white pr-[16px] pl-[15px] py-[7px] md:pl-[31px] md:pr-[33px] md:py-[16px] rounded-[5px] bg-[#FF3E54] hover:bg-[#F7F7F7] hover:text-[#FF3E54] border-[1px] border-[#FF3E54]'>View More</button>
                    </div>

                    <div className='lg:w-[600px] z-50 '>
                        <img className='duration-300 hover:scale-95  z-20' src="https://i.ibb.co/XDHpJ7h/Group-65.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeAreHere;