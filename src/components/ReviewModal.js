import React, {Component} from 'react'
import styled from 'styled-components'
import {Modal, Button, Input, notification} from 'antd'

import Card from './Card'
import * as helper from '../core/helper'
import {fonts, fontSize} from '../core/styled'

const {confirm} = Modal
const {TextArea} = Input

const Header = styled.h1`
  margin: 0;
  font-family: ${fonts.header};
  font-size: ${fontSize.normal + 0.2}rem;
  transform: translateY(5px);
`

const initialState = {
  visible: false,
  loadingRemove: false,
  loadingReview: false,
  concludeInput: '',
}

export default class extends Component {
  state = initialState

  hasError = () => {
    const date = new Date(this.props.data.reviewDate)
    const diff = Math.floor((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    // if diff > 0 you can't review this item
    return diff > 0
  }

  handleRemove = () => {
    this.setState({loadingRemove: true})
    const alternativeThis = this
    const data = this.props.data
    // remove item
    confirm({
      title: 'Do you want to delete this item?',
      content: 'Are you sure to remove this item? you cannot undo it back after deleting it.',
      onOk() {
        helper.removeItem(data.id)
        // show notification
        notification['success']({
          message: 'Success!',
          description: 'Item has been removed.',
        })
        // reload page
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      },
      onCancel() {
        alternativeThis.setState({loadingRemove: false})
      },
    })
  }

  handleReview = () => {
    this.setState({loadingReview: true})
    // check error
    if (this.hasError()) {
      notification['error']({
        message: 'Error',
        description: 'Something went wrong, please try again.',
      })
    }
    // update review and conclusion
    const data = this.props.data
    helper.updateItem(data.id, 'isReview', true)
    helper.updateItem(data.id, 'conclusion', this.state.concludeInput)
    // show notification
    notification['success']({
      message: 'Success!',
      description: 'This assumption has been reviewed.',
    })
    // reload oage
    setTimeout(() => {
      window.location.reload()
    }, 1500)
  }

  handleChange = e => {
    this.setState({concludeInput: e.target.value})
  }

  handleCancel = () => {
    this.setState(initialState)
  }

  componentDidMount = () => {
    this.setState({concludeInput: this.props.data.conclusion})
  }

  render = () => {
    const data = this.props.data
    return (
      <div>
        <Card onClick={() => this.setState({visible: true})} data={data}/>

        <Modal
          width={700}
          visible={this.state.visible}
          title={(<Header>{data.name}</Header>)}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Close</Button>,
            <Button type="danger" loading={this.state.loadingRemove} onClick={this.handleRemove}>
              Remove
            </Button>,
            <Button disabled={this.hasError()} type="primary" loading={this.state.loadingReview} onClick={this.handleReview}>
              Review
            </Button>,
          ]}>

            <pre>
              {data.assumption}
            </pre>

            <TextArea
              value={this.state.concludeInput}
              onChange={this.handleChange}
              disabled={this.hasError()}
              style={{'marginTop': '10px'}}
              rows={this.hasError() ? 2 : 5}
              placeholder="What actually happened?"/>
          </Modal>
      </div>
    )
  }
}
