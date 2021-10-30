import Button from '@restart/ui/esm/Button';
import React from 'react';
import {  Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <>
        <div>
            
            <div class="contact-image">
       
            <div class="contact-text">
            <h1>CONTACT US</h1>
    <p>Dentures actually improve our smiles and overall apperance. Not only they make us look better, but also make our life easier.</p>
            <button type="button" class="btn btn-outline-warning">Read More</button>
  </div>
</div>

</div>

<div className="contact-section ">
  <h1 className="text-center text-success mb-5">Send Message</h1>
  <div className="form-section">
  <Form>
  <div class="mb-3 w-50 gap-4 input-button mx-auto d-flex">
  <input type="name" className="form-control py-3 input" id="exampleFormControlInput1" placeholder="Name"/>
  <input type="email" className="form-control py-3 input" id="exampleFormControlInput1" placeholder="Email"/>
</div>

<div class="mb-3 w-50 mx-auto input-button"> 
  <textarea className="form-control input py-4 mt-4" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
</div>

  <div className="form-button text-center mt-4">
  <Button variant="warning" type="submit">
    Submit
  </Button>
  </div>

</Form>
  </div>
</div>


  </>      
    );
};

export default Contact;