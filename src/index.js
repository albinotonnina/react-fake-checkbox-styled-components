import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ThemeProvider } from 'styled-components'

const theme = {
    breakpoints: [
        32, 48, 64
    ],
    space: [
        0, 4, 8, 16, 32
    ],
    fontSizes: [
        12, 16, 18, 24, 36, 72
    ],
    colors: {
        black: '#111',
        blue: '#07c',
    }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
