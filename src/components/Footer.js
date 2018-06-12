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

export default () => (
  <FooterContainer>
    <Container>
      The Chun Rapeepat production 2018.
    </Container>
  </FooterContainer>
)
