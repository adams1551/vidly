import React from 'react'

const Input = ({name, label, value, onChange, error,autoFocus, type}) => {
    return ( 
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={type} value={value}
         className="form-control" onChange={onChange}
         name={name} 
         id={name} placeholder={label} 
         autoFocus= {autoFocus} 
         
         />
        {error && <div className="alert alert-danger alert-role">
            {error}
        </div>}
    </div>
     );
}
 
export default Input;