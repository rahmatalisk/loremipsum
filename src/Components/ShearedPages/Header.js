import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.jpg"
import close from "../../assets/xmark-solid.svg"
import menu from "../../assets/bars-solid.svg"
import { TbAlignRight } from "react-icons/tb";
import { SlClose } from "react-icons/sl";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <header>
            <div className="container">
                <nav className='flex items-center justify-between py-[18px] md:py-[28px]'>
                    <div className='flex items-center gap-x-[11.18px]'>
                        
                        <img src={logo} alt="" />
                        <h1 className='e text-[#0E1F51] text-[18px] font-[700]'>Logoipsum</h1>
                    </div>

                    {/*  menu */}
                    <div className='hidden md:block'>
                        <div className='flex items-center gap-x-[50px] '>
                            <ul className='flex gap-x-[30px]'>
                                <li><Link className='text-[16px] font-[600] leading-[20px]'>About</Link></li>
                                <li><Link className='text-[16px] font-[600] leading-[20px]'>Our Services</Link></li>
                                <li><Link className='text-[16px] font-[600] leading-[20px]'>Portfolio</Link></li>
                                <li><Link className='text-[16px] font-[600] leading-[20px]'>Blog</Link></li>
                                <li><Link className='text-[16px] font-[600] leading-[20px]'>Contact</Link></li>
                            </ul>

                            <button className='text-[16px] leading-[26px] font-[500] text-white px-[18px] py-[9px] rounded-[5px] bg-[#FF3E54]'>Get In Touch</button>
                        </div>
                    </div>

                    {/* sm menu */}

                    <div className='md:hidden relative '>
                        <div className='md:hidden'>


                            {!openMenu ? <button onClick={() => {
                                setOpenMenu(!openMenu)
                            }}><TbAlignRight /></button> : <button onClick={() => {
                                setOpenMenu(!openMenu)
                            }}><SlClose /></button>}

                        </div>

                        {
                            openMenu && <div className=''>
                                <div className='md:hidden absolute  right-[0]'>
                                    <div className='flex flex-col items-center gap-y-[10px] w-[150px] '>
                                        <ul className='flex flex-col gap-y-[10px]'>
                                            <li><Link className='text-[16px] font-[600] leading-[20px]'>About</Link></li>
                                            <li><Link className='text-[16px] font-[600] leading-[20px]'>Our Services</Link></li>
                                            <li><Link className='text-[16px] font-[600] leading-[20px]'>Portfolio</Link></li>
                                            <li><Link className='text-[16px] font-[600] leading-[20px]'>Blog</Link></li>
                                            <li><Link className='text-[16px] font-[600] leading-[20px]'>Contact</Link></li>
                                        </ul>

                                        <button className='text-[16px] leading-[26px] font-[500] text-white px-[18px] py-[9px] rounded-[5px] bg-[#FF3E54]'>Get In Touch</button>
                                    </div>
                                </div>
                            </div>
                        }


                    </div>
                </nav>
            </div>

        </header>
    );
};

export default Header;