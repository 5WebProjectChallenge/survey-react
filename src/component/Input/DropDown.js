import { FormControl, InputLabel, NativeSelect, TextField } from '@material-ui/core';
import React from 'react';

import './style.css'

const CustomDropDown = ({
    label,
    value,
    padding,
    options,
    margin = "20px auto",
    name,
    width = "80%",
    type = 'text',
    handleOnChange = () => undefined
}) => (
    <div
        style={{
            padding: padding,
            margin: margin,
            width: width
        }}>

        <FormControl
            className={"dropdown-tag"}
        >
            <InputLabel htmlFor="customized-select-native">{label}</InputLabel>
            <NativeSelect
                id="customized-select-native"
                value={value}
                onChange={handleOnChange}
            >
                {options.map(({ value, id, text }) => <option id={id} value={value}>{text}</option>)}
            </NativeSelect>
        </FormControl>
    </div>
);

export default CustomDropDown;