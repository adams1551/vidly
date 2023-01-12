import React from 'react';
import joi from 'joi-browser';
import Form from './Form';


class LoginForm extends Form {
    state = { 
        data:{
            username: '',
            password: ''
        },
        errors: {}
     } 
     schema = {
        ussername: joi.string().required().min(5).label('Ussername'),
        password: joi.string().required().min(5).label('Password')
     }
    
    doSubmit = () =>{
        console.log('form submitted')
    }
   
    render() { 

        
        return (
            <div>
                
                <h1>Login Form</h1>
                     <form onSubmit={this.handleSubmit}>
                    
                            {this.renderInput('username', "Username", 'text')}
                     
                            {this.renderInput('password', 'Password', 'password')}
                        
                        
                        <button className="btn btn-primary" disabled = 
                         {this.validate()} >Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;