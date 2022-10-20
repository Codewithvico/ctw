import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Semiproduct from '../components/Semiproduct';
import Slider from '../components/Slider';
import FreeProducts from '../components/FreeProducts';
import './Style.css'

const Home = () => {
  return (
    <div className='bg-color'>
        <Announcement />
        <Navbar />
        <br />
        <Slider />
        <Semiproduct />
        <Categories />
        <Products />
        <Semiproduct />
        <Newsletter />
        <FreeProducts />
        <Footer />
    </div>
  );
};

export default Home;
