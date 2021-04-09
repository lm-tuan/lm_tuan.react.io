import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner001  from '../../../assets/images/banner001.jpg'
import Banner002  from '../../../assets/images/banner002.jpg'
import Banner003  from '../../../assets/images/banner003.jpg'

const CarouselBanner = () => {
    return (
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src= {Banner001}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src= {Banner002}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src= {Banner003}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBanner;