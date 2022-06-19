import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const MainLoginStyle = {
        
    display: 'flex',
    flexDirection:"column"
};

const LoginStyle = {
    height: '250px',
    display: 'flex',
    flexDirection:"column"
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '250px',
    display: 'block'
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};
const loginPageLinkStyle = {
    float:"left",
    color:"gray",
    margin:"15px 0px"
}

const fieldRow = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems: "baseline"

}

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div style={fieldRow}>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
});

const FieldArea = React.forwardRef(({label}, ref) => {
    return (
      <div style={fieldRow}>
        <label style={labelStyle} >{label}</label>
        <textarea ref={ref} style={inputStyle} rows="4"/>
      </div>
    );
});

const Form = ({onSubmit}) => {
    const [employerData, setEmployerData] = useState([]);
    const sectionRef = React.useRef();
    const employerRef = React.useRef();
    const fullnameRef = React.useRef();
    const emailRef = React.useRef();
    const phoneRef = React.useRef();    
    const companynameRef = React.useRef();
    const companyaddressdRef = React.useRef();
    const passwordRef = React.useRef();

    const labelStyle = {
        margin: '10px 0 5px 0',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '15px',
        float:"left"
    };

    const changeSection = e => {
        
        if(e.target.value === "employee"){
            axios({
                url:"http://localhost:8000/api/get_all_employer",
                method:"GET",      
                dataType:"json",      
                // data:data
              })
              .then(response => { 
                    
                    if(response.data.length){
                        console.log("response", response.data);
                        setEmployerData(response.data);

                    }else{
                        setEmployerData([]);
                    }
                
                
              })  
        }
        else{
            setEmployerData([]);
        }

    }

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            section: sectionRef.current.value,
            username: fullnameRef.current.value,
            employer:sectionRef.current.value === "employee"?employerRef.current.value:"",
            email: emailRef.current.value,
            mobile: phoneRef.current.value,
            companyName: sectionRef.current.value === "employer"?companynameRef.current.value : "",
            companyAddress: sectionRef.current.value === "employer"?companyaddressdRef.current.value:"",
            password: passwordRef.current.value
        };
        
        // console.log("dataaaaaaaaaa", data);
       onSubmit(data);
    };
    return (
      <form onSubmit={handleSubmit} >
        <div className="form-outline form-white mb-4">
            <select ref={sectionRef}  className="form-control form-control-lg" onChange={changeSection}>
                <option value="employer">Employer</option>
                <option value="employee">Employee</option>            
            </select>
        </div> 
        <Field ref={fullnameRef} label="Full Name" type="text" />
        <Field ref={emailRef} label="Email" type="email" />
        <Field ref={phoneRef} label="Phone Number" type="text" />

        {                    
            (employerData.length)?                        
            <div className="form-outline form-white mb-4">
                <label style={labelStyle}>Employer</label>
                <select ref={employerRef}  className="form-control form-control-lg">
                    <option value=""></option>
                    {                                                     
                        employerData.map((employer, index)=>(
                                <option value={employer.id}>{employer.company_name}</option>
                        ))                                                            
                    }                            
                </select>
            </div>                       
            :                    
            <>
            <Field ref={companynameRef} label="Company Name" type="text" />
            <FieldArea ref={companyaddressdRef} label="Company Address" />  
            </>                   
        }             

        <Field ref={passwordRef} label="Enter Password" type="password" />        
        <div>
            <h5 style={loginPageLinkStyle}>Already have an account? <a href="/">Sign In</a></h5>
        </div>        
        <div>
          <button style={submitStyle} type="submit">Submit</button>
        </div>
      </form>
    );
};

// Usage example:

const Register = () => {
    const handleSubmit = async data => {
        
        if(data.section === "employee"){
            axios({
                url:"http://localhost:8000/api/add_employee",
                method:"POST",      
                dataType:"json",      
                data:data
              })
              .then(response => { 
                  console.log("ddddddd", response);    
                  if(response.status === 200){ 
                                 
                    alert("Employee register successfully!");
                    window.location.href="/login";
            
            }
            else{
                alert("Could not create account!");
            }
                
              })  
        }
        else {
            axios({
                url:"http://localhost:8000/api/add_emploer",
                method:"POST",      
                dataType:"json",      
                data:data
              })
              .then(response => { 
                    
                if(response.status === 200){ 
                                 
                        alert("Employer register successfully!");
                        window.location.href="/login";
                
                }
                else{
                    alert("Could not create account!");
                }
                
              })
        }
          
    };
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className='row d-flex justify-content-center align-items-center h-100'>
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className='card bg-dark text-white'>
                        <div className='card-body p-5 '>
                            <div className="mb-md-5 mt-md-4 pb-5">
                                <h3 className='fw-bold mb-5 text-uppercase'>Sign-up</h3> 
                                <Form onSubmit={handleSubmit} />
                            </div>
                                            
                        </div>
                    
                    </div>
                </div>
                </div>
            </div>
        </section> 
    );
};

export default Register;