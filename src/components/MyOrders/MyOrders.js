import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './MyOrders.css'

const MyOrders = () => {
   
    const [users, setUsers] = useState([]);

    useEffect( () => {

        fetch('http://localhost:8000/orders')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []) 


    const handelDelete = (id) => {
 
        const url = `http://localhost:8000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Deleted')
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining);

            }
        })
    }

    return (
        <div>
            <h1 className="text-center mt-4 text-success mb-4"> My Total Orders : {users.length}  </h1>

            {
                users.map(user =>
               <div className="text-center orders"
               key={user._id}
               >
               <div className="my-order">
               <h5>Food Name : {user.foodName}</h5>
               <p><i class="fas fa-map-marked-alt"></i> {user.address}</p>
               <p><i class="fas fa-phone-alt"></i> {user.phone}</p>

               <button onClick={() => handelDelete(user._id)} type="button" class="btn btn-outline-warning mt-2">Delete</button>
              
               </div>
               
               </div>
               )
            }
        </div>
    );
};

export default MyOrders;