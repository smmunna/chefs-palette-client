import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Verified from '../../assets/icons/verified.png'
import './UserProfile.css';

const UserProfile = () => {
    const { user, loading } = useContext(AuthContext)
    
    if (loading) {
        return <span></span>
    }
    return (
        <div>
            <h3 className='display-6 fw-bold text-center text-success my-3'>Welcome, {user?.displayName}</h3>
            <div className='userProfile'>
                <div className='left-right'>
                    <h5>Your Information</h5>
                    <hr />
                    <div className='text-center mb-4'>
                        <img className='userimage' src={user.photoURL ? user.photoURL : 'Photo Not Found'} height={100} alt="" />
                    </div>
                    <div className='mt-3'>
                        <p>Name: {user.displayName}</p>
                        <p>Email: {user?.email} <span>{user.emailVerified ? <><img src={Verified} height={20} alt="" title='Verified' /></> : <><span className='text-danger fw-bold'>Not Verified</span></>}</span></p>
                        <p>Phone: {user.phoneNumber ? user.phoneNumber : 'Not Found'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
