import React from 'react';
import joi from 'joi-browser';
import { genres } from '../services/fakeGenreService';
import Input from './input';
import Form from './Form';

class Register extends Form {
    state = { 
        data: {
            ussername: "",
            password: "",
            genres:''
        },
        errors: {}

     } 
     componentDidMount() { 
        this.setState({genres: genres})
      }
     schema = {
        ussername: joi.string().required().min(5).label('Ussername'),
        password: joi.string().required().min(5).label('Password'),
        genres: joi.string().required().label('Movie Type')
     }
     validate = () => {
        const option = {abortEarly: false}
        const result = joi.validate(this.state.data, this.schema, option)
        console.log(result)
        if(!result.error) return null;

        const errors = {};
        for(let item of result.error.details)
        errors[item.path[0]] = item.message;
        return errors;
        
    }
    validateProperty = ({name, value}) =>{
       const obj = { [name] : value}
       const schema = {[name]: this.schema[name]}
       const {error} = joi.validate(obj, schema )
       return error ? error.details[0].message : null;
    }
     
    handleSubmit = e => {
        e.preventDefault();
        
        const errors = this.validate()
        this.setState({errors: errors || {}})
        console.log(errors)
        if(errors) return;
        
    }
    render() { 
        const {data} = this.state
        return (
            <>
            <h2>Register Form</h2>
            <form onSubmit={this.handleSubmit}>
                        <Input 
                        name= "ussername"
                         autoFocus
                        label = "Ussername"
                        type = 'text'
                        onChange = {this.handleChange}
                        value = {data.ussername}
                        error = {this.state.errors.ussername} />
                        <div>
                        <select className="form-control" value = {data.genres} 
                        onChange={this.handleChange} name= 'genres'  
                        aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            {/* <option value="1">Action</option>
                            <option value="2">Comedy</option>
                            <option value="3">Thriller</option> */}
                            {genres.map(gen => (<option key={gen._id} value={gen._id}>{gen.name}</option>))}
                        </select>
                        
                        {/* {errors && <div className="alert alert-danger alert-role">
                         {errors} */}

                         {/* </div>} */}
                         </div>
                        {/* {this.renderSelect('genres', 'Movie Type',
                         data.genres)} */}
                        <Input 
                        name= "password"
                        label = "Password"
                        type = 'password'
                        onChange = {this.handleChange}
                        value = {data.password} 
                        error = {this.state.errors.password}/>
                        
                    <button className="btn btn-primary" disabled = {this.validate()} >Login</button>
                </form>
            </>
        );
    }
}
 
export default Register;