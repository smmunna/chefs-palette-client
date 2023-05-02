import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from './SingleChef/SingleChef';

const ChefRecipe = () => {
    const data = useLoaderData()
    if(!data){
        return <h5>Loading.......</h5>
    }

    return (
        <div>
            {
                data.map(chef=><SingleChef
                    key={chef.id}
                    chef={chef}
                />)
            }
        </div>
    );
}

export default ChefRecipe;
