import React from 'react'
import styled from 'styled-components'

import {Container, fonts, fontSize, colors} from '../core/styled'

const FooterContainer = styled.div`
  font-family: ${fonts.header};
  font-size: ${fontSize.normal}rem;
  color: ${colors.content};
  position: fixed;
  background: white;
  width: 100vw;
  bottom: 0;
  padding: 10px 0;
`

export default () => (
  <FooterContainer>
    <Container>
      The Chun Rapeepat production 2018.
    </Container>
  </FooterContainer>
)
