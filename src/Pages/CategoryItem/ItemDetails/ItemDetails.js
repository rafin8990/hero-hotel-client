import React from 'react';
import { Button } from 'react-bootstrap';
import './ItemDetails.css'

const ItemDetails = ({ item }) => {
    const { name, categoryName, price, picture } = item;
    return (
        <div className='col'>
            <div className='d-md-flex justify-content-between align-items-center border shadow-lg'>
                <div>
                    <img className='img' src={picture} alt="" />
                </div>
                <div className='p-5'>
                    <h5>Name: {name}</h5>
                    <h6>Category: {categoryName}</h6>
                    <h5>Price: ${price}</h5>
                    <Button variant='success'>Add To Cart</Button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;