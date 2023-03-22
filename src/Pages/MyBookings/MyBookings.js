import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://hero-hotel-server.vercel.app/allbooking')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div className='container my-5'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Serial No:</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings && bookings.map((book, i)=><tr
                        key={i}
                        >
                        <td>{i+1}</td>
                        <td>{book.name}</td>
                        <td>{book.email}</td>
                        <td>{book.address}</td>
                        <td>${book.price}</td>
                        <td>
                            {
                                book.price && !book.paid &&<Link to={`/payment/${book._id}`}> <Button variant='success'>pay </Button></Link>
                           
                            }
                            {
                                book.price && book.paid && <span className='text-success'>Paid</span>
                            }
                        </td>
                        
                    </tr>)
                    }
                    
                </tbody>
            </Table>
        </div>
    );
};

export default MyBookings;