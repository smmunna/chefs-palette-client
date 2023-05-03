import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import Favorite from '../../../assets/icons/favourite.png';
import { ToastContainer, toast } from 'react-toastify';

const SingleChef = ({ recipe }) => {
    const { name, ingredients, method, rating } = recipe;
    const[favourite,setFavorite]=useState(false)
    const handleFavorite = () =>{
        setFavorite(!favourite)
        toast(`You marked '${name}' as your favorite recipe.`,{
            position:"bottom-right"
        })
    }
  
    return (
        <div class="col">
            <div class="card h-100">
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <div class="card-body mb-3" style={{ position: "relative" }}>
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Method: {method}</p>
                    <p>Rating: {rating}
                        <span>
                        <ReactStars
                            count={5}
                            value={rating}
                            edit={false}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        </span>
                    </p>

                    <p>Ingredients:</p>
                    <p>
                        <ol type='1'>
                            {
                                ingredients.map((ingre, index) => <li key={index + 1}>{ingre}</li>)
                            }
                        </ol>
                    </p>
                    <div className='my-5'>
                        <button className='btn btn-danger' onClick={handleFavorite} disabled={favourite?true:false} style={{ position: "absolute", bottom: "0" }}> <img src={Favorite} height={35} alt="" /> Add to Favorite</button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default SingleChef;
