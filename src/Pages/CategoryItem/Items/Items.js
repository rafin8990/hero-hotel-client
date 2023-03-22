import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';

const Items = () => {
    const categoryItems = useLoaderData();
    console.log(categoryItems)
    return (
        <div className='container'>
            <div>
                <h3 className='text-center'>Categories</h3>
                <h1 className='text-center'>Get <span className='font-weight-bold text-success'>20% discount</span> In first Order</h1>
                <p className='text-center'>Booking category</p>
            </div>
            <div className='row g-5 mt-5 '>
                {
                    categoryItems.map(item => <ItemDetails
                        key={item._id}
                        item={item}
                    ></ItemDetails>)
                }
            </div>
        </div>
    );
};

export default Items;