import React, {useEffect, useState} from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

// import axios from 'axios';

const WorkplacePensionCalc = () => {
    const [salaryAmount, setSalaryAmount] = useState(0);
    const [employeeContributions, setEmployeeContributions] = useState(0);
    const [employerContributions, setEmployerContributions] = useState(0);
    const [showRetirmentBox, setShowRetirmentBox] = useState(false);
    const [contributionPeriod, setContributionPeriod] = useState("month");
    let SaleryRef = React.createRef();
    let retirmentPeriodRef = React.createRef();
    
    const retirmentPeriodFunc = () => {
        const retirmentPeriod = (retirmentPeriodRef.current.value === "month") ? 1 : 12 ;
        setContributionPeriod(retirmentPeriodRef.current.value);
        console.log("retirmentPeriod", retirmentPeriod);
        const employee_contribution = salaryAmount*5/100;
        const employer_contribution = salaryAmount*3/100;
        setEmployeeContributions(Math.round(retirmentPeriod*employee_contribution));
        setEmployerContributions(Math.round(retirmentPeriod*employer_contribution));
        // setRetirmentAmount(Math.round(retirmentPeriod*retirmentAmt));
    }
    
    const contributionAmount = () => {
        setShowRetirmentBox(true);
        setSalaryAmount(SaleryRef.current.value);
        
    }

    useEffect(() => {
        if(showRetirmentBox){
            retirmentPeriodFunc("");
        }
        
    })

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
                    <Card.Title>Workplace Pension Amount Calculator</Card.Title>          
                </Card.Body>
        </Card>              
        <CardGroup style={{ width: '100%', height:"auto", display:"flex", flexDirection:"column", alignItems:"center"}}>
   
            <Card style={{ width: '800px',height:"130px", margin :"40px 20px", backgroundColor:"#f9f9f9"  }}>
               
                <Card.Body>
                <form >
                    <Card.Title>Workplace pension contribution calculator</Card.Title>    
                   
                        <div className="mb-3 form-group " style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>                            
                        <h3 style={{paddingRight:"10px"}}>Your Salary </h3> <input className="form-control" ref={SaleryRef} type="text" style={{ width: '150px'}} id="formFile"/>             
                        </div>
                        <button type="button" className="btn btn-primary" onClick={contributionAmount}>Contributions</button>
                        {showRetirmentBox ?
                        <>
                        <h3 style={{paddingTop:"10px"}}>Contributions will be based on your salary of £{salaryAmount*12} per year.</h3>
                          
                            <div className="mb-3 form-group " style={{display:"flex", flexDirection:"row", justifyContent:"center"}}> 
                                <h4 style={{paddingRight:"10px", textAlign:"left"}}>Show my contributions</h4>
                                <select className="form-control form-control-lg" onChange={retirmentPeriodFunc} ref={retirmentPeriodRef} style={{width:"150px", paddingLeft:"10px"}}>
                                    <option value="month">Per Month</option>
                                    <option value="year">Year</option>            
                                </select>
                            </div>    
                            <Card style={{ width: '300px',height:"250px", margin :"40px 20px", backgroundColor:"#fff", padding:"10px", textAlign:"left"  }}>
                                <h3 style={{fontSize:"18px"}}>Your {(contributionPeriod === "month")? "monthly": "annual"} contribution</h3>
                                <p>{"£"+employeeContributions}</p>
                                <h3 style={{fontSize:"18px"}}>Employer's {(contributionPeriod === "month")? "monthly": "annual"} contribution</h3>
                                <p>{"£"+employerContributions}</p>
                                <h3 style={{fontSize:"18px"}}>Total {(contributionPeriod === "month")? "monthly": "annual"} contributions</h3>
                                <p>£{employerContributions+employeeContributions}</p>
                            </Card>                    
                        </>:null}
 
                    </form>
                </Card.Body>
            </Card>  

            </CardGroup>   

            <div style={{ width: '100%', height:"80px", backgroundColor:"#0d6efd"}}>
                <p style={{fontSize:"20px", color:"white", paddingTop:"20px"}}>© 2022 Pension Online tool, All rights reserved.</p>
            </div>
        </div>
    );
}

export default WorkplacePensionCalc;