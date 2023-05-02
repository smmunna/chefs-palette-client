import React from 'react';
import './HomeHeader.css';

const HomeHeader = () => {

    return (
        <div className="section2-carosoul">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carosoul-items1">
                            <div className="carosoul-comment-profile">
                                <img src="images/profile.png" className="img-fluid" alt="" />
                            </div>
                            <div className="carosoul-heading display-3 fw-bold"> Welcome to Chef's Palette</div>
                            <div className="carosoul-description">
                                Experience a gastronomic journey like no other with our world-class cuisine. Our expert chefs combine the freshest ingredients and innovative techniques to create dishes that will tantalize your taste buds.                           </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carosoul-items2">
                            <div className="carosoul-comment-profile">
                                <img src="images/profile.png" className="img-fluid" alt="" />
                            </div>
                            <div className="carosoul-heading display-3 fw-bold">Explore Our Chef with Quality</div>
                            <div className="carosoul-description">
                                Experience a gastronomic journey like no other with our world-class cuisine. Our expert chefs combine the freshest ingredients and innovative techniques to create dishes that will tantalize your taste buds.
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carosoul-items3">
                            <div className="carosoul-comment-profile">
                                <img src="images/profile.png" className="img-fluid" alt="" />
                            </div>
                            <div className="carosoul-heading display-3 fw-bold">Discover our Exquisite Menu</div>
                            <div className="carosoul-description">
                                Experience a gastronomic journey like no other with our world-class cuisine. Our expert chefs combine the freshest ingredients and innovative techniques to create dishes that will tantalize your taste buds.
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <i className="fa-solid fa-circle-chevron-left"></i>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>

                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default HomeHeader;
