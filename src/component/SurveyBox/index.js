import React from 'react'
import {
    Link
  } from "react-router-dom";

import './style.css'

function SurveyBox({name,number,educationLevel,gender,skills}) {
  return (
    <span className="surveyBox">
        {console.log("HEREEE",name)}
        <span>
           <b> Name:</b> {name}
        </span>
        <span>
        <b>Number:</b> {number} 
       </span>
        <span>
            <b>Education  lvl :</b> {educationLevel} 
       </span>
        <span>
            <b>Gender :</b> {gender} 
       </span>
        <span>
            <b>Skills :</b> {skills} 
       </span>
    </span>
  );
}

export default SurveyBox;
