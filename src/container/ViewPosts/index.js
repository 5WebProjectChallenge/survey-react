import { Box, Grid } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'

import { getPosts } from '../../actions/survey'
import CustomButton from '../../component/Button'
import SurveyBox from '../../component/SurveyBox'

function ViewPosts() {

  const [loading, setLoading] = useState()
  const [data, setdata] = useState([])
  const [isErorr, setisErorr] = useState()
  const currentView = "list";

  useEffect(() => {
    _getSurvey()

  }, [])


  const _getSurvey = async (from) => {
    setLoading(true)
    try {
      const response = await getPosts(from)
      const { data: newData, error } = response
      setLoading(false)
      if (!error) {
        setdata([...data, ...newData])
        const prevLastElement = document.querySelector('#p'+data[data.length -1  ].id)
        console.log("prevLastElement",prevLastElement)
        prevLastElement.scrollIntoView();
        setisErorr(false)
      } else {
        setisErorr(true)
      }
    } catch (e) {
      console.log("EXCEPTION",e)
    }
  }

  const handleOnLoadMore = () => {
    _getSurvey(data[data.length - 1].id)
  }

  return (
    <Grid container spacing={1} >
      <Box width="100%" height="10vh" padding="20px 0" overflow="hidden scroll">
        <Grid container xs={12} justify='center'>
          <h1>Showing posts</h1>
        </Grid>
      </Box>
      <Grid container spacing={3} justify='center'>
        <Box width="100%" height="80vh" overflow="hidden scroll" className="list">
          {!loading && data && data.map(item => <SurveyBox  key={item.id} {...item} />)}
        </Box>…
        </Grid>
      <CustomButton text='Load more' handleOnClick={() => handleOnLoadMore()} />
    </Grid>
  );
}

export default ViewPosts;
