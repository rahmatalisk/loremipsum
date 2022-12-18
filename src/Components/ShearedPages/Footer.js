import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#0E1F51] py-[50px] md:py-[100px]'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[29px]'>
                    <div>
                        <div className='flex items-center gap-[11.18px]'>
                            <img src="https://i.ibb.co/hF3xnQJ/Vector.png" alt="Vector" border="0" />
                            <span className='text-white text-[16px] font-[700]'>Logoipsum</span>
                        </div>

                        <p className='font-[500] text-[14px] md:text-[16px] leading-[30px]  text-white mt-[20px]  mb-[30px]'>It is a long established <br /> fact that a reader will be distracted by the readable content of a page when looking at</p>

                        <div className='flex justify-between'>
                            <img src="https://i.ibb.co/PmC9FVT/Group-59.png" alt="Group-59" border="0" />
                            <img src="https://i.ibb.co/ygz3Lk3/Group-60.png" alt="Group-60" border="0" />
                            <img src="https://i.ibb.co/9gj0vdH/Group-61.png" alt="Group-61" border="0" />
                            <img src="https://i.ibb.co/3yn9hf6/Group-62.png" alt="Group-62" border="0" />

                        </div>
                    </div>

                    <div>
                        <h6 className='font-[700] text-[20px] md:text-[24px] leading-[20px] text-white'>Services</h6>
                        <div className='w-[30px] md:w-[50px] h-[5px] bg-[#FF3E54] rounded-[5px] outline-0 text-[#FF3E54] mt-[20px] mb-[30px]'></div>


                        <div className='flex flex-col gap-[20px]'>
                            <a href="#Web Design/Development" className='font-[500] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white'>Web Design/Development</a>
                            <a href="#Web Design/Development" className='font-[500] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white'>App Development</a>
                            <a href="#Web Design/Development" className='font-[500] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white'>UI/UX Design</a>
                            <a href="#Web Design/Development" className='font-[500] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white'>HubSpot Integration</a>
                            <a href="#Web Design/Development" className='font-[500] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white'>Email Marketing</a>
                            <a href="#Web Design/Development" className='font-[500] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white'>Website Migration</a>
                        </div>
                    </div>
                    <div>
                        <h6 className='font-[700] text-[20px] md:text-[24px] leading-[20px] text-white'>Career</h6>
                        <div className='w-[30px] md:w-[50px] h-[5px] bg-[#FF3E54] rounded-[5px] outline-0 text-[#FF3E54] mt-[20px] mb-[30px]'></div>


                        <div className='flex flex-col gap-[20px]'>
                            <div className='flex items-center gap-[20px]'>
                                <div className='w-[68px] h-[68px] bg-white flex justify-center items-center rounded-[10px]'>
                                    <img src="https://i.ibb.co/TRBRFSN/image.png" alt="" />
                                </div>
                                <div>
                                    <h6 className='text-[#FF3E54] text-[16px] md:text-[20px] leading-[25px] font-[700]'>ReactJs Dev.</h6>

                                    <p className='text-[16px] text-white font-[500] leading-[25px]'>1-5 Years of Exp.</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[20px]'>
                                <div className='w-[68px] h-[68px] bg-white flex justify-center items-center rounded-[10px]'>
                                    <img src="https://i.ibb.co/nMz074F/image.png" alt="" />
                                </div>
                                <div>
                                    <h6 className='text-[#FF3E54] text-[16px] md:text-[20px] leading-[25px] font-[700]'>Wordpress Dev.</h6>

                                    <p className='text-[16px] text-white font-[500] leading-[25px]'>1-5 Years of Exp.</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[20px]'>
                                <div className='w-[68px] h-[68px] bg-white flex justify-center items-center rounded-[10px]'>
                                    <img src="https://i.ibb.co/ctmVpDV/image.png" alt="" />
                                </div>
                                <div>
                                    <h6 className='text-[#FF3E54] text-[16px] md:text-[20px] leading-[25px] font-[700]'>Python Developer</h6>

                                    <p className='text-[16px] text-white font-[500] leading-[25px]'>1-5 Years of Exp.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 className='font-[700] text-[20px] md:text-[24px] leading-[20px] text-white'>Subscribe Us</h6>
                        <div className='w-[30px] md:w-[50px] h-[5px] bg-[#FF3E54] rounded-[5px] outline-0 text-[#FF3E54] mt-[20px] mb-[30px]'></div>


                        <p className='text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-white'>It is a long established <br className='hidden md:block' /> fact that a reader will be distracted by the readable </p>

                        <input type="email" placeholder='Email' className='outline-0 w-full bg-white py-[12px] px-[24px] font-[500] text-[14px] md:text-[16px] leading-[20px]  rounded-[10px] mt-[30px] mb-[20px]' />

                        <button className='text-[14px] md:text-[16px]  font-[500] leading-[26px] bg-[#FF3E54] rounded-[5px] py-[6px] md:py-[12px] px-[9px] md:px-[24px] text-white   block ml-auto'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;