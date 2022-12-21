import React, { useState } from 'react';
import SomeOfHistory from '../Home/SomeOfHistory';

const Portfolio = () => {
    const [activeBtn,setActiveBtn] = useState("")
    return (
        <div>
            <div className='bg-[#0E1F51] py-[50px] md:py-[100px]'>

                <h3 className='font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] mb-[10px] text-[#FF3E54] lg:leading-[48px] text-center'>Portfolio</h3>
                <h3 className='font-[500] text-[16px] sm:text-[18px] md:text-[24px] text-white leading-[20px] text-center'>Home / Portfolio</h3>
            </div>

            <div className='py-[50px] md:py-[100px] px-[8px] sm:px-[2rem] md:px-[3rem] lg:px-[0] max-w-[1170px] mx-auto'>
                <h3 className='font-[700] text-[16px] sm:text-[18px] md:text-[24px] text-[#FF3E54] leading-[20px] text-center'>\ Portfolio \</h3>
                <h3 className='font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#0E1F51] mt-[10px] mb-[40px] lg:leading-[40px] text-center'>Our Work</h3>


                <div className='border-[1px] rounded-[7px] overflow-hidden max-w-[715px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-[50px]' >
                    <button className={activeBtn === "all" ? 'text-white font-[600] py-[12px] text-[14px] leading-[24px] border-[1px] block w-full bg-[#FF3E54]':'text-slate-500 font-[600] py-[12px] text-[14px] leading-[24px] border-[1px] block w-full'} onClick={()=>{
                        setActiveBtn("all")
                    }}>ALL</button>
                    <button className={activeBtn === "LIFE" ? 'text-white font-[600] py-[12px] text-[14px] leading-[24px] border-[1px] block w-full bg-[#FF3E54]':'text-slate-500 font-[600] py-[12px] text-[14px] leading-[24px] border-[1px] block w-full'} onClick={()=>{
                        setActiveBtn("LIFE")
                    }}>LIFE</button>
                    <button className={activeBtn === "MOMENTS" ? 'text-white font-[600] py-[12px] text-[14px] leading-[24px] border-[1px] block w-full bg-[#FF3E54]':'text-slate-500 font-[600] py-[12px] text-[14px] leading-[24px] border-[1px] block w-full'} onClick={()=>{
                        setActiveBtn("MOMENTS")
                    }}>MOMENTS</button>
                    <button className={activeBtn === "NATURE" ? 'text-white font-[600] py-[12px] text-[14px] leading-[24px] border-[1px] block w-full bg-[#FF3E54]':'text-slate-500 font-[600] py-[12px] text-[14px] leading-[24px] border-[1px] block w-full'} onClick={()=>{
                        setActiveBtn("NATURE")
                    }}>NATURE</button>
                    <button className={activeBtn === "STORIES" ? 'text-white font-[600] py-[12px] text-[14px] leading-[24px] border-[1px] block w-full bg-[#FF3E54]':'text-slate-500 font-[600] py-[12px] text-[14px] leading-[24px] border-[1px] block w-full'} onClick={()=>{
                        setActiveBtn("STORIES")
                    }}>STORIES</button>
                    <button className={activeBtn === "TRAVEL" ? 'text-white font-[600] py-[12px] text-[14px] leading-[24px] border-[1px] block w-full bg-[#FF3E54]':'text-slate-500 font-[600] py-[12px] text-[14px] leading-[24px] border-[1px] block w-full'} onClick={()=>{
                        setActiveBtn("TRAVEL")
                    }}>TRAVEL</button>
                    

                </div>


                <div className='flex flex-wrap gap-[30px]'>
                    <img className='w-full sm:w-auto block mx-auto' src="https://i.ibb.co/zSksN6f/Rectangle.png" alt="Rectangle" border="0" />
                    <img className='w-full sm:w-auto block mx-auto' src="https://i.ibb.co/HGv8Cjm/Rectangle-1.png" alt="Rectangle-1" border="0" />
                    <img className='w-full sm:w-auto block mx-auto' src="https://i.ibb.co/xsHW91x/Rectangle-2.png" alt="Rectangle-2" border="0" />
                    <img className='w-full sm:w-auto block mx-auto' src="https://i.ibb.co/879pKB6/Rectangle-3.png" alt="Rectangle-2" border="0" />
                    <img className='w-full sm:w-auto block mx-auto' src="https://i.ibb.co/RzH5Gpr/Rectangle-4.png" alt="Rectangle-2" border="0" />
                </div>
                {/* <div className='grid grid-cols-6  gap-[30px] grid-rows-2'>
                    <img className='w-full sm:w-auto block mx-auto col-span-4' src="https://i.ibb.co/zSksN6f/Rectangle.png" alt="Rectangle" border="0" />
                    <img className='w-full sm:w-auto block mx-auto col-span-2' src="https://i.ibb.co/HGv8Cjm/Rectangle-1.png" alt="Rectangle-1" border="0" />
                    <img className='w-full sm:w-auto block mx-auto col-span-1 h-full' src="https://i.ibb.co/xsHW91x/Rectangle-2.png" alt="Rectangle-2" border="0" />
                    <img className='w-full sm:w-auto block mx-auto col-span-2  row-span-1' src="https://i.ibb.co/879pKB6/Rectangle-3.png" alt="Rectangle-2" border="0" />
                    <img className='w-full sm:w-auto block mx-auto col-span-3' src="https://i.ibb.co/RzH5Gpr/Rectangle-4.png" alt="Rectangle-2" border="0" />
                </div> */}



            </div>

            <SomeOfHistory></SomeOfHistory>
        </div>
    );
};

export default Portfolio;