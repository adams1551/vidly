import React, { Component } from 'react';
import joi  from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {
    state = { 
        data:{},
        errors: {}
     } 
     handleChange = ({currentTarget: input}) => {
        const data = {...this.state.data}
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        data[input.name] =input.value;
        this.setState({data, errors:errors || {}}) 
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
        this.doSubmit()
    }
    renderButton (label) {
       return (<button className="btn btn-primary" disabled = 
         {this.validate()} >{label}</button>)
    }
    renderInput(name, label, type){
        return(
            <Input 
        name= {name}
         autoFocus
        label = {label}
        type = {type}
        onChange = {this.handleChange}
        value = {this.state.data[name]}
        error = {this.state.errors[name]} />
        )
    }
    renderSelect(name, label, type, options){
        return(
            <Select 
        name= {name}
        label = {label}
        type = {type}
        options = {options}
        onChange = {this.handleChange}
        value = {this.state.data[name]}
        error = {this.state.errors[name]} />
        )
    }
}
 
export default Form;