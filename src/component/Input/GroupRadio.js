import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

export default class RadioGender extends Component {
  state = {}
  handleChange = (e, { value }) => {
    
        const { setgender } = this.props
        setgender(value)    
        this.setState({ value })
    
    }

  render() {
    return (
      <Form>
        <Form.Field>
          Gender: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Male'
            name='radioGroup'
            value='Male'
            checked={this.state.value === 'Male'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Female'
            name='radioGroup'
            value='Female'
            checked={this.state.value === 'Female'}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field>
          <Radio
            label='Shuuu'
            name='radioGroup'
            value='Shuuu'
            checked={this.state.value === 'Shuuu'}
            onChange={this.handleChange}
          />
        </Form.Field>

      </Form>
    )
  }
}