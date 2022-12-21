import React from 'react';
import AboutUs from './AboutUs';
import GetInTouch from './GetInTouch';
import OurBlog from './OurBlog';
import OurExpertice from './OurExpertice';
import OurLeader from './OurLeader';
import Process from './Process';
import SomeOfHistory from './SomeOfHistory';
import Testimonial from './Testimonial';
import WeAreHere from './WeAreHere';
import WhatWeDo from './WhatWeDo';

const Home = () => {
    return (
        <div>
            <WeAreHere></WeAreHere>
            <AboutUs></AboutUs>
            <Process></Process>
            <WhatWeDo></WhatWeDo>
            <OurExpertice></OurExpertice>
            <OurLeader></OurLeader>
            <Testimonial></Testimonial>
            <GetInTouch></GetInTouch>
            <OurBlog></OurBlog>
            <SomeOfHistory></SomeOfHistory>
        </div>
    );
};

export default Home;