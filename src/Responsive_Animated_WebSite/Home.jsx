import React from 'react';
import { NavLink } from 'react-router-dom';
import Home_image from '../Images/Home_img.svg'
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common  name = "Grow Your Business with" imgsrc = {Home_image} visit = "/service" btnname = "Get Started" brand = "With Us" />
        </>
    );
};

export default Home;
