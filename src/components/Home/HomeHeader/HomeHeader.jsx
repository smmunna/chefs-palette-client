import React from 'react';
import './HomeHeader.css';

const HomeHeader = () => {

    return (
        <div class="section2-carosoul">
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carosoul-items1">
                            <div class="carosoul-comment-profile">
                                <img src="images/profile.png" class="img-fluid" alt=""/>
                            </div>
                            <div class="carosoul-heading display-3 fw-bold"> Welcome to Chef's Palette</div>
                            <div class="carosoul-description">
                            Experience a gastronomic journey like no other with our world-class cuisine. Our expert chefs combine the freshest ingredients and innovative techniques to create dishes that will tantalize your taste buds.                          </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carosoul-items2">
                            <div class="carosoul-comment-profile">
                                <img src="images/profile.png" class="img-fluid" alt="" />
                            </div>
                            <div class="carosoul-heading display-3 fw-bold">Explore Our Chef with Quality</div>
                            <div class="carosoul-description">
                            Experience a gastronomic journey like no other with our world-class cuisine. Our expert chefs combine the freshest ingredients and innovative techniques to create dishes that will tantalize your taste buds.
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carosoul-items3">
                            <div class="carosoul-comment-profile">
                                <img src="images/profile.png" class="img-fluid" alt="" />
                            </div>
                            <div class="carosoul-heading display-3 fw-bold">Discover our Exquisite Menu</div>
                            <div class="carosoul-description">
                            Experience a gastronomic journey like no other with our world-class cuisine. Our expert chefs combine the freshest ingredients and innovative techniques to create dishes that will tantalize your taste buds.
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <i class="fa-solid fa-circle-chevron-left"></i>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>

                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default HomeHeader;
