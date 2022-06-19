import React, { useEffect, useState} from 'react';
import axios from 'axios';

const Profile = () => {
   const [memberData, setMemberData] = useState([]);
    const getMembers = e => {
        const user = sessionStorage.getItem('Id');
        axios({
            url:"http://localhost:8000/api/get_employee",
            method:"POST",   
            data:{
                id:user
            },    
            dataType:"json"            
          })
          .then(response => { 
              console.log(response.data);
              setMemberData(response.data[0]) ;
            if(response){   
                console.log(response);
            }
            
          })  
        
        // onSubmit(data);
    };

    useEffect(() =>{
        console.log("ddddd", memberData.length);
        if(memberData.length === 0){
            getMembers();
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
                            <li className="nav-item"><a className="nav-link" href="\dashboard_employee">Beneifts Details</a></li>
                            {/* <li className="nav-item"><a className="nav-link" href="\pf_calculation">Pension Calculation</a></li> */}
                            {/* <li className="nav-item"><a className="nav-link active" href="">Details</a></li>                         */}
                            <li className="nav-item"><a className="nav-link active" href="\profile">Profile</a></li>
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
                        <h4 className='text-left'>Profile</h4>
                    </div>
                    <div className="card-body">
                    <div class="row">
                        <div class="col-2 col-sm-2" style={{textAlign:"right"}}>
                            <h5>Name</h5>
                        </div>
                        <div class="col-8 col-sm-8" style={{textAlign:"left"}}>
                            <p style={{marginTop:"3px"}}>{memberData.username}</p>
                        </div>
                    </div>  
                    <div class="row">
                        <div class="col-2 col-sm-2" style={{textAlign:"right"}}>
                            <h5>Email</h5>
                        </div>
                        <div class="col-8 col-sm-8" style={{textAlign:"left"}}>
                            <p style={{marginTop:"3px"}}>{memberData.email}</p>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col-2 col-sm-2" style={{textAlign:"right"}}>
                            <h5>Phone Number</h5>
                        </div>
                        <div class="col-8 col-sm-8" style={{textAlign:"left"}}>
                            <p style={{marginTop:"3px"}}>{memberData.mobile}</p>
                        </div>
                    </div>   

                                                                                                                    
                   
                    </div>
                </div>
                </div>
            </div>

        </div>  
        </div>
    
    );
};

export default Profile;