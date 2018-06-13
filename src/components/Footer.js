import React from 'react'
import styled from 'styled-components'

import {Container, fonts, fontSize, colors, media} from '../core/styled'

const FooterContainer = styled.div`
  font-family: ${fonts.header};
  font-size: ${fontSize.normal}rem;
  color: ${colors.content};
  background: white;
  width: 100vw;
  padding: 10px 0;

  ${media.tablet`
    padding-top: 30px;
  `}
`

const Link = styled.div`
  & > a {
    color: #777;
    transition: 0s;
  }

  & > a:hover {
    color: ${colors.content};
    text-decoration: underline;
  }

  & div {
    display: inline-block;
    width: 5px;
    height: 5px;
    margin: 0 10px;
    transform: translateY(-3px);
    background: ${colors.content};
  }

  ${media.tablet`
    margin-top: 10px;
  `}
`

export default () => (
  <FooterContainer>
    <Container>
      @2018 Feedback Analysis, The Chun Rapeepat production.
      <Link>
        <a href="https://thechun.xyz/" target="_blank">TheChun.xyz</a><div/>
        <a href="https://facebook.com/chun42" target="_blank">Facebook</a><div/>
        <a href="https://github.com/chunza2542/feedback-analysis.thechun.xyz" target="_blank">Github</a>
      </Link>
    </Container>
  </FooterContainer>
)
