import React from 'react';
import SomeOfHistory from '../Home/SomeOfHistory';
import WhatWeDo from '../Home/WhatWeDo';
import OurExpertice from './OurExpertice';

const Service = () => {
    return (
        <div>
            <div className='bg-[#0E1F51] py-[50px] md:py-[100px]'>

                <h3 className='font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] mb-[10px] text-[#FF3E54] lg:leading-[48px] text-center'>Services</h3>
                <h3 className='font-[500] text-[16px] sm:text-[18px] md:text-[24px] text-white leading-[20px] text-center'>Home / Services</h3>




            </div>
            <WhatWeDo></WhatWeDo>
            <OurExpertice></OurExpertice>
            <SomeOfHistory></SomeOfHistory>

        </div>
    );
};

export default Service;