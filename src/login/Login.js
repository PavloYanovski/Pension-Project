import React from 'react';
import axios from 'axios';


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


const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div className="form-outline form-white mb-4">       
        <input ref={ref} type={type} className="form-control form-control-lg" placeholder={label} />
      </div>
    );
});


const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const sectionRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            section: sectionRef.current.value,
            password: passwordRef.current.value

        };
        onSubmit(data);
    };
    return (
      <form onSubmit={handleSubmit} >
        <div className="form-outline form-white mb-4">
            <select ref={sectionRef}  className="form-control form-control-lg">
                <option value="employer">Employer</option>
                <option value="employee">Employee</option>            
            </select>
        </div>          
        <Field ref={usernameRef} label="Username" type="text" />
        <Field ref={passwordRef} label="Password" type="password" />     
        <div>
            <h5 className="float-left text-color-gray mx-15">I don't have an account? <a href="/register">Sign Up</a></h5>
        </div> 
        <div>
          <button style={submitStyle} type="submit">Login</button>
        </div>
      </form>
    );
};

// Usage example:

const Login = () => {
    const handleSubmit = data => {
        var json = JSON.stringify(data, null, 4);
        const sec = (data.section === "employer") ? "employer" : "employee";
       
        axios({
            url:"http://localhost:8000/api/"+sec,
            method:"POST",      
            dataType:"json",      
            data:data
          })
          .then(response => { 
              console.log("ddddddd", response.data[0].id);    
            if(response.status === 200){ 
                // console.log(data.username, response.data) ;
                if(data.section === "employer"){
                    var userName = response.data[0].username;
                    var userId = response.data[0].id;
                }
                else{
                   var userName = response.data[0].email;
                   var userId = response.data[0].id;
                }
                

                if(data.username === userName) {
                    if(data.section === "employer"){
                        window.location.href="/admin_dashboard";
                        sessionStorage.setItem('Id', userId);
                        sessionStorage.setItem('Section', data.section);                        
                    }
                    else{
                        window.location.href="/dashboard_employee";
                        sessionStorage.setItem('Id', userId);
                        sessionStorage.setItem('Section', data.section);
                    }
                   
                }
                else{
                    alert("Username and Password incorrect!");
                }
               
                // window.location.href="\admin_dashboard";
            }
            else{
                alert("Username and Password incorrect!");
            }
            
          })  
    };
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className='row d-flex justify-content-center align-items-center h-100'>
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className='card bg-dark text-white'>
                        <div className='card-body p-5 '>
                            <div className="mb-md-5 mt-md-4 pb-5">
                                <h3 className='fw-bold mb-5 text-uppercase'>Login</h3> 
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

export default Login;