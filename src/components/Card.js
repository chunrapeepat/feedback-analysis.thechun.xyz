import React, {Component} from 'react'
import styled from 'styled-components'

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

export const Card = () => (
  <CardContainer>
    <Header>Stupid Hackathon #2</Header>
    <Countdown>251 days left</Countdown>
  </CardContainer>
)

export const EmptyCard = () => (
  <EmptyCardContainer>
    <i className="zmdi zmdi-plus-circle-o"></i>
    <span>Create new item</span>
  </EmptyCardContainer>
)
