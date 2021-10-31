import React from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuht from '../../hooks/useAuth';
import './Item.css'

const Item = (props) => {

    const {isLoading} = useAuht();
    if(isLoading){
    return <Spinner animation="border" variant="danger" />
    }
    
    console.log(props.item)
    const{name, img, _id, price, discreption} = props.item;
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
         <Link to={`/order/${_id}`}> <Button className="mb-4 mt-2" variant="outline-success">Order Now</Button></Link>
         </Card.Body>
         </Card>
    </div>
    );
};

export default Item;