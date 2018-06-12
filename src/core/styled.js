import styled, {css} from 'styled-components'
// style global variable and function belong here

export const fonts = {
  header: `Vollkorn, serif`,
  normal: `Open Sans, sans-serif`,
}

export const fontSize = {
  normal: 1,
}

export const colors = {
  main: '#333',
  content: '#555',
}

// all helper function
const sizes = {
  giant: 1170,
  desktop: 1000,
  tablet: 600,
  phone: 376,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label]
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

// all helper components
export const Container = styled.div`
  width: ${sizes.desktop}px;
  margin: auto auto;
  ${props => props['with-margin'] ? `
    margin-top: 20px;
  ` : ''}
  ${props => props.relative ? `
    position: relative;
  ` : ``}
  ${media.desktop`
    width: 100%;
    padding: 0 10px;
  `}
`
