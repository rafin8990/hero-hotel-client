import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ItemDetails.css'

const ItemDetails = ({ item}) => {
    const {_id, name, categoryName, price, picture } = item;
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
                    <Link to={`/booking/${_id}`}><Button variant='success'>Add To Cart</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;