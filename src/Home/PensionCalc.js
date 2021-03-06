import React, {useState} from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

// import axios from 'axios';

const PensionCalc = () => {
    const [salaryAmount, setSalaryAmount] = useState(0);
    const [retirmentAmount, setRetirmentAmount] = useState(0);
    const [showRetirmentBox, setShowRetirmentBox] = useState(false);
    let SaleryRef = React.createRef();
    let retirmentPeriodRef = React.createRef();
    const RetrimentAmount = () => {
        setShowRetirmentBox(true);
        setSalaryAmount(SaleryRef.current.value);
        // console.log(SaleryRef.current.value, SaleryRef.current.value*80/100);
        setRetirmentAmount(Math.round(SaleryRef.current.value*80/100));
        // console.log("amount", SaleryRef.current.value);


    }

    const retirmentPeriodFunc = () => {
        const retirmentPeriod = (retirmentPeriodRef.current.value === "month") ? 1 : 12 ;
        const retirmentAmt = salaryAmount*80/100;
        
        setRetirmentAmount(Math.round(retirmentPeriod*retirmentAmt));
    }

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
                    <Card.Title>Pension Amount Calculator</Card.Title>          
                </Card.Body>
        </Card>              
        <CardGroup style={{ width: '100%', height:"auto", display:"flex", flexDirection:"column", alignItems:"center"}}>
   
            <Card style={{ width: '800px',height:"130px", margin :"40px 20px", backgroundColor:"#f9f9f9"  }}>
               
                <Card.Body>
                <form >
                    <Card.Title>How much will you need to maintain your current lifestyle in retirement?</Card.Title>    
                   
                        <div className="mb-3 form-group " style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>                            
                        <h3 style={{paddingRight:"10px"}}>?? </h3> <input className="form-control" ref={SaleryRef} type="text" style={{ width: '150px'}} id="formFile"/>             
                        </div>
                        <button type="button" className="btn btn-primary" onClick={RetrimentAmount}>Next</button>
                        {showRetirmentBox ?
                        <>
                        <h3 style={{paddingTop:"10px"}}>Target retirement income</h3>
                            <p>People in the same salary range as you say they would like to have around 80% of their current salary in retirement.</p>

                            <p>Your target retirement income is (you can change this in Step 5 if you want to):</p>
                            <div className="mb-3 form-group " style={{display:"flex", flexDirection:"row", justifyContent:"center"}}> 
                                <h3 style={{paddingRight:"10px",color:"green"}}>??{retirmentAmount}</h3>
                                <select className="form-control form-control-lg" onChange={retirmentPeriodFunc} ref={retirmentPeriodRef} style={{width:"150px", paddingLeft:"10px"}}>
                                    <option value="month">Per Month</option>
                                    <option value="year">Year</option>            
                                </select>
                            </div>                        
                        </>:null}
 
                    </form>
                </Card.Body>
            </Card>  

            </CardGroup>   

            <div style={{ width: '100%', height:"80px", backgroundColor:"#0d6efd"}}>
                <p style={{fontSize:"20px", color:"white", paddingTop:"20px"}}>?? 2022 Pension Online tool, All rights reserved.</p>
            </div>
        </div>
    );
}

export default PensionCalc;