import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'


// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept()

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(<App />)