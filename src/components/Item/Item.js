import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = (props) => {

    console.log(props.item)
    const{name, img, id, price, discreption} = props.item;
    return (
        <div className="item">
        <Card  className="borders" style={{ width: '22rem' }}>
         <Card.Img variant="top" src={img} className="img"  />
         <Card.Body>
         <Card.Title className="card-tittle mt-3">{name}</Card.Title>
         <Card.Text>
         {discreption}
         <h3 className="mt-2 price">{price}</h3>
         </Card.Text>
         <Link to={`/serviceDetails/${id}`}> <Button className="mb-4 mt-2" variant="outline-success">Order Now</Button></Link>
         </Card.Body>
         </Card>
    </div>
    );
};

export default Item;