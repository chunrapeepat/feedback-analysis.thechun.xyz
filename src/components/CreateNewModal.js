import React, {Component} from 'react'
import styled from 'styled-components'
import {Modal, Button, Input, Select} from 'antd'

import {fonts, fontSize} from '../core/styled'

const {TextArea} = Input
const {Option} = Select

const Header = styled.h1`
  margin: 0;
  font-family: ${fonts.header};
  font-size: ${fontSize.normal + 0.2}rem;
  transform: translateY(5px);
`

export default class extends Component {
  state = {
    visible: this.props.visible,
  }
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }

  componentWillReceiveProps = nextProps => {
    this.setState({visible: nextProps.visible})
  }

  render = () => (
    <div>
      <Modal
        width={700}
        visible={this.state.visible}
        title={(<Header>New Assumption</Header>)}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>Return</Button>,
          <Button key="submit" type="primary" loading={true} onClick={this.handleOk}>
            Submit
          </Button>,
        ]}>
          <Input placeholder="What you gonna do?" />

          <TextArea style={{'marginTop': '10px'}} placeholder="What you expect will happen in the future (your assumption, features, functionality)..." rows={5} />

          <Select style={{'marginTop': '10px'}} defaultValue="">
            <Option value="">how long you will back to conclude the result</Option>
            <Option value="30">30 days - very-short-term goal</Option>
            <Option value="50">50 days - short-term goal</Option>
            <Option value="150">150 days - medium-term goal</Option>
            <Option value="300">300 days - long-term goal</Option>
          </Select>
        </Modal>
    </div>
  )
}
