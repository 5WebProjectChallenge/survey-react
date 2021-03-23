import { TextField } from '@material-ui/core';
import React from 'react';

import './style.css'

const Input = ({ 
        label, 
        value, 
        padding, 
        margin="20px auto", 
        name,
        width="80%",
        type='text',
        handleOnChange=()=>undefined
     }) => (
    <div  
        style={{ 
            padding: padding, 
            margin: margin, 
            width: width
        }}>
        <TextField
          className="input-tag"
          id="outlined-textarea"
          label={label}
          width='900px'
          type={type}
          value={value}
          onChange={(e)=>handleOnChange(e.target.value)}
          variant="outlined"
        />
	</div>
);

export default Input;