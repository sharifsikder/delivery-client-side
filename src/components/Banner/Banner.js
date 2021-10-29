import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (

          <div className="banner">           
           <div class="banner-image">
           <div class="banner-text">
           <h1>Food Delivery</h1>
           <p>Dentures actually improve our smiles and overall apperance. Not only they make us look better, but also make our life easier.</p>
           <Button variant="outline-warning" size="lg">Read More</Button>
           </div>
           </div>
           
           </div>  
    );
};

export default Banner;