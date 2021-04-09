
import React, { useEffect, useMemo } from 'react';
import { Container , Row,  Col, Card } from 'react-bootstrap';
import Header from '../../../layouts/commons/header/navigator';
import HomePhone from './homePhone.component';
import HomeProject from './homeProjects.component';
import CarouselBanner from '../../../layouts/commons/carousel/Carousel';

const Home : React.FC = (props: any) => {
    useEffect(() => {
        console.log('useEffect', props)
        props.fetchPhonesRequest();
        // eslint-disable-next-line
      }, []);
    // list phone
    let lstPhone = null;
    if(props.home.phones.phones){
        lstPhone = props.home.phones.phones.map((value: any, key: any) => 
      (<Col xs={6} md={4}>
        <HomePhone 
            id = {value.id}
            name =  {value.name}
            descrition = {value.descrition}
            create_date = {value.create_date}
        />
      </Col>)
     );
    }
    // const lstPhone = props.home.phones.phones.map((value: any, key: any) => 
    //   (<Col xs={6} md={4}>
    //     <HomePhone/>
    //   </Col>)
    // );
    console.log('lstPhone', lstPhone);
    return (
        <div className = 'home'>
            {/* header */}
            <Container>
                    <Header/>
            </Container>
            <hr/>
            {/* content */}
            <Container>
                <CarouselBanner/>
                <Card>
                <Card.Title>Phone</Card.Title>
                <Row>
                    {/* <Col xs={6} md={4}>
                        <HomePhone/>
                    </Col>
                    <Col xs={6} md={4}>
                        <HomePhone/>
                    </Col>
                    <Col xs={6} md={4}>
                        <HomePhone/>
                    </Col>
                    <Col xs={6} md={4}>
                        <HomePhone/>
                    </Col> */}
                    {lstPhone}
                </Row>
                </Card>
                <Card>
                <Card.Title>Project</Card.Title>
                <Row>
                    <Col xs={6} md={4}>
                        <HomeProject/>
                    </Col>
                    <Col xs={6} md={4}>
                        <HomeProject/>
                    </Col>
                    <Col xs={6} md={4}>
                        <HomeProject/>
                    </Col>
                    <Col xs={6} md={4}>
                        <HomeProject/>
                    </Col>
                </Row>
                </Card>
            </Container>
        </div>
    )
}  

export default Home;
