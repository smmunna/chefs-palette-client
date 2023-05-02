import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard/ChefCard';

const Chefs = () => {
    const data = useLoaderData();
    return (
        <div>
            <h3 className='my-4 text-center display-4 fw-semibold'>Our Chef's</h3>
            <hr />
            <div className="my-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    data.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    />)
                }
            </div>
        </div>
    );
}

export default Chefs;
