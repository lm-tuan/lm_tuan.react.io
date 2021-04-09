import React from 'react';
import { Button, Navbar ,Form ,Nav, FormControl } from 'react-bootstrap';

const Navigator = () => {
    return (
        <>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Content</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
        </>
    );
}

export default Navigator;