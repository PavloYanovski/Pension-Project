import React, { useEffect, useState} from 'react';
import axios from 'axios';


const Admin = () => {
    const user = sessionStorage.getItem('Id');
    const [memberData, setMemberData] = useState([]);
    const getMembers = e => {
     
        axios({
            url:"http://localhost:8000/api/get_select_employee",
            method:"POST",
            data:{
                id:user
            },
            dataType:"json"            
          })
          .then(response => { 
              console.log(response.data);
              
            if(response){   
                setMemberData(response.data) ;
                // console.log(response);
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
            <nav className='top-app-bar navbar navbar-expand navbar-dark bg-dark'>
                <div className='container-fluid px-4'>
                    <a href="" className='navbar-brand me-auto'>Employer</a>
                </div>

                <div className='d-flex align-items-center mx-3 me-lg-0 col-md-6 justify-content-end'>
                        <ul className="navbar-nav d-none d-lg-flex">
                            <li className="nav-item"><a className="nav-link active" href="\members">Employee Details</a></li>
                            <li className="nav-item"><a className="nav-link" href="\add_benefits">Add Beneifts</a></li>
                            {/* <li className="nav-item"><a className="nav-link" href="\admin_dashboard">Create Employee</a></li> */}
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
            <div className="col-12 col-md-8 col-lg-6 col-xl-10">
                <div className="card px-0">
                    <div className="card-header">
                        <h4 className='text-left'>Employee Details</h4>
                    </div>
                    <div className="card-body">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile No</th>
                            <th scope="col">Email</th>
                            {/* <th scope="col">Company name</th> */}
                            {/* <th scope="col">Password</th> */}
                            </tr>
                        </thead>
                        <tbody>
                        {memberData.map((user, index)=> (
                            <tr id={"col-"+index}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                                {/* <td>{user.uan}</td> */}
                                {/* <td>{user.password}</td>                */}
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

export default Admin;