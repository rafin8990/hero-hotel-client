import React from 'react';
import Card from 'react-bootstrap/Card';
import picture1 from '../../../assets/334471092_221469993757657_2033339528433816025_n.png'
import picture2 from '../../../assets/Primary-Colorful-Bedroom.jpg'
import picture3 from '../../../assets/Built-in-Bunk-Beds.jpg'
import picture4 from '../../../assets/discount.jpg'
import picture5 from '../../../assets/country.jpg'


const Bookings = () => {
    return (
        <div>
            <div >
                <img className='w-100' src={picture5} alt="" />
            </div>
            <div className='container mt-5'>
                <div>
                    <h1 className='text-center mt-5 '>Hotels <span className='font-weight-bold text-success'>Booking Open Now!</span></h1>
                    <p className='text-center'>World's leading Hotel Booking website,Over 30,000 Hotel rooms worldwide. Book Hotel rooms and enjoy your holidays with distinctive experience</p>
                </div>

                <div className='mt-5 row g-5'>
                    <div className=' col'>
                        <Card >
                            <Card.Img variant="top" src={picture1} />
                            <Card.Body>
                                <div className='d-flex justify-content-between align-items-center g-5'>
                                    <div>
                                        <Card.Title>GTC Grand Chola</Card.Title>
                                        <Card.Text>
                                            City: illunois,united states
                                        </Card.Text>
                                        <p>Ratings:</p>
                                    </div>
                                    <div>
                                        <h1 className='text-success'>$500</h1>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className=' col'>
                        <Card >
                            <Card.Img variant="top" src={picture2} />
                            <Card.Body>
                                <div className='d-flex justify-content-between align-items-center g-5'>
                                    <div>
                                        <Card.Title>GTC Grand Chola</Card.Title>
                                        <Card.Text>
                                            City: illunois,united states
                                        </Card.Text>
                                        <p>Ratings:</p>
                                    </div>
                                    <div>
                                        <h1 className='text-success'>$500</h1>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className=' col'>
                        <Card >
                            <Card.Img variant="top" src={picture3} />
                            <Card.Body>
                                <div className='d-flex justify-content-between align-items-center g-5'>
                                    <div>
                                        <Card.Title>GTC Grand Chola</Card.Title>
                                        <Card.Text>
                                            City: illunois,united states
                                        </Card.Text>
                                        <p>Ratings:</p>
                                    </div>
                                    <div>
                                        <h1 className='text-success'>$500</h1>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>


                </div>

            </div>
            <div className='mt-5'>
                <img className='w-100' src={picture4} alt="" />
            </div>
        </div>
    );
};

export default Bookings;