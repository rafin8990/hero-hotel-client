import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import {  useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingsDetails = () => {
    const bookingData = useLoaderData();
    // console.log(bookingData);
  const navigate=useNavigate()
  const {user}=useContext(AuthContext)

    const handleSubmit=(event)=>{
        event.preventDefault()
        const form= event.target;
        const name=form.name.value;
        const email=form.email.value;
        const mobile=form.mobile.value;
        const address=form.address.value;
        const roomName=bookingData.name;
        const price=bookingData.price;
        const picture=bookingData.picture

        const info={
            name,
            email,
            mobile,
            address,
            roomName,
            price,
            picture
        }
        fetch('https://hero-hotel-server.vercel.app/bookings',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('Your Room booking Successfully Added to the cart')
                navigate('/mybooking')
            }
        })
    }

    return (
        <div className='container'>
            <img className='my-5' src={bookingData.picture} alt="" />
            <form onSubmit={handleSubmit} className='border p-3'>
                <div>
                    <div className='mt-2'>
                        <p>Name:</p>
                        <input defaultValue={user?.displayName} disabled className='w-100  p-2 rounded' placeholder='Your Name' name='name' type="text" />
                    </div>
                    <div className='mt-2'>
                        <p>Email:</p>
                        <input defaultValue={user?.email} disabled className='w-100  p-2 rounded' placeholder='Your Email' name='email' type="email" />
                    </div>
                    <div className='mt-2'>
                        <p>Mobile NO:</p>
                        <input className='w-100  p-2 rounded' placeholder='Your Mobile Number' name='mobile' type="text" />
                    </div>
                    <div className='mt-2'>
                        <p>Your Address:</p>
                        <input className='w-100  p-2 rounded' placeholder='Your Address' name='address' type="text" />
                    </div>
                    <div className='mt-3'>
                        <Button type='submit' className=' w-100' variant='success'> Submit Booking</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookingsDetails;