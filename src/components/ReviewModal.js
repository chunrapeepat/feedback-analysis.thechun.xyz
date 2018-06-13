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
        title={(<Header>NoobProgrammer Thailand Community</Header>)}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>Close</Button>,
          <Button type="danger" loading={true} onClick={this.handleOk}>
            Remove
          </Button>,
          <Button type="primary" loading={true} onClick={this.handleOk}>
            Review
          </Button>,
        ]}>
          <TextArea disabled placeholder="What you expect will happen in the future (your assumption, features, functionality)..." rows={5} />
          <TextArea disabled style={{'marginTop': '10px'}} placeholder="What actually happened?" rows={2} />
        </Modal>
    </div>
  )
}
