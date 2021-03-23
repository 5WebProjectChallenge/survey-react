import React, { useState } from 'react'
import { Dropdown, Button } from 'semantic-ui-react'
import { addSurvey } from '../../actions/survey'

import Input from '../../component/Input'
import GroupRadio from '../../component/Input/GroupRadio'
import CustomDropDown from '../../component/Input/DropDown'
import './style.css'
import MultiSelectDropDown from '../../component/Input/MultiValueSelect'
import CustomButton from '../../component/Button'


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
  const [skill, setskill] = useState([])
  const [education, seteducation] = useState('')


  const handleOnClick = async () => {
    setLoading(true)
    try {
      const response = await addSurvey({
        name,
        email,
        number,
        gender,
        education,
        skill: skill
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


  const handleMultiSelect = (value) => {
    console.log(skill)
    console.log(value)

    const isAny = skill.filter((item) => item === value)
    if (isAny[0]) {
      console.log("FIND")
      setskill(skill.filter((item) => item !== value))
    } else {
      setskill([...skill, value])
    }
  }

  return (
    <div className="survey-box">
      {loading && <h2>Loading</h2>}
      {isErorr && <h2>errorMessage</h2>}
      <Input type='text' label="Name" name="name" value={name} handleOnChange={setName} />
      <Input type='text' label="Email" name="email" value={email} handleOnChange={setemail} />
      <Input type='number' label="Number" name="name" value={number} handleOnChange={setnumber} />
      <CustomDropDown label="Education Level" options={[
        { key: 'type_1', text: 'big', value: 'big' },
        { key: 'type_2', text: 'small', value: 'small' },
        { key: 'type_3', text: 'mid', value: 'mid' }
      ]}
        handleOnChange={(e) => seteducation(e.target.value)}
      />
      <MultiSelectDropDown
        options={[
          { value: 'big', target: "big" },
          { value: 'small', target: "small" },
          { value: 'mid', target: "mid" }
        ]}
        handleOnChange={(data) => setskill(data)}
      />
      <GroupRadio
        options={[
          { value: 'Male', text: "Male" },
          { value: 'Female', text: "Female" },
          { value: 'Shuu', text: "shuu" }
        ]}
        label="Gender"
        handleChange={(gender) => setgender(gender)} />

      <CustomButton text='Submit' handleOnClick={() => handleOnClick()} />
    </div>
  );
}

export default AddPosts;
