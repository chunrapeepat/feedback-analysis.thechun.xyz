import React from 'react'
import styled from 'styled-components'

import {Container, fonts, fontSize, colors, media} from '../core/styled'

const HeaderContainer = styled.div`
  margin: 20px 0;

  & > ${Container} {
    position: relative;
  }
`

const Header = styled.h1`
  margin: 0;
  cursor: pointer;
  display: inline-block;
  font-size: ${fontSize.header}rem;
  font-family: ${fonts.header};

  ${media.tablet`
    font-size: ${fontSize.header - 0.5}rem;
    margin-top: 5px;
    margin-bottom: 10px;
  `}
`

const TheChun = styled.a`
  display: block;
  position: absolute;
  width: 50px;
  height: 50px;
  background: url(/chun.jpg);
  background-size: cover;
  border-radius: 50%;

  top: 0;
  right: 0;

  ${media.desktop`
    width: 35px;
    height: 35px;
  `}
`

const Quote = styled.span`
  display: block;
  color: ${colors.content};
  font-family: ${fonts.normal};
`

export default () => (
  <HeaderContainer>
    <Container>
      <Header>Feedback Analysis</Header>
      <Quote>“Whenever you make a key decision or key action, write down what you expect will happen.” - Peter Drucker</Quote>
      <TheChun target='_blank' href='https://thechun.xyz'/>
    </Container>
  </HeaderContainer>
)
