import React, {Component} from 'react'
import styled from 'styled-components'
import {Modal, Button, Input, Select, notification} from 'antd'

import {EmptyCard} from './Card'
import {fonts, fontSize} from '../core/styled'
import * as helper from '../core/helper'

const {TextArea} = Input
const {Option} = Select

const Header = styled.h1`
  margin: 0;
  font-family: ${fonts.header};
  font-size: ${fontSize.normal + 0.2}rem;
  transform: translateY(5px);
`

const initialState = {
  visible: false,
  loading: false,
  nameInput: '',
  assumptionInput: '',
  daysInput: '',
}

export default class extends Component {
  state = initialState

  hasError = () => {
    const state = this.state
    return state.nameInput == '' || state.assumptionInput == '' || state.daysInput == ''
  }

  handleSubmit = () => {
    this.setState({loading: true})
    // check error
    if (this.hasError()) {
      notification['error']({
        message: 'Error',
        description: 'Invalid input, please try again.',
      })
    }
    // save data to localStorage
    const state = this.state
    helper.addItem(state.nameInput, state.assumptionInput, parseInt(state.daysInput))
    // show notification
    notification['success']({
      message: 'Success!',
      description: 'New assumption has beed created.',
    })
    // reload oage
    setTimeout(() => {
      window.location.reload()
    }, 1500)
  }

  handleCancel = () => {
    this.setState(initialState)
  }

  handleChange = name => e => {
    let nextState = this.state
    nextState[`${name}Input`] = (name === 'days') ? e : e.target.value
    // update state
    this.setState(nextState)
  }

  render = () => (
    <div>
      <EmptyCard onClick={() => this.setState({visible: true})} />

      <Modal
        width={700}
        visible={this.state.visible}
        title={(<Header>New Assumption</Header>)}
        onOk={this.handleSubmit}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>Close</Button>,
          <Button disabled={this.hasError()} key="submit" type="primary" loading={this.state.loading} onClick={this.handleSubmit}>
            Submit
          </Button>,
        ]}>
          <Input
            onChange={this.handleChange('name')}
            value={this.state.nameInput}
            placeholder="What you gonna do?" />

          <TextArea
            onChange={this.handleChange('assumption')}
            value={this.state.assumptionInput}
            style={{'marginTop': '10px'}}
            placeholder="What you expect will happen in the future (your assumption, features, functionality)..." rows={5} />

          <Select
            onChange={this.handleChange('days')}
            style={{'marginTop': '10px'}}
            defaultValue="">
              <Option value="">how long you will back to conclude the result</Option>
              <Option value="0">0 day - review it anytime (not-recommended)</Option>
              <Option value="30">30 days - very-short-term goal</Option>
              <Option value="50">50 days - short-term goal</Option>
              <Option value="150">150 days - medium-term goal (recommended)</Option>
              <Option value="300">300 days - long-term goal</Option>
          </Select>
        </Modal>
    </div>
  )
}
