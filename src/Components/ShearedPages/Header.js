import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.jpg"

import { TbAlignRight } from "react-icons/tb";
import { SlClose } from "react-icons/sl";

const Header = () => {

    const [activeMenu,setActiveMenu] = useState("")
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <header>
            <div className="container">
                <nav className='flex items-center justify-between py-[18px] md:py-[28px]'>
                    <div className='flex items-center gap-x-[11.18px]'>
                        
                        <Link to="/"><img src={logo} alt="" /></Link>
                        <Link to="/"><h1 className='e text-[#0E1F51] text-[18px] font-[700]'>Logoipsum</h1></Link>
                        
                    </div>

                    {/*  menu */}
                    <div className='hidden md:block'>
                        <div className='flex items-center gap-x-[50px] '>
                            <ul className='flex gap-x-[30px] link-gap'>
                                <li><Link onClick={()=>{
                                    setActiveMenu("about")
                                }} to="/about" className={activeMenu === "about" ? "text-[16px] text-[#FF3E54] font-[600] leading-[20px] border-[#FF3E54] border-b-[4px] pb-[5px]":"text-[16px] font-[600] leading-[20px]"}>About</Link></li>
                                <li><Link to="/our-service" className={activeMenu === "our-service" ? "text-[16px] text-[#FF3E54] font-[600] leading-[20px] border-[#FF3E54] border-b-[4px] pb-[5px]":"text-[16px] font-[600] leading-[20px]"}  onClick={()=>{
                                    setActiveMenu("our-service")
                                }} >Our Services</Link></li>
                                <li><Link  onClick={()=>{
                                    setActiveMenu("portfolio")
                                }} to="/portfolio" className={activeMenu === "portfolio" ? "text-[16px] text-[#FF3E54] font-[600] leading-[20px] border-[#FF3E54] border-b-[4px] pb-[5px]":"text-[16px] font-[600] leading-[20px]"}>Portfolio</Link></li>
                                <li><Link  onClick={()=>{
                                    setActiveMenu("blog")
                                }} to="/blog" className={activeMenu === "blog" ? "text-[16px] text-[#FF3E54] font-[600] leading-[20px] border-[#FF3E54] border-b-[4px] pb-[5px]":"text-[16px] font-[600] leading-[20px]"}>Blog</Link></li>
                                <li><Link  onClick={()=>{
                                    setActiveMenu("contact") 
                                }} to="/contact" className={activeMenu === "contact" ? "text-[16px] text-[#FF3E54] font-[600] leading-[20px] border-[#FF3E54] border-b-[4px] pb-[5px]":"text-[16px] font-[600] leading-[20px]"}>Contact</Link></li>
                            </ul>

                            <button className='text-[16px] leading-[26px] font-[500] text-white px-[17px] py-[8px] rounded-[5px] bg-[#FF3E54] hover:bg-[#F7F7F7] hover:text-[#FF3E54] border-[1px] border-[#FF3E54]'>Get In Touch</button>
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
                                    <div className='flex flex-col items-center gap-y-[10px] w-[150px] bg-white'>
                                        <ul className='flex flex-col gap-y-[10px]'>
                                            <li><Link to="/about" className='text-[16px] font-[600] leading-[20px]'>About</Link></li>
                                            <li><Link to="/our-service" className='text-[16px] font-[600] leading-[20px]'>Our Services</Link></li>
                                            <li><Link to="/portfolio" className='text-[16px] font-[600] leading-[20px]'>Portfolio</Link></li>
                                            <li><Link to="/blog" className='text-[16px] font-[600] leading-[20px]'>Blog</Link></li>
                                            <li><Link to="/contact" className='text-[16px] font-[600] leading-[20px]'>Contact</Link></li>
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