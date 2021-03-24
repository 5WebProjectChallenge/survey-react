import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { getPosts } from '../../actions/survey'
import SurveyBox from '../../component/SurveyBox'

function ViewPosts() {

  const [loading, setLoading] = useState()
  const [data, setdata] = useState([])
  const [isErorr, setisErorr] = useState()

  useEffect(() => {
    _getSurvey()
  }, [])

  const _getSurvey = async () => {
    setLoading(true)
    try {
      const response = await getPosts()
      const { data, error } = response
      setLoading(false)
      if (!error) {
        console.log(data)
        data.sort((a, b) => b.id - a.id);
        setdata(data)

        setisErorr(false)
      } else {
        setisErorr(true)
      }
    } catch (e) {

    }
  }

  return (
    <Grid container spacing={1} >
      <Grid container xs={12} justify='center'>
        <h1>Showing posts</h1>
      </Grid>
      <Grid container spacing={3} >
        {!loading && data && data.map(item => <SurveyBox key={item.id} {...item} />)}
      </Grid>
    </Grid>
  );
}

export default ViewPosts;
