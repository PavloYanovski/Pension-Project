import React from 'react';
import axios from 'axios';

const Admin = () => {
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
            <nav className='top-app-bar navbar navbar-expand navbar-dark bg-dark'>
                <div className='container-fluid px-4'>
                    <a href="" className='navbar-brand me-auto'>Employer</a>
                </div>

                <div className='d-flex align-items-center mx-3 me-lg-0 col-md-6 justify-content-end'>
                        <ul className="navbar-nav d-none d-lg-flex">
                        <li className="nav-item"><a className="nav-link active" href="\members">Member Details</a></li>
                        <li className="nav-item"><a className="nav-link" href="\add_benefits">Add Beneifts</a></li>
                            {/* <li className="nav-item"><a className="nav-link active" href="\admin_dashboard">Create Employee</a></li> */}
                            
                            {/* <li className="nav-item"><a className="nav-link active" href="">Details</a></li>                         */}
                            {/* <li className="nav-item"><a className="nav-link" href="">Approval</a></li> */}
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
                        <h4 className='text-left'>Create Employee</h4>
                    </div>
                    <div className="card-body">
                    <form onSubmit={handleSubmit} >
                        <div class="mb-3 form-group ">
                            <label for="formFile" className="form-label col-12" style={{textAlign:"left"}}>Name</label>
                            <input className="form-control" type="text" ref={nameRef}  id="formFile"/>
                        </div>
                        <div class="mb-3 form-group ">
                            <label for="companyName" className="form-label col-12" style={{textAlign:"left"}}>Company Name</label>
                            <input className="form-control" type="text" ref={companyNameRef}  id="companyName"/>
                        </div>                        
                        <div className="mb-3 form-group">
                            <label for="employeeDOB" className="form-label col-12 " style={{textAlign:"left"}}>DOB</label>
                            <input className="form-control" ref={dobRef} type="date" id="employeeDOB" multiple/>
                        </div>
                        {/* <div className="mb-3 form-group">
                            <label for="formFileDisabled" className="form-label col-12 " style={{textAlign:"left"}}>Gender</label>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="male" checked/>
                            <label class="form-check-label" for="exampleRadios1">
                                Male
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="female" />
                            <label class="form-check-label" for="exampleRadios2">
                                Female
                            </label>
                            </div> 
                        </div> */}
                        <div className="mb-3 form-group">
                            <label for="employeePan" className="form-label col-12 " style={{textAlign:"left"}}>PAN</label>
                            <input className="form-control form-control-sm" ref={panRef} id="employeePan" type="text"/>
                        </div>

                        <div className="mb-3 form-group">
                            <label for="employeeAccountno" className="form-label col-12 " style={{textAlign:"left"}}>Account No</label>
                            <input className="form-control form-control-sm" ref={accountnoRef} id="employeeAccountno" type="text"/>
                        </div>
                        <div className="mb-3 form-group">
                            <label for="employeeMobile" className="form-label col-12 " style={{textAlign:"left"}}>Mobile No</label>
                            <input className="form-control form-control-sm" ref={mobileRef} id="employeeMobile" type="text"/>
                        </div>  
                        <div className="mb-3 form-group">
                            <label for="employeeEmail" className="form-label col-12 " style={{textAlign:"left"}}>Email</label>
                            <input className="form-control form-control-sm" ref={emailRef} id="employeeEmail" type="email"/>
                        </div>  
                        <div className="mb-3 form-group">
                            <label for="employeeAddress" className="form-label col-12 " style={{textAlign:"left"}}>Address</label>
                            <textarea class="form-control" id="employeeAddress"ref={addressRef} rows="3"></textarea>
                        </div>                                                                    
                        <div className="mb-3 form-group">
                            <label for="employeePassword" className="form-label col-12 " style={{textAlign:"left"}}>Password</label>
                            <input className="form-control form-control-sm" ref={passwordRef} id="employeePassword" type="password"/>
                        </div>                                                 
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>

        </div>  
        </div>
              
    //  <div style={MainLoginStyle}>
    //      <div style={TopheaderStyle}>
    //      <div style={AdminTitleStyle}>
    //             <h3>E-Survey</h3>            
    //     </div>                           
    //     </div>

    //     <div>

    //         <table>
    //         <tr>
    //             <th>Company</th>
    //             <th>Contact</th>
    //             <th>Country</th>
    //         </tr>
    //         <tr>
    //             <td>Alfreds Futterkiste</td>
    //             <td>Maria Anders</td>
    //             <td>Germany</td>
    //         </tr>
    //         <tr>
    //             <td>Centro comercial Moctezuma</td>
    //             <td>Francisco Chang</td>
    //             <td>Mexico</td>
    //         </tr>
    //         <tr>
    //             <td>Ernst Handel</td>
    //             <td>Roland Mendel</td>
    //             <td>Austria</td>
    //         </tr>
    //         <tr>
    //             <td>Island Trading</td>
    //             <td>Helen Bennett</td>
    //             <td>UK</td>
    //         </tr>
    //         <tr>
    //             <td>Laughing Bacchus Winecellars</td>
    //             <td>Yoshi Tannamuri</td>
    //             <td>Canada</td>
    //         </tr>
    //         <tr>
    //             <td>Magazzini Alimentari Riuniti</td>
    //             <td>Giovanni Rovelli</td>
    //             <td>Italy</td>
    //         </tr>
    //         </table>            
    //     </div>
    //  </div>
    );
};

export default Admin;