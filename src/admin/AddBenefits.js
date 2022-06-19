import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AddBenefits = () => {
    const [memberData, setMemberData] = useState([]);
    const pensionTypeRef = React.useRef();
    const employeeIdRef = React.useRef();
    const dateRef = React.useRef();
    const salaryAmountRef = React.useRef();
    const user = sessionStorage.getItem('Id');


    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            pensionType: pensionTypeRef.current.value,
            employeeId: user,            
            date: "",
            salaryAmount: ""
            
        };
      
        
        
        axios({
            url:"http://localhost:8000/api/add_benifits",
            method:"POST",      
            dataType:"json",      
            data:data
          })
          .then(response => { 
              
            if(response.status === 200){   
                // console.log(response.data);
               const msg = (response.data.message === "already") ? "Already added beneifits!":"Successfullay added beneifits!";
                alert(msg);
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
                        <li className="nav-item"><a className="nav-link" href="\members">Employee Details</a></li>
                        <li className="nav-item"><a className="nav-link active" href="\add_beneifts">Add Beneifts</a></li>
                            {/* <li className="nav-item"><a className="nav-link" href="\admin_dashboard">Create Employee</a></li>                             */}
                            {/* <li className="nav-item"><a className="nav-link active" href="">Details</a></li>                         */}
                            {/* <li className="nav-item"><a className="nav-link" href="">Approval</a></li> */}
                        </ul>
                        <div className="d-flex">
                        <div className="dropdown">
                        
                                <a className="me-3" href="/" >                                
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
                        <h4 className='text-left'>Add Beneifts</h4>
                    </div>
                    <div className="card-body">
                    <form onSubmit={handleSubmit} >
                        <div class="mb-3 form-group ">
                            <label for="formFile" className="form-label col-12" style={{textAlign:"left"}}>Beniefts Type</label>
                            <select className="form-control" type="text" ref={pensionTypeRef}  id="formFile">
                                <option value=""></option>
                                    <option value="pf">Salary Pension</option>
                                <option value="widow">Widow Pension</option>                                
                                <option value="child">Child Pension</option>
                                <option value="orphan">Orphan Pension</option>
                                <option value="reduced">Reduced Pension</option>
                            </select>
                        </div>
                        {/* <div class="mb-3 form-group ">
                            <label for="formFile" className="form-label col-12" style={{textAlign:"left"}}>Select a employee</label>
                            <select className="form-control" type="text" ref={employeeIdRef}  id="formFile">
                                {memberData.map((val) => 
                                <option value={val.id}>{val.email}</option>
                                )}
              
                            </select>
                        </div>  */}

                        {/* <div class="mb-3 form-group ">
                            <label for="formFile" className="form-label col-12" style={{textAlign:"left"}}>Date</label>
                            <input className="form-control" type="date" ref={dateRef}  id="companyName"/>
                        </div>                                                
                        <div class="mb-3 form-group ">
                            <label for="companyName" className="form-label col-12" style={{textAlign:"left"}}>Salary amount</label>
                            <input className="form-control" type="text" ref={salaryAmountRef}  id="companyName"/>
                        </div>                                                   */}
                        <button type="submit" class="btn btn-primary">Add</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>

        </div>  
        </div>
    );
};

export default AddBenefits;