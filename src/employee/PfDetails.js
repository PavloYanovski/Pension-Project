import React, { useEffect, useState} from 'react';
import axios from 'axios';

const BenefitsDetails = () => {
   const [memberData, setMemberData] = useState([]);
   const [loadFunc, setLoadFunc] = useState(true);

    const getBeneifits = e => {
        const user = sessionStorage.getItem('Id');

        axios({
            url:"http://localhost:8000/api/get_benifits",
            method:"POST",   
            data:{
                id:user
            },    
            dataType:"json"            
          })
          .then(response => { 
              
            
            if(response.data.length !== 0){   
                
                setMemberData(response.data) ;
            }
            else{
                setLoadFunc(false);
            }
            
          })  
        
        // onSubmit(data);
    };

    useEffect(() =>{
       
        if(loadFunc){
            console.log("ddddd", memberData.length);
            getBeneifits();
        }
        // getMembers();        
    })
    return (
        <div>
            <nav className='top-app-bar navbar navbar-expand navbar-dark bg-primary'>
                <div className='container-fluid px-4'>
                    <a href="" className='navbar-brand me-auto'>Employee</a>
                </div>

                <div className='d-flex align-items-center mx-3 me-lg-0 col-md-6 justify-content-end'>
                        <ul className="navbar-nav d-none d-lg-flex">                            
                            <li className="nav-item"><a className="nav-link active" href="\dashboard_employee">Beneifts Details</a></li>
                            {/* <li className="nav-item"><a className="nav-link" href="\pf_calculation">Pension Calculation</a></li> */}
                            {/* <li className="nav-item"><a className="nav-link active" href="">Details</a></li>                         */}
                            <li className="nav-item"><a className="nav-link" href="\profile">Profile</a></li>
                        </ul>
                        <div className="d-flex">
                        <div className="dropdown">
                        
                                <a className="me-3" href="/" style={{color:"orange"}}>                                
                                Logout
                                </a>
                                
                            </div>
                        </div>
                </div>
            </nav>
            
        <div className='container py-5 h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className="col-12 col-md-8 col-lg-6 col-xl-10">
                <div className="card px-0">
                    <div className="card-header">
                        <h4 className='text-left'>Pension Status</h4>
                    </div>
                    <div className="card-body">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                            <th scope="col">Date</th>                                                        
                            <th scope="col">Basic+DA for PF</th>                            
                            {/* <th scope="col">Salary</th>                             */}
                            <th scope="col">Employee Share 8%</th>
                            <th scope="col">Employer Share 3%</th>

                                                                           
                            <th scope="col">Total EPF Contribution</th>
                            <th scope="col">Total EPS Amount (5% share)</th>
                            </tr>
                        </thead>
                        <tbody>
                        {memberData.map((user, index)=> (
                            <tr id={"col-"+index}>
                                <td>{user.date}</td>                                
                                <td>{user.salaryAmount}</td>
                                <td>{user.salaryAmount*8/100}</td>
                                <td>{user.salaryAmount*3/100}</td>        
                                <td>{user.salaryAmount*8/100 + user.salaryAmount*3/100}</td>                                                        
                                <td>{user.salaryAmount*5/100 + user.salaryAmount*3/100}</td>  
                                {/* <td></td>              */}
                            </tr>
                        ))}
                            
                        </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>

        </div>  
        </div>
    
    );
};

export default BenefitsDetails;