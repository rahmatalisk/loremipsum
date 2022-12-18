import React from 'react';

const LatestBlog = () => {
    return (
        <div className='bg-white py-[50px] md:py-[100px]'>
            <div className="container">
                <h3 className='font-[700] text-[16px] sm:text-[18px] md:text-[24px] text-[#FF3E54] leading-[20px] text-center'>\ Our Blog \</h3>
                <h3 className='font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#0E1F51] mt-[10px] mb-[40px] lg:leading-[40px] text-center'>Latest Post</h3>



                <div className='grid grid-cols-1  lg:grid-cols-2 gap-[31px]'>
                    <div className=' w-full row-span-2'>
                        <div className='p-[20px] bg-white rounded-[10px] shadow-[0_0px_10px_rgba(14,31,81,0.2)]'>
                            <img src="https://i.ibb.co/HYWNGgj/Rectangle-25.png" alt="" className='duration-300 hover:scale-95 w-full max-h-[300px]' />
                            <h6 className='text-[12px] md:text-[14px] font-[600] leading-[20px] text-[#252525] opacity-[0.7] mt-[20px]'>May 4th, 2022</h6>
                                    
                            <h6 className='text-[#FF3E54] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[30px] font-[700] mt-[10px] mb-[20px]'>The most Popular Business  Of the Year</h6>

                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[6px]'>
                                    <img src="https://i.ibb.co/MBB1JW2/Ellipse-5.png" alt="Ellipse-5" border="0" className='duration-300 hover:scale-95 ' />
                                    <h6 className='font-[600] text-[14px] md:text-[16px] leading-[20px] text-[#0E1F51]'>Ranold Jeff.</h6>
                                </div>

                                <h6 className='text-[12px] md:text-[14px] font-[600] leading-[20px] text-[#252525] opacity-[0.7]'>2 Min Read</h6>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col gap-[30px]'>
                    <div className=' w-full '>
                        <div className='p-[20px] bg-white rounded-[10px] shadow-[0_0px_10px_rgba(14,31,81,0.2)] flex flex-col md:flex-row gap-[20px]'>
                            <img src="https://i.ibb.co/HFSN7TW/Rectangle-25-1.png" alt="" className='duration-300 hover:scale-95 w-full md:max-w-[185px] md:h-[185px]' />
                            <div>
                            <h6 className='text-[12px] md:text-[14px] font-[600] leading-[20px] text-[#252525] opacity-[0.7] mt-[20px]'>May 4th, 2022</h6>
                                    
                                    <h6 className='text-[#FF3E54] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[30px] font-[700] mt-[10px] mb-[20px]'>The most Popular Business  Of the Year</h6>
        
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src="https://i.ibb.co/bsPMQ17/Ellipse-5-1.png" alt="Ellipse-5" border="0" className='duration-300 hover:scale-95 ' />
                                            <h6 className='font-[600] text-[14px] md:text-[16px] leading-[20px] text-[#0E1F51]'>Patricia Anderson</h6>
                                        </div>
        
                                        <h6 className='text-[12px] md:text-[14px] font-[600] leading-[20px] text-[#252525] opacity-[0.7]'>2 Min Read</h6>
                                    </div>
                            </div>
                        </div>

                    </div>
                    <div className=' w-full '>
                        <div className='p-[20px] bg-white rounded-[10px] shadow-[0_0px_10px_rgba(14,31,81,0.2)] flex flex-col md:flex-row gap-[20px]'>
                            <img src="https://i.ibb.co/xjssqvS/Rectangle-25-2.png" alt="" className='duration-300 hover:scale-95 w-full md:max-w-[185px] md:h-[185px]' />
                            <div>
                            <h6 className='text-[12px] md:text-[14px] font-[600] leading-[20px] text-[#252525] opacity-[0.7] mt-[20px]'>May 4th, 2022</h6>
                                    
                                    <h6 className='text-[#FF3E54] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[30px] font-[700] mt-[10px] mb-[20px]'>The most Popular Business  Of the Year</h6>
        
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-[6px]'>
                                            <img src="https://i.ibb.co/qsJJqGv/Ellipse-5-2.png" alt="Ellipse-5" border="0" className='duration-300 hover:scale-95 ' />
                                            <h6 className='font-[600] text-[14px] md:text-[16px] leading-[20px] text-[#0E1F51]'>Elaine Luna</h6>
                                        </div>
        
                                        <h6 className='text-[12px] md:text-[14px] font-[600] leading-[20px] text-[#252525] opacity-[0.7]'>2 Min Read</h6>
                                    </div>
                            </div>
                        </div>

                    </div>
                    
                   

                    </div>

                    {/* <div className='w-full  flex flex-col  gap-[30px]'>
                        <div >
                            <div className='p-[20px] bg-white rounded-[10px] shadow-[0_0px_10px_rgba(14,31,81,0.2)] flex gap-[20px] flex-wrap md:flex-nowrap'>
                                <img src="https://i.ibb.co/HYWNGgj/Rectangle-25.png" alt="" className='duration-300 hover:scale-95 md:max-w-[185px] md:h-[185px]' />
                                <div className='flex flex-col justify-between'>
                                    <div>
                                        <h6 className='text-[12px] md:text-[14px] font-[600] leading-[20px] text-[#252525] opacity-[0.7]'>May 4th, 2022</h6>
                                        <h6 className='text-[#FF3E54] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[30px] font-[700] '>The most Popular Business  Of the Year</h6>
                                    </div>

                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-[6px] '>
                                            <img src="https://i.ibb.co/MBB1JW2/Ellipse-5.png" alt="Ellipse-5" border="0" className='duration-300 hover:scale-95' />
                                            <h6 className='font-[600] text-[14px] md:text-[16px] leading-[20px] text-[#0E1F51]'>Ranold Jeff.</h6>
                                        </div>

                                        <h6 className='text-[12px] md:text-[14px] font-[600] leading-[20px] text-[#252525] opacity-[0.7]'>May 4th, 2022</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className='p-[20px] bg-white rounded-[10px] shadow-[0_0px_10px_rgba(14,31,81,0.2)] flex gap-[20px] flex-wrap md:flex-nowrap'>
                                <img src="https://i.ibb.co/HYWNGgj/Rectangle-25.png" alt="" className='duration-300 hover:scale-95 md:max-w-[185px] md:h-[185px]' />
                                <div className='flex flex-col justify-between'>
                                    <div>
                                        <h6 className='text-[12px] md:text-[14px] font-[600] leading-[20px] text-[#252525] opacity-[0.7]'>May 4th, 2022</h6>
                                        <h6 className='text-[#FF3E54] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[30px] font-[700] '>The most Popular Business  Of the Year</h6>
                                    </div>

                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-[6px] '>
                                            <img src="https://i.ibb.co/MBB1JW2/Ellipse-5.png" alt="Ellipse-5" border="0" className='duration-300 hover:scale-95' />
                                            <h6 className='font-[600] text-[14px] md:text-[16px] leading-[20px] text-[#0E1F51]'>Ranold Jeff.</h6>
                                        </div>

                                        <h6 className='text-[12px] md:text-[14px] font-[600] leading-[20px] text-[#252525] opacity-[0.7]'>May 4th, 2022</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default LatestBlog;