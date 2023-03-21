import React from 'react';
import Bookings from '../Bookings/Bookings';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Bookings></Bookings>
            
        </div>
    );
};

export default Home;