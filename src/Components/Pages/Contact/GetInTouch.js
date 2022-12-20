import React from 'react';

const GetInTouch = () => {
    return (
        <div className='bg-[#ff3e5408] py-[50px] md:py-[100px]'>
            <div className="container">
                <h3 className='font-[700] text-[16px] sm:text-[18px] md:text-[24px] text-[#FF3E54] leading-[20px] text-center'>\ Get In Touch \</h3>
                <h3 className='font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-black mt-[10px] mb-[40px] lg:leading-[40px] text-center'>Hey! Let’s Talk</h3>


                <div className='flex flex-col sm:flex-row gap-[30px]'>
                    <div className='lg:w-max-[750px] bg-white p-[30px] rounded-[10px] w-full sm:w-1/2 flex-grow'>
                        <form className='flex flex-col gap-[10px] md:gap-[20px] items-start'>
                        <input type="text" placeholder='Name' className='outline-0 text-[#252525] text-[14px] md:text-[16px] leading-[20px] font-[500] bg-[#F7F7F7] w-full p-[5px] md:p-[10px] lg:p-[15px] rounded-[10px]' />
                        <input type="email" placeholder='Email' className='outline-0 text-[#252525] text-[14px] md:text-[16px] leading-[20px] font-[500] bg-[#F7F7F7] w-full p-[5px] md:p-[10px] lg:p-[15px] rounded-[10px]' />
                        <input type="number" placeholder='Phone' className='outline-0 text-[#252525] text-[14px] md:text-[16px] leading-[20px] font-[500] bg-[#F7F7F7] w-full p-[5px] md:p-[10px] lg:p-[15px] rounded-[10px]' />

                        <textarea placeholder='Your Message' className='outline-0 text-[#252525] text-[14px] md:text-[16px] leading-[20px] font-[500] bg-[#F7F7F7] w-full p-[5px] md:p-[10px] lg:p-[15px] rounded-[10px] h-[150px]' name="" id="" ></textarea>

                        <button className='text-[14px] md:text-[16px]  font-[500] leading-[26px] bg-[#FF3E54] rounded-[5px] py-[5px] md:py-[12px] px-[11px] md:px-[24px] text-white mt-[10px] hover:bg-[#F7F7F7] hover:text-[#FF3E54] border-[1px] border-[#FF3E54]'>Send Now</button>
                        </form>

                    </div>

                    <div className='md:w-[360px] sm:w-[300px] w-full  bg-white px-[30px] pb-[30px] pt-[35px] rounded-[10px] flex flex-col gap-[30px]'>

                        <div className='flex gap-[15px]'>
                            <div className='bg-[#F7F7F7] rounded-[10px] w-[60px] h-[60px] md:w-[70px] md:h-[70px] flex justify-center items-center'>
                            <img src="https://i.ibb.co/KLSPs8s/image.png" className='' alt="" />
                            </div>

                            <div className=''>
                                <h6 className='text-[#FF3E54] font-[700] text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:mb-[10px]'>Call Anytime</h6>
                                <h6 className=' font-[500] text-[14px] md:text-[16px]  leading-[20px] text-[#0E1F51]'>+ 91 23678 27867 <br />+ 91 67678 92878</h6>
                                
                            </div>
                        </div>
                        <div className='flex gap-[15px]'>
                            <div className='bg-[#F7F7F7] rounded-[10px] w-[60px] h-[60px] md:w-[70px] md:h-[70px] flex justify-center items-center'>
                            <img src="https://i.ibb.co/HtPS7v1/image.png" className='' alt="" />
                            </div>

                            <div className=''>
                                <h6 className='text-[#FF3E54] font-[700] text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:mb-[10px]'>Send Email</h6>
                                <h6 className=' font-[500] text-[14px] md:text-[16px]  leading-[20px] text-[#0E1F51]'>connect@itfirms.com <br />hello@itfirms.com</h6>
                                
                            </div>
                        </div>
                        <div className='flex gap-[15px]'>
                            <div className='bg-[#F7F7F7] rounded-[10px] w-[60px] h-[60px] md:w-[70px] md:h-[70px] flex justify-center items-center'>
                            <img src="https://i.ibb.co/GkmD87y/image.png" className='' alt="" />
                            </div>

                            <div className=''>
                                <h6 className='text-[#FF3E54] font-[700] text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:mb-[10px]'>Visit Us</h6>
                                <h6 className=' font-[500] text-[14px] md:text-[16px]  leading-[20px] text-[#0E1F51]'>20 Island Park Road,<br /> New Jearsy, New York, USA </h6>
                                
                            </div>
                        </div>

                        <h6 className='text-[#0E1F51] font-[700] text-[20px] md:text-[24px] leading-[25px] text-center mt-[20px]'>Follow us</h6>

                        <div className='flex sm:justify-between gap-[20px] '>
                            <div className='w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FF3E54] rounded-[10px] flex justify-center items-center'>
                                <img src="https://i.ibb.co/gMh7yXg/image.png" alt="" />
                            </div>
                            <div className='w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FF3E54] rounded-[10px] flex justify-center items-center'>
                                <img src="https://i.ibb.co/XCXhKCq/image.png" alt="" />
                            </div>
                            <div className='w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FF3E54] rounded-[10px] flex justify-center items-center'>
                                <img src="https://i.ibb.co/znZ5fkd/image.png" alt="" />
                            </div>
                            <div className='w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FF3E54] rounded-[10px] flex justify-center items-center'>
                                <img src="https://i.ibb.co/8dG0mGq/image.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;