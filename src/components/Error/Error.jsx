import React from 'react';
import './Error.css';
import ErrorImage from '../../assets/images/errorpage.jpg'

const Error = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className="error-image">
                <img src={ErrorImage} className='img-fluid w-100' alt="" />
            </div>
        </div>
    );
}

export default Error;
