import React from 'react';
import AboutUs from './AboutUs';
import GetInTouch from './GetInTouch';
import OurExpertice from './OurExpertice';
import OurLeader from './OurLeader';
import Process from './Process';
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
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;