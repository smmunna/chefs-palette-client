import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Spinner from '../assets/icons/spinner.jpg';
import './Main.css'

const Main = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div className=' spinner text-center '>
            <img className='' src={Spinner} alt="" />
        </div>
    }
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    );
}

export default Main;
