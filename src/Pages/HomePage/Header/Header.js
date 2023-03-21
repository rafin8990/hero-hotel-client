import React from 'react';
import './Header.css'
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../assets/Bedroom-banner.png'
import banner2 from '../../../assets/image2.png'
import banner3 from '../../../assets/bedroom-banner.jpg'

const Header = () => {
    return (
        <div className=''>
            <Carousel variant='dark'>
                <Carousel.Item className='img-gradient'>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Plan To Book a Hotel</h1>
                        <p>We Have A Qualityfull Rooms and Service</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='img-gradient'>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>Plan To Book a Hotel</h1>
                        <p>We Have A Qualityfull Rooms and Service</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='img-gradient'>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Plan To Book a Hotel</h1>
                        <p>
                        We Have A Qualityfull Rooms and Service
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;