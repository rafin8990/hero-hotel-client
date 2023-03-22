import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
    const paymentData = useLoaderData()
    console.log(paymentData)
    return (
        <div className='container'>
            <h1 className='my-3'>Please pay for confirm the Room Booking</h1>
            <div className='my-5'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    paymentData={paymentData}
                    
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;