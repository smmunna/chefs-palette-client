import React from 'react';
import './Home.css';
import HomeHeader from './HomeHeader/HomeHeader';
import Chefs from '../Chefs/Chefs';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <div className="container">
                <Chefs />
            </div>
        </div>
    );
}

export default Home;
