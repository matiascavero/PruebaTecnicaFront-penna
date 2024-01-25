import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/components/app'
import '/style.scss'

const root = createRoot(document.getElementById('app'))
root.render(
  <App/>
)