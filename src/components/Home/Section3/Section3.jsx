import React from 'react';
import './Section3.css';

const Section3 = () => {
    return (
        <div className='sec3 mt-4'>
            <div>
                <div className='sec3-sub-bg'>
                    <img src="https://images.pexels.com/photos/5718025/pexels-photo-5718025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid w-100' alt="" />
                </div>
            </div>
            <div className='se3-right'>
                <h3 className='display-4 fw-semibold'>Experience The Sublime!</h3>
                <p className='mt-3 mt-md-4' style={{ lineHeight: "2" }}>Chef Alanzo prepares and serves exquisite dinners to parties from two to 200 at your home, business or private catering event. His blend of French-Mediterranean cuisine draws on a lifetime of skills and the knowledge that all meals, no matter how large or how small, are special events among family and friends</p>
                <button className='btn btn-warning my-2'>About Us</button>
            </div>
        </div>
    );
}

export default Section3;
