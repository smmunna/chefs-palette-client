import React from 'react';
import './Section4.css';

const Section4 = () => {
    return (
        <div className='my-5'>
            <div className='sec4'>
                <h3 className="display-4 fw-semibold">Restaurant Consulting Services</h3>
                <p className="mt-3 mt-md-4">Alanzo, along with his team, offers culinary and management services. We have the experience to provide <br /> concept development strategies and best practice principles in order to achieve maximum sales performance.</p>
                <div className="mt-3 d-flex gap-4">
                    <div>
                        <h4>The Process</h4>
                    </div>
                    <div>
                        <ul>
                            <li>Discover</li>
                            <li>Plan</li>
                            <li>Design</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Organize</li>
                            <li>Grow</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-3">
                    <button className='btn btn-warning'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Section4;
