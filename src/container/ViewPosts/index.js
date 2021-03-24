import { Box, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { getPosts } from '../../actions/survey'
import CustomButton from '../../component/Button'
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

  const handleOnLoadMore = () => {

  }

  return (
    <Grid container spacing={1} >
      <Grid container xs={12} justify='center'>
        <h1>Showing posts</h1>
      </Grid>
      <Box height="80vh" overflow='hidden scroll'>
        <Grid container spacing={3} >
          {!loading && data && data.map(item => <SurveyBox key={item.id} {...item} />)}
        </Grid>
      </Box>…
      <CustomButton text='Load more' handleOnClick={() => handleOnLoadMore()} />
    </Grid>
  );
}

export default ViewPosts;
