import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

// import axios from 'axios';

const Index = () => {
    return (
        <div>
        <nav className='top-app-bar navbar navbar-expand navbar-dark bg-primary'>
            <div className='container-fluid px-4'>
                <a href="" className='navbar-brand me-auto'>PENSION</a>
            </div>

            <div className='d-flex align-items-center mx-3 me-lg-0 col-md-6 justify-content-end'>
                    <ul className="navbar-nav d-none d-lg-flex" style={{marginRight:"10px"}}>
                        <li className="nav-item"><a className="nav-link active" href="\">Pension Benefits</a></li>
                        <li className="nav-item"><a className="nav-link" href="\calculator_page">Calculator</a></li>
                        <li className="nav-item"><a className="nav-link" href="\">Contact Us</a></li>
                        <li className="nav-item" style={{background:"#9c27b0"}}><a className="nav-link" style={{color:"#fff"}} target="_blank" href="\login">Sign In</a></li>

                    </ul>
  
            </div>
        </nav>

        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('../assets/pension.jpg')}
                alt="First slide"
                />
           
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('../assets/pension2.jpg')}
                alt="Second slide"
                />
      
            </Carousel.Item>

            </Carousel>        
            <CardGroup>
            <Card style={{ width: '18rem', margin :"40px 20px", backgroundColor:"#f5bbbb"}}>
                <Card.Img variant="top" src={require('../assets/statepension.jpg')} />
                <Card.Body>
                    <Card.Title>State Pension</Card.Title>   
                    <p>The State Pension is a really important part of people's retirement. So this is why it's so important to understand how it works.</p>           
                </Card.Body>
            </Card>


            <Card style={{ width: '18rem', margin :"40px 20px", backgroundColor:"#bbdaf5"  }}>
                <Card.Img variant="top" src={require('../assets/calculator.jpg')} />
                <Card.Body>
                    <Card.Title>Calculator</Card.Title>  
                    <p>Use our pension tool to check your workplace pension contribution and normal pension amount to help how much is getting amount into your pension.</p>         
                </Card.Body>
            </Card>  


            <Card style={{ width: '18rem', margin :"40px 20px", backgroundColor:"#bbf5bf"  }}>
                <Card.Img variant="top" src={require('../assets/workpen.jpg')} />
                <Card.Body>
                    <Card.Title>Workplace Pension</Card.Title>                                  
                    <p>It is now law that most employees must be enrolled into a workplace pension scheme by their employer. This calculator will show you how much will be paid into your pension by you and your employer.</p>
                </Card.Body>
            </Card>   
            </CardGroup>   

            <div style={{ width: '100%', height:"80px", backgroundColor:"#0d6efd"}}>
                <p style={{fontSize:"20px", color:"white", paddingTop:"20px"}}>© 2022 Pension Online tool, All rights reserved.</p>
            </div>
        </div>
    );
}

export default Index;