import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import React, { useState } from 'react';

import './style.css'

const MultiSelectDropDown = ({
    label,
    value,
    padding,
    options,
    margin = "20px auto",
    name,
    width = "80%",
    type = 'text',
    handleOnChange = () => undefined
}) => {

    const getTargetValues = (allValues) => {
        const req = allValues.map(({target}) => target)
        console.log(req)
        handleOnChange(req)
    }

    return (
        <div
            style={{
                padding: padding,
                margin: margin,
                width: width
            }}>

            <Autocomplete
                multiple
                id="tags-standard"
                options={options}
                getOptionLabel={(option) => option.value}
                defaultValue={[]}
                onChange={(e,value) => getTargetValues(value)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Multiple values"
                        placeholder="label"
                    />
                )}
            />
        </div>
    )
};

export default MultiSelectDropDown;