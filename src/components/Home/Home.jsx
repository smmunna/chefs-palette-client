import React from 'react';
import './Home.css';
import HomeHeader from './HomeHeader/HomeHeader';
import Chefs from '../Chefs/Chefs';
import Section3 from './Section3/Section3';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <div className="container">
                <Chefs />
            </div>
                <Section3/>
        </div>
    );
}

export default Home;
