import React, { useState } from 'react'
import { Dropdown, Button } from 'semantic-ui-react'
import { addSurvey } from '../../actions/survey'

import Input from '../../component/Input'
import RadioGender from '../../component/Input/GroupRadio'
import './style.css'


const edLvloptions = [
  { key: 11, text: 'mid', value: 'mid' },
  { key: 22, text: 'pro', value: 'pro' },
  { key: 33, text: 'superman', value: 'superman' },
]

const skillsoptions = [
  { key: 1, text: 'react', value: 'react' },
  { key: 2, text: 'node', value: 'node' },
  { key: 3, text: 'typescript', value: 'typescript' },
]

function AddPosts() {

  const [loading, setLoading] = useState()
  const [isErorr, setisErorr] = useState()
  const [errorMessage, seterrorMessage] = useState()

  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [number, setnumber] = useState('')
  const [gender, setgender] = useState('')
  const [education, seteducation] = useState('')


  const handleOnClick = async () => {
    console.log(name)
    console.log(email)
    console.log(number)
    console.log(gender)
    console.log(education)

    setLoading(true)
    try {
      const response = await addSurvey({
        name,
        email,
        number,
        gender,
        education,

      })
      const { data, error, message } = response
      setLoading(false)
      if (!error) {
        console.log(data)
        setisErorr(false)
      } else {
        setisErorr(true)
        seterrorMessage(message)
      }
    } catch (e) {
      setLoading(false)

      setisErorr(true)
      seterrorMessage("Server Error")
    }
  }
  return (
    <div className="survey-box">
      {loading && <h2>Loading</h2>}
      {isErorr && <h2>errorMessage</h2>}
      <Input type='text' label="Name" width="80%" margin="10px auto" name="name" value={name} handleOnChange={setName} />
      <Input type='text' label="Email" width="80%" margin="10px auto" name="email" value={email} handleOnChange={setemail} />
      <Input type='number' label="Number" width="80%" margin="10px auto" name="name" value={number} handleOnChange={setnumber} />
      <Dropdown text="education level" fluid options={[
        { key: 'type_1', text: 'big', value: 'big' },
        { key: 'type_2', text: 'small', value: 'small' },
        { key: 'type_3', text: 'mid', value: 'mid' }
      ]} selection onChange={({ value }) => seteducation(value)} />

      <Dropdown text="skills level" fluid options={[
        { key: 11, text: 'react', value: 'react' },
        { key: 22, text: 'node', value: 'node' },
        { key: 33, text: 'typescript', value: 'typescript' },
      ]} selection onChange={({ value }) => console.log(value)} />

      <RadioGender setgender={(gender) => setgender(gender)} />

      <Button content='Submit' onClick={() => handleOnClick()} />
    </div>
  );
}

export default AddPosts;
