import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div className="footer-container">

            <div className='contact'>
               <div className="mb-3">
               <img src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/logo_2x.png" width="200" height="50" className="d-inline-block align-top" alt="React Bootstrap logo"/>
               </div>
                <p><i class="fas fa-map-marker-alt"></i> 256 Elizaberth Ave Str, Wellco</p>
                <p><i class="fas fa-phone"></i>  +012 (345) 678 99</p>
                <p><i class="far fa-envelope"></i> supportcoach@gmail.com</p>
            </div>


            <div className='items-link'>
                <h2>Our Items</h2>

                <div className='items-list'>
                
                <p>Dental Implants</p>
                <p>Tooth Protection</p>
                <p>Teeth Cleaning</p>
                <p>Dental Calculus</p>
          

                </div>
            </div>


            <div className='contact-site'>
                <p>Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</p>

                <span className='icon'><i class="fab fa-facebook-square"></i></span>
                <span className='icon'><i class="fab fa-twitter-square"></i></span>
                <span className='icon'><i class="fab fa-instagram"></i></span>
                <span className='icon'><i class="fab fa-youtube"></i></span>
                <div className="mt-3">
                <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/foodota-logo-main.svg" width="300" height="80" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                </div>
            </div>

            
        </div>

   <div className="copy-right text-center pt-3">
   <p>2021 © All rights reserved by Sharif Sikder</p>
     </div>

     </>
    );
};

export default Footer;