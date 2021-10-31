import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuht from '../../hooks/useAuth';
import "./Order.css";

const Order = () => {
    const {id} = useParams();
    const { user } = useAuht();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [item, setItem] = useState({})

    useEffect( () => {
        fetch(`https://guarded-ridge-80572.herokuapp.com/items/${id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }) 
     const onSubmit = data => {
            console.log(data)
            fetch(`https://guarded-ridge-80572.herokuapp.com/orders`, {
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId){
                    alert('Order Processed Successfully')
                    reset();
                }
            })
        
     }
    return (
        <div className="order-section">
          <div className="order-details text-center pt-3">
         
          <h1 className="mb-4 text-primary">Food Details</h1>
            
           <div className="details">
           <img className="rounded mb-2 pt-3 shadow" src={item?.img} alt="" />
            <h3 className=" mt-2 text-success">{item?.name}</h3>
            <h4 className=" mt-3 text-danger">{item?.price} </h4>
            <p className="w-50 mx-auto text-secondary pb-4 mb-5">{item?.discreption} </p>
           </div>
          </div>

          <div className="form-section text-center pt-3">
          <h1 className="text-center mb-4 text-success">Please Order</h1>
              <div className="order-place">
             
            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                <input className="py-2 px-3" defaultValue={user.displayName} {...register("name")} />

                <input className="py-2 px-3" defaultValue={user.email} {...register("email", { required: true })} />

                {errors.email && <span className="error">This field is required</span>}

                <input className="py-2 px-3" placeholder="Food Name" defaultValue="" {...register("foodName")} />
                <input className="py-2 px-3" placeholder="Address" defaultValue="" {...register("address")} />              
                <input className="py-2 px-3" placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" value="Place Order" />
            </form>
              </div>
        </div>
        </div>
    );
};

export default Order;