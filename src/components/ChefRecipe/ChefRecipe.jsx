import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from './SingleChef/SingleChef';
import { Card, Image } from 'react-bootstrap';
import './ChefRecipe.css';

const ChefRecipe = () => {
    const data = useLoaderData()
    if (!data) {
        return <h5>Loading.......</h5>
    }
    const { name, picture, bio, likes, years_of_experience, recipes } = data

    return (
        <div className='container mb-5'>
            {/* Chefs Details Card */}
            <div className='d-flex justify-content-center my-3'>
                <div>
                    <h3 className='display-5 fw-semibold my-4 text-center'>Chef's Details</h3>
                    <hr />
                    <div className='chef-image text-center'>
                        <Image src={picture} className='img-fluid' />
                    </div>
                    <div className='my-4 px-4'>
                        <p><span className='fw-semibold'>Name:</span> {name}</p>
                        <p><span className='fw-semibold'>Bio:</span> {bio}</p>
                        <p><span className='fw-semibold'>Experience:</span> {years_of_experience} year's</p>
                        <p><span className='fw-semibold'>Likes:</span> {likes}</p>
                        <p><span className='fw-semibold'>Total Recipes:</span> {recipes.length}</p>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="text-center">
                <h3 className="display-5 fw-semibold">{name}'s Recipes Collection</h3>
                <hr />
            </div>

            {/* Next Card */}
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {
                    recipes.map(recipe => <SingleChef
                        key={recipe.name}
                        recipe={recipe}
                    />)
                }
            </div>
        </div>
    );
}

export default ChefRecipe;
