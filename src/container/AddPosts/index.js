import React, { useState } from 'react'
import Input from '../../component/Input'

function AddPosts() {

  const [name,setName ] = useState()
  const [email,setemail ] = useState()
  const [number,setnumber ] = useState()
  const [gender,setgender ] = useState()
  const [education,seteducation ] = useState()

  return (
    <div className="App">
            <Input type='text' label="Name" width="80%" margin="10px auto" name="name" handleOnChange={setName}/>    
            <Input type='text' label="Email" width="80%" margin="10px auto" name="email" handleOnChange={setemail}/>    
            <Input type='number' label="Number" width="80%" margin="10px auto" name="name" handleOnChange={setnumber}/>    
            {/* <Input type='number' label="Number" width="80%" margin="10px auto" name="name" handleOnChange={setnumber}/>     */}
    </div>
  );
}

export default AddPosts;
