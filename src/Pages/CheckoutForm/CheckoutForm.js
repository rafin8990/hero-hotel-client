import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ paymentData }) => {
    const { price, email, name, _id } = paymentData;
    const navigate=useNavigate()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transictionID, setTransictionID] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error)
            setCardError(error.message)
        }
        else {
            setCardError('');
        };
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        console.log(paymentIntent)

        if (paymentIntent.status === "succeeded") {

            const payment = {
                price,
                transictionID: paymentIntent.id,
                email,
               bookingId: _id

            }

            fetch('http://localhost:5000/payments', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess("Congratulations!!! Your Payments successfully Completed");
                        setTransictionID(paymentIntent.id)
                        navigate('/mybooking')
                    }
                })
        }
        setProcessing(false)

    }
    return (

        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <Button className='w-100 my-5' variant='success' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </Button>
            <p className='text-danger'>{cardError}</p>
            {
                success && <div>
                    <p className='text-success'> {success}</p>
                    <p>Your TransictionID: <span className='font-bold'>{transictionID}</span></p>
                </div>
            }
        </form>

    );
};

export default CheckoutForm;