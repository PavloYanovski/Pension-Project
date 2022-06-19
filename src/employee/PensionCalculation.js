import React from 'react';
import axios from 'axios';

const PensionCalculation = () => {
    const nameRef = React.useRef();
    const companyNameRef = React.useRef();
    const dobRef = React.useRef();
    const panRef = React.useRef();
    const accountnoRef = React.useRef();
    const mobileRef = React.useRef();
    const emailRef = React.useRef();
    const addressRef = React.useRef();
    const passwordRef = React.useRef();


    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: nameRef.current.value,
            companyName: companyNameRef.current.value,            
            dob: dobRef.current.value,
            pan: panRef.current.value,
            accountno: accountnoRef.current.value,
            mobile: mobileRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
            password: passwordRef.current.value,
            
        };
      
        
        axios({
            url:"http://localhost:8000/api/add_employee",
            method:"POST",      
            dataType:"json",      
            data:data
          })
          .then(response => { 
              console.log("ddddddd", response);    
            if(response){   
                console.log(response);
            }
            
          })  

    };

    return (
        <div>
            <nav className='top-app-bar navbar navbar-expand navbar-dark bg-primary'>
                <div className='container-fluid px-4'>
                    <a href="" className='navbar-brand me-auto'>Admin</a>
                </div>

                <div className='d-flex align-items-center mx-3 me-lg-0 col-md-6 justify-content-end'>
                        <ul className="navbar-nav d-none d-lg-flex">
                        <li className="nav-item"><a className="nav-link active" href="\dashboard_employee">Beneifts Details</a></li>
                            <li className="nav-item"><a className="nav-link" href="\pension_calculation">Pension Calculation</a></li>
                            {/* <li className="nav-item"><a className="nav-link active" href="">Details</a></li>                         */}
                            <li className="nav-item"><a className="nav-link" href="\profile">Profile</a></li>
                        </ul>
                        <div className="d-flex">
                        <div className="dropdown">
                        
                                <a className="me-3" href="/">                                
                                Logout
                                </a>
                                
                            </div>
                        </div>
                </div>
            </nav>

        <div className='container py-5 h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className="col-12 col-md-8 col-lg-6 col-xl-6">
                <div className="card px-0">
                    <div className="card-header">
                        <h4 className='text-left'>Pension Calculation</h4>
                    </div>
                    <div className="card-body">
                    <form onSubmit={handleSubmit} >
                             
                        <div class="mb-3 form-group ">
                            <label for="companyName" className="form-label col-12" style={{textAlign:"left"}}>Salary amount</label>
                            <input className="form-control" type="text" ref={companyNameRef}  id="companyName"/>
                        </div>                                                  
                        <button type="submit" class="btn btn-primary">Calculate</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>

        </div>  
        </div>
    );
};

export default PensionCalculation;