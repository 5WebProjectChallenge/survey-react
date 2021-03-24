import { Button, Grid } from '@material-ui/core';
import React from 'react'

const CustomButton = ({text,handleOnClick}) => {
  return (
    <Grid container xs={12} justify='center'>
      <Button color="primary" onClick={()=>handleOnClick()}>{text}</Button>
    </Grid>
  );
}

export default CustomButton;
