import React, { useEffect, useState } from 'react'

import { getPosts }  from '../../actions/survey'
import SurveyBox from '../../component/SurveyBox'

function ViewPosts() {
  
  const [loading,setLoading] = useState()
  const [data,setdata] = useState([])
  const [isErorr,setisErorr] = useState()

  useEffect(()=>{
    _getSurvey()
  },[])

  const _getSurvey = async () => {
    setLoading(true)
    try{
      const  response = await getPosts()
      const  {data,error} =response
      setLoading(false)
      if(!error){
        console.log(data)
        setdata(data)
        setisErorr(false)
      }else{
        setisErorr(true)
      }
    }catch(e){

    }
  }

  return (
    <div className="App">
      <h1>Showing posts</h1>
            {!loading && data && data.map(item => <SurveyBox key={item.id} {...item}/> )}
    </div>
  );
}

export default ViewPosts;
