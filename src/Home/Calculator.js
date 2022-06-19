import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

// import axios from 'axios';

const CalculatorPage = () => {
    return (
        <div>
        <nav className='top-app-bar navbar navbar-expand navbar-dark bg-primary'>
            <div className='container-fluid px-4'>
                <a href="" className='navbar-brand me-auto'>PENSION</a>
            </div>

            <div className='d-flex align-items-center mx-3 me-lg-0 col-md-6 justify-content-end'>
                    <ul className="navbar-nav d-none d-lg-flex" style={{marginRight:"10px"}}>
                    <li className="nav-item"><a className="nav-link" href="\">Pension Benefits</a></li>
                        <li className="nav-item"><a className="nav-link active" href="\calculator_page">Calculator</a></li>
                        <li className="nav-item"><a className="nav-link" href="\">Contact Us</a></li>
                        <li className="nav-item" style={{background:"#9c27b0"}}><a className="nav-link" style={{color:"#fff"}} target="_blank" href="\login">Sign In</a></li>
                    </ul>
  
            </div>
        </nav>
        <Card style={{ width: '100%', backgroundColor:"#bbdaf5"  }}>
                
                <Card.Body>
                    <Card.Title>Pension Calculator Tool</Card.Title>          
                </Card.Body>
        </Card>              
        <CardGroup style={{ width: '500px', height:"430px"}}>

            <Card style={{ width: '300px',height:"230px", margin :"40px 20px", backgroundColor:"#bbdaf5"  }}>
                <Card.Img variant="top" src={require('../assets/calculator.jpg')}  />
                <Card.Body>
                    <a href="/pension_calc"><Card.Title>Pension Calculator</Card.Title></a>   
                </Card.Body>
            </Card>  


            <Card style={{ width: '300px',height:"230px", margin :"40px 20px", backgroundColor:"#bbf5bf"  }}>
                <Card.Img variant="top" src={require('../assets/workpen.jpg')} />
                <Card.Body>
                <a href="/work_pension_calc"><Card.Title>Workplace Pension Calculator</Card.Title></a>              
                </Card.Body>
            </Card>   
            </CardGroup>   

            <div style={{ width: '100%', height:"80px", backgroundColor:"#0d6efd"}}>
                <p style={{fontSize:"20px", color:"white", paddingTop:"20px"}}>© 2022 Pension Online tool, All rights reserved.</p>
            </div>
        </div>
    );
}

export default CalculatorPage;