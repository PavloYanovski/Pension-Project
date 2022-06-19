import React, { useEffect, useState} from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const BenefitsDetails = () => {
   const [memberData, setMemberData] = useState([]);
   const [loadFunc, setLoadFunc] = useState(true);
//    const [companyId, setCompanyId] = useState("");
//    const [sub, setSub] = useState(true);

   const getEmployee = e => {
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
        //   console.log(response.data);
        // setMemberData(response.data) ;
        if(response){   
            console.log(response);
            // setCompanyId(response.data[0].uan);           
        }
        getMembers(response.data[0].uan);
        setLoadFunc(false);
        
    })  

    // onSubmit(data);
    };

    const getMembers = e => {
            
        axios({
            url:"http://localhost:8000/api/get_benifits",
            method:"POST",
            data:{
                id:e
            },      
            dataType:"json"            
          })
          .then(response => { 
            //   console.log(response.data);
             
            if(response){   
                // console.log(response);
                setMemberData(response.data) ;
            }
            setLoadFunc(false);
            
          })  
        
        // onSubmit(data);
    };

    const subscribeFunc = (id, sub) => {
            
        axios({
            url:"http://localhost:8000/api/put_benifits",
            method:"PUT",
            data:{
                id:id,
                sub:(sub==='yes')?"no":"yes"
            },      
            dataType:"json"            
          })
          .then(response => { 
            //   console.log(response.data);
            //   setMemberData(response.data) ;
            if(response){   
                console.log(response);
                window.location.reload();
            }
            setLoadFunc(false);
            
          })  
        
        // onSubmit(data);
    };
    

    useEffect(() =>{
        // console.log("ddddd", memberData.length);
        if(loadFunc){
            getEmployee();
            
           
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
                        <h4 className='text-left'>Benefits</h4>
                    </div>
                    <div className="card-body" style={{display:"flex", flexDirection:"row"}}>

                    {/* <CardGroup> */}
                    {memberData.map((data, key)=>(
                        <Card style={{ width: '200px', margin :"40px 20px", backgroundColor:"#f5bbbb"}}>                        
                        <Card.Body>
                            <Card.Title>{data.pensionType === "pf"? "Normal Pension": null}</Card.Title>   
                            <input type="button" value={data.salaryAmount === "no"? "Subscribe": "Unsubscribe"} style={{backgroundColor: data.salaryAmount === "no"?"green":"red", color:"white", padding:"5px 20px"}} onClick={()=>subscribeFunc(data.id, data.salaryAmount)}/>
                        </Card.Body>
                    </Card>
                    ))}
                       
   
                    {/* </CardGroup>  */}

                    </div>
                </div>
                </div>
            </div>

        </div>  
        </div>
    
    );
};

export default BenefitsDetails;