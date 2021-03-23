import React from 'react';

import './style.css'

const Input = ({ 
        label, 
        value,
        textAlign, 
        padding, 
        margin, 
        fs, 
        name,
        width,
        readOnly=true,
        type='text',
        handleOnChange=()=>undefined,
        setActiveInput=()=>undefined
     }) => (
    <div 
        className="input-tag" 
        style={{ 
            padding: padding, 
            margin: margin, 
            fontSize: fs, 
            textAlign: textAlign, 
            width: width
        }}>
		<label style={{textAlign:"left !important"}}>{label}</label>
		<input
            readOnly={readOnly}
            type={type}
            value={value}
            name={name}
            onChange={(e)=>handleOnChange(e.target.value)}
            onFocus={()=>setActiveInput(name)}
			style={{ 
                fontSize: fs, 
                width: '100%',
             }}
		/>
	</div>
);

export default Input;