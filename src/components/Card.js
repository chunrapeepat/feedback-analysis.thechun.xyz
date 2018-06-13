import React, {Component} from 'react'
import styled from 'styled-components'

import ReviewModal from './ReviewModal'
import {Container, fonts, fontSize, colors, media} from '../core/styled'

const CardContainer = styled.div`
  border-radius: 5px;
  border: 1px solid #ccc;
  height: 200px;
  cursor: pointer;

  &:hover {
    & > div:nth-child(1) {
      background: #f0f0f0;
      text-decoration: underline;
    }
  }
`

const EmptyCardContainer = styled.div`
  border-radius: 5px;
  border: 5px dashed #ccc;
  height: 200px;
  cursor: pointer;
  text-align: center;
  color: ${colors.content};

  & > i {
    font-size: 4rem;
    margin-top: 40px;
  }

  & > span {
    display: block;
    font-family: ${fonts.normal};
    margin-top: 10px;
    font-size: ${fontSize.subheader - 0.2}rem;
  }

  &:hover {
    background: #fafafa;
  }
`

const Header = styled.div`
  font-family: ${fonts.header};
  font-size: ${fontSize.header - 0.2}rem;
  padding: 10px;
  overflow: hidden;
  background: #fafafa;
  height: 150px;
`

const Countdown = styled.div`
  font-family: ${fonts.normal};
  font-weight: bold;
  padding: 13px 10px;
  color: ${colors.content};
`

const Review = styled.span`
  color: green;

  & i {
    margin-right: 5px;
  }
`

export default class Card extends Component {
  datetimeFormat = (dateString) => {
    const date = new Date(dateString)
    const diff = Math.floor((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    if (diff == 0) {
      return `today`
    }
    if (diff < 0) {
      return `you can review it now`
    }
    return `${diff} day${diff == 1 ? '' : 's'} left`
  }

  render = () => {
    const data = this.props.data
    return (
      <CardContainer onClick={this.props.onClick}>
        <Header>{data.name}</Header>
        <Countdown>
          {data.isReview &&
            <Review><i className="zmdi zmdi-check-circle"></i> Already reviewed</Review>
          }
          {!data.isReview &&
            <span>{this.datetimeFormat(data.reviewDate)}</span>
          }
        </Countdown>
      </CardContainer>
    )
  }
}

export const EmptyCard = ({...props}) => (
  <EmptyCardContainer {...props}>
    <i className="zmdi zmdi-plus-circle-o"></i>
    <span>New Assumption</span>
  </EmptyCardContainer>
)
