import React from 'react';
import { useState } from 'react';
import './Items.css';
import { useEffect } from 'react';
import Item from '../Item/Item';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/items')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return (

        <div className="Items">

            <h1 className="text-center mt-3 text-success">Our Items</h1>

           <div className="items-container">
   
         {
                items.map(item => <Item
                    key = {item.id}
                    item={item}

                ></Item>)
            }
           </div>

        </div>
    );
};

export default Items;