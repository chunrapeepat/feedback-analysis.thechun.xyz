import React, {Component} from 'react'
import styled from 'styled-components'

import ReviewModal from './ReviewModal'
import CreateNewModal from './CreateNewModal'
import {Container, fonts, fontSize, colors, media} from '../core/styled'

const AppContainer = styled.div`
  padding: 20px 0;

  ${media.tablet`
    padding: 10px 0;
  `}
`

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto auto;

  ${media.desktop`
    grid-template-columns: auto auto;
  `}

  ${media.tablet`
    grid-template-columns: auto;
  `}
`

class App extends Component {
  render = () => (
    <AppContainer>

      <Container>
        <Grid>
          <CreateNewModal />
        </Grid>
      </Container>
    </AppContainer>
  )
}

export default App
