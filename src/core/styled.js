import styled, {css} from 'styled-components'
// style global variable and function belong here

export const fonts = {
  header: `'Abril Fatface', 'Chonburi', cursive`,
  normal: `'Merriweather', 'Trirong', serif`,
}

export const fontSize = {
  small: 0.8,
  normal: 1,
  icon: 1.2,
  big: 1.3,
  giant: 2,
  quote: 3.5,
}

export const colors = {
  main: '#333',
  content: '#555',
  fade: '#888',
  background: '#f8f8f8',
  whiteMain: '#eee',
  whiteContent: '#ccc',
  whiteFade: '#999',
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
