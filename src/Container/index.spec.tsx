import React from 'react'
import { render } from '@testing-library/react'
import Container from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Container component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Container>Contain it</Container>
      </ThemeProvider>
    )
    expect(getByText('Contain it')).toBeTruthy()
  })
})
