import { Button } from '@material-ui/core';
import React from 'react'

const CustomButton = ({text,handleOnClick}) => {
  return (
    <div style={{width:"80%",margin:"30px auto"}}>
      <Button color="primary" onClick={()=>handleOnClick()}>{text}</Button>
    </div>
  );
}

export default CustomButton;
