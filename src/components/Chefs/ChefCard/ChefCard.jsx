import React from 'react';
import './ChefCard.css';
import Likes from '../../../assets/icons/likes.png';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, name, picture, likes, recipes, years_of_experience } = chef;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={picture} className="card-image card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Number of recipes: {recipes.length}</p>
                    <div className='chef-priority'>
                        <div>
                            <p>Expericence: {years_of_experience} year's</p>
                        </div>
                        <div className='d-flex align-items-center gap-2 '>
                            <img src={Likes} height={20} alt="" /> {likes}
                        </div>
                    </div>
                    {/* View Chef */}
                    <div>
                        <Link to={`/chefrecipe/${id}`}><button className='btn btn-warning mt-2'>View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChefCard;
