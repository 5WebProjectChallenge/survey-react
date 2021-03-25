import { Avatar, Card, Grid } from '@material-ui/core';
import React from 'react'
import {
  Link
} from "react-router-dom";

import './style.css'

function SurveyBox({
  name = name || "Name not provided",
  number = "Number not provided",
  educationLevel = "Education not provided",
  gender = "Gender not provided",
  skillSets = "Skills not provided",
  id
}) {
  return (
    <Grid item xs={12} lg={4} data-item="true" id={"p"+id} >

      <Card className="surveyBox" variant="outlined">

        <Grid container spacing={2} xs={12} lg={12}>
          <Grid item xs={12}>
            <Avatar >{id}</Avatar>
          </Grid>
          <Grid item xs={12}>
            <b>Education  lvl :</b> {educationLevel ? educationLevel : "Education not provided"}
          </Grid>
          <Grid item xs={12} >

            <b>skillSets :</b> {skillSets.map(skill => skill.skillName).join(',') }
          </Grid>
          <Grid item xs={12}>
            {gender || "Gender not provided"}
          </Grid>
          <Grid item xs={6}>
            {name || "Name not provided"}
          </Grid>
          <Grid item xs={6}>
            {number || "Number not provided"}
          </Grid>

        </Grid>
      </Card>
    </Grid>
  );
}

export default SurveyBox;
