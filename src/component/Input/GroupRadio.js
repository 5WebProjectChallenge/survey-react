import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import React, { Component } from 'react'

const GroupRadio = ({
  label,
  options,
  handleChange
}) => {
  return (
    <div style={{width:"80%",margin:"30px auto"}}>
    <FormControl component="fieldset" onChange={(e)=>handleChange(e.target.value)}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
        {options.map(({value,text}) => <FormControlLabel value={value} control={<Radio />} label={text} /> )}
      </RadioGroup>
    </FormControl>
    </div>
  )
}

export default GroupRadio