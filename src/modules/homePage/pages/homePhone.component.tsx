import React from 'react';
import { Button, Card } from 'react-bootstrap';
import LogoPhone from '../../../assets/images/phone.jpg'

interface IHomePhone{
    id: string,
    name : string;
    descrition : string,
    create_date : string,
}

const HomePhone = (props: IHomePhone) => {
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {LogoPhone} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            {props.descrition} Some quick example text to build on the card title and make up the bulk of
            the card's content have id = {props.id}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </>
    );
}

export default HomePhone;