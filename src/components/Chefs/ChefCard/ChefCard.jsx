import React from 'react';
import './ChefCard.css';

const ChefCard = ({ chef }) => {
    const { id, name, picture, likes, recipes, years_of_experience } = chef;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={picture} class="card-img-top img-fluid" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Number of recipes: {recipes.length}</p>
                    <div className='chef-priority'>
                        <div>
                            <p>Expericence: {years_of_experience}</p>
                        </div>
                        <div>
                            Likes {likes}
                        </div>
                    </div>
                    {/* View Chef */}
                    <div>
                        <button className='btn btn-warning mt-2'>View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChefCard;
