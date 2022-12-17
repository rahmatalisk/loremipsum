import React from 'react';

const OurLeader = () => {
    return (
        <div className='bg-[#F7F7F7] py-[50px] md:py-[100px]'>
            <div className="container">
            <h3 className='font-[700] text-[16px] sm:text-[18px] md:text-[24px] text-[#FF3E54] leading-[20px] text-center'>\ Team \</h3>
                <h3 className='font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#0E1F51] mt-[10px] mb-[40px] lg:leading-[40px] text-center'>Our Leaders</h3>



                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]'>
                    <div>
                        <img className='] max-h-[300px] block mx-auto' src="https://i.ibb.co/NsDGdvs/Rectangle-14.png" alt="" />
                        <h6 className='text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] text-[#FF3E54] font-[700] mt-[15px] md:mt-[30px] mb-[10px] text-center'>Larry F. Burnett</h6>
                        <h6 className='text-[#0E1F51] text-[14px] md:text-[16px] leading-[20px] font-[500] text-center'>CEO</h6>
                    </div>
                    <div>
                        <img className=' max-h-[300px] block mx-auto' src="https://i.ibb.co/2jJWvVm/Rectangle-15.png" alt="" />
                        <h6 className='text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] text-[#FF3E54] font-[700] mt-[15px] md:mt-[30px] mb-[10px] text-center'>Meghan J. Webb</h6>
                        <h6 className='text-[#0E1F51] text-[14px] md:text-[16px] leading-[20px] font-[500] text-center'>CTO</h6>
                    </div>
                    <div>
                        <img className=' max-h-[300px] block mx-auto' src="https://i.ibb.co/gTrDWKp/Rectangle-16.png" alt="" />
                        <h6 className='text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] text-[#FF3E54] font-[700] mt-[15px] md:mt-[30px] mb-[10px] text-center'>Yvonne J. Cullum</h6>
                        <h6 className='text-[#0E1F51] text-[14px] md:text-[16px] leading-[20px] font-[500] text-center'>CFO</h6>
                    </div>
                    <div>
                        <img className=' max-h-[300px] block mx-auto' src="https://i.ibb.co/1bQxTn8/Rectangle-17.png" alt="" />
                        <h6 className='text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] text-[#FF3E54] font-[700] mt-[15px] md:mt-[30px] mb-[10px] text-center'>Diana H. Williams</h6>
                        <h6 className='text-[#0E1F51] text-[14px] md:text-[16px] leading-[20px] font-[500] text-center'>COO</h6>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default OurLeader;