import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet,ScrollRestoration  } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
            <ScrollRestoration />
        </div>
    );
}

export default Main;
