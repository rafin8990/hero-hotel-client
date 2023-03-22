import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const BookingsDetails = () => {
    const bookingData = useLoaderData();
    console.log(bookingData);
    return (
        <div className='container'>
            <form className='border p-3'>
                <div>
                    <div className='mt-2'>
                        <p>Name:</p>
                        <input className='w-50  p-2 rounded' placeholder='Your Name' name='name' type="text" />
                    </div>
                    <div className='mt-2'>
                        <p>Email:</p>
                        <input className='w-50  p-2 rounded' placeholder='Your Email' name='email' type="email" />
                    </div>
                    <div className='mt-2'>
                        <p>Mobile NO:</p>
                        <input className='w-50  p-2 rounded' placeholder='Your Mobile Number' name='mobile' type="number" />
                    </div>
                    <div className='mt-2'>
                        <p>Your Address:</p>
                        <input className='w-50  p-2 rounded' placeholder='Your Address' name='address' type="number" />
                    </div>
                    <div className='mt-3'>
                        <Button className=' w-50' variant='success'> Submit Booking</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookingsDetails;