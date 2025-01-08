import React from 'react';
import HotQueries from './HotQueries';
import HomeQueris from './HomeQueris';
import ExtraSec from './ExtraSec';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeQueris></HomeQueris>
            <ExtraSec></ExtraSec>
        </div>
    );
};

export default Home;