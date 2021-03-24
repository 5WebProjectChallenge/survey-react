import { Paper, Tab, Tabs } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import {
  Link, useHistory, useLocation
} from "react-router-dom";
import { addSurvey } from '../../actions/survey';

import './style.css'

function NavBar({ text, handleOnClick }) {

  const location = useLocation()
  console.log("location", location)
  const [currentPage, setcurrentPage] = useState('HOME')
  const history = useHistory()

  useEffect(() => {
    const { pathname } = location
    if (pathname === "/addSurvey") {
      setcurrentPage("ADD SURVEY")
    } else {
      setcurrentPage("HOME")
    }
  }, [])

  const handleChange = (selected) => {
    setcurrentPage(selected)
    if (selected === 'HOME') {
      history.push('/')
    } else {
      history.push('/addSurvey')
    }
  }

  return (
    <Paper square >
      <Tabs
        value={currentPage}
        onChange={(_, value) => handleChange(value)}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab label="HOME" value="HOME" />
        <Tab label="ADD SURVEY" value="ADD SURVEY" />
      </Tabs>
    </Paper>
  );
}

export default NavBar;
