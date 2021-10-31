import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
          <Banner></Banner>  
         <Items></Items>
        
         <Contact></Contact>
         <About></About>
        </div>
    );
};

export default Home;